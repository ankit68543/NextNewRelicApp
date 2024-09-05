import { ReactNode } from 'react';
import Script from 'next/script'
import Link from 'next/link'
import newrelic from 'newrelic'

const Layout = async ({ children }: { children: ReactNode }) => {  
  if (newrelic.agent.collector.isConnected() === false) {
    await new Promise((resolve) => {
      newrelic.agent.on("connected", resolve)
    })
  }

  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    allowTransactionlessInjection: true,
  })

  return (
    <html>
      <head>
        <title>My Next.js App</title>
        
      </head>
      <body>      
        <header>
          <nav>
            <a href="/server/page1">Server Page 1</a>
            <a href="/server/page2">Server Page 2</a>
            <a href="/client/page1">Client Page 1</a>
            <a href="/client/page2">Client Page 2</a>
          </nav>
        </header>
        <main>
          {children}         
        </main>
        <footer>
          <p>Footer Content</p>
        </footer>
        <Script
      // We have to set an id for inline scripts.
      // See https://nextjs.org/docs/app/building-your-application/optimizing/scripts#inline-scripts
      id="nr-browser-agent"
      // By setting the strategy to "beforeInteractive" we guarantee that
      // the script will be added to the document's `head` element.
      strategy="beforeInteractive"
      // The body of the script element comes from the async evaluation
      // of `getInitialProps`. We use the special
      // `dangerouslySetInnerHTML` to provide that element body. Since
      // it requires an object with an `__html` property, we pass in an
      // object literal.
      dangerouslySetInnerHTML={{__html: browserTimingHeader}}
    />
      </body>
    </html>
  );
};

export default Layout;
