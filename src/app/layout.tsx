import { ReactNode } from 'react';
import NewRelicInit from './Utils/NewRelicInit';

const Layout = ({ children }: { children: ReactNode }) => {  
  return (
    <html>
      <head>
        <title>My Next.js App</title>
        
      </head>
      <body>
        {/* Initialize New Relic Browser Agent */}
        <NewRelicInit />
        <header>
          <nav>
            <a href="/server/page1">Server Page 1</a>
            <a href="/server/page2">Server Page 2</a>
            <a href="/client/page1">Client Page 1</a>
            <a href="/client/page2">Client Page 2</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer Content</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
