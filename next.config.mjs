/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["mdx", "tsx", "ts"],
    eslint: {
        ignoreDuringBuilds: true,
    },

    images: {
        domains: [
            "images.unsplash.com",
            "i.pinimg.com",
            "127.0.0.1",
            "zia.photography",
            "cdn.pixabay.com",
            "www.google.com",
            "img.freepik.com",
        ],
    },
};

export default nextConfig;
