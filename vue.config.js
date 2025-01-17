const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rule("images").exclude.add(/\.svg$/);

    config.module.rules.delete("svg");

    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
});
