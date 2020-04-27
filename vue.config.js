const path = require('path')
const webpack = require('webpack')
function resolve (dir) {
    return path.join(__dirname, dir)
}

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
