/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [''],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'txxsnmejijdynesxaijs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
