import nrExternals from 'newrelic/load-externals.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['newrelic'],
  },
  webpack: (config) => {
    nrExternals(config);
    return config;
  }
};

export default nextConfig;
