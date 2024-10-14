module.exports = {
    chainWebpack: config => {
      config.module
        .rule('images')
        .use('file-loader')
        .loader('file-loader')
        .tap(options => {
          options.name = 'src/assets/[name].[hash:8].[ext]';
          return options;
        });
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  };