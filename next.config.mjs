// next.config.mjs
import 'newrelic';
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Apply these headers to all routes
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
            },
            {
              key: 'Surrogate-Control',
              value: 'no-store',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  