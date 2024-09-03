"use client"
import React, { useEffect } from 'react';

const withNewRelic = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  const HOC: React.FC<P> = (props) => {
    useEffect(() => {
      if (typeof window !== 'undefined' && process.env.NEW_RELIC_BROWSER_LICENSE_KEY && process.env.NEW_RELIC_APPLICATION_ID) {
        // Inject New Relic Browser Agent script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://js-agent.newrelic.com/nr-loader-spa-current.min.js`;
        script.setAttribute('data-license-key', process.env.NEW_RELIC_BROWSER_LICENSE_KEY);
        script.setAttribute('data-application-id', process.env.NEW_RELIC_APPLICATION_ID);
        script.setAttribute('data-agent', 'js-agent.newrelic.com/nr-spa-1208.min.js');

        document.head.appendChild(script);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withNewRelic;
