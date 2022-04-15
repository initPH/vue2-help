module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        // 目标 API 地址
        target: 'http://47.111.171.204:4001/yitou/v1/core',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: false,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
