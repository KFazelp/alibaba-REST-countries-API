module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Alibaba REST Countries API";
      return args;
    });
  },

  transpileDependencies: ["vuetify"],
};
