import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*
  experimental: {
    ppr: 'incremental'
  } 
  */
};  

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
