const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "recommendations",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Recommendations":
              "./src/components/RelatedProducts/RelatedProducts.jsx",
          },
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
