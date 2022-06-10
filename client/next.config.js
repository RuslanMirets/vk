/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.APP_URL,
		APP_ENV: process.env.APP_ENV,
		APP_SERVER_URL: process.env.APP_SERVER_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	},
	images: {
		domains: ['localhost'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:5000/uploads/:path*',
			},
		];
	},
};

module.exports = nextConfig;
