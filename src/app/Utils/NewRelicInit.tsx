'use client';

import { useEffect } from 'react';

const NewRelicInit = () => {
  useEffect(() => {
    const initializeNewRelic = async () => {
      const licenseKey = "sdfasdfasdfsdfasdfasdf" ;
      const appName = "React_next_app_1";
      console.log('licenseKey',licenseKey);
      console.log('appName',appName);
      if (typeof window !== 'undefined' && licenseKey && appName) {
        try {
          const { BrowserAgent } = await import('@newrelic/browser-agent/loaders/browser-agent');

          const options = {
            init: {
              distributed_tracing: { enabled: true },
              privacy: { cookies_enabled: true },
              ajax: { deny_list: ['bam.nr-data.net'] },
            },
            info: {
              beacon: 'bam.nr-data.net',
              errorBeacon: 'bam.nr-data.net',
              licenseKey: licenseKey,
              applicationName: appName,
              sa: 1,
            },
            loader_config:{
                accountID:"4626977dfgdsfgsdfg",
                trustKey:"4626977dfgdsfgsdfg",
                agentID:"4626977dfgdsfgsdfg",
                licenseKey:"4626977dfgdsfgsdfg",
                applicationID:"4626977dfgdsfgsdfg"
            }
          };

          new BrowserAgent(options);
        } catch (error) {
          console.error('Failed to load New Relic BrowserAgent:', error);
        }
      }
    };

    initializeNewRelic();
  }, []);

  return null; // This component does not render anything
};

export default NewRelicInit;
