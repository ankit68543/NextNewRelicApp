import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
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
        <main>{children}</main>
        <footer>
          <p>Footer Content</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
