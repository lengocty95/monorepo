const withTM = require("next-transpile-modules")(["shared"]);

const moduleExports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/customer",
        destination: `${process.env.CUSTOMER_DOMAIN}/customer`,
      },
      {
        source: "/customer/:path*",
        destination: `${process.env.CUSTOMER_DOMAIN}/customer/:path*`,
      },
    ];
  },
});

module.exports = moduleExports;
