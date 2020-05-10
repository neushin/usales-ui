const proxy = "http://localhost:8081";
module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    proxy: {
      "/api": {
        target: proxy
      },
      "/login": {
        target: proxy
      },
      "/logout": {
        target: proxy
      }
    },
    port: 8080
  }
};
