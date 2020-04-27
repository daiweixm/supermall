module.exports = {
  configureWebpack: {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src'),
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views'
        }
      }
  }
}
