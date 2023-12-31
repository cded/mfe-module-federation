const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack(config, options) {
    console.log(config);
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            checkout: "remote@http://localhost:3001/remote.js",
            related:
              "recommendations@http://localhost:2008/_next/static/chunks/remoteEntry.js",
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
      config.optimization.splitChunks = false;
    }

    return config;
  },
};

module.exports = nextConfig;
