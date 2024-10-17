/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Proxy to your API server
        },
      ],
    };
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
        },
      },
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
