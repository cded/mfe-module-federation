const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            checkout: "remote@http://localhost:3001/remote.js",
            recommendations:
              "remote@http://localhost:4173/assets/remoteEntry.js",
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
