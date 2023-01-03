/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://moida-skhu.duckdns.org/:path*',
            },
        ];
    },
};

module.exports = nextConfig;