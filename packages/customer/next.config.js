const withTM = require("next-transpile-modules")(["shared"]);

const moduleExports = withTM({
  basePath: "/customer",

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
});

module.exports = moduleExports;
