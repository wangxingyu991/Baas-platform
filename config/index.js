'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        //target: 'http://127.0.0.1:18080',
        target: 'http://172.16.80.122:18080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/manage': {
        // target: 'http://127.0.0.1:18083',
         target: 'http://172.16.80.122:30050',
        changeOrigin: true,
        pathRewrite: {
          '^/manage' : ''
        }
      },
      '/order': {
        // target: 'http://172.16.196.64:18082',
        target: 'http://172.16.80.122:30070',
        changeOrigin: true,
        pathRewrite: {
          '^/order' : ''
        }
      },
      '/permission': {
        // target: 'http://127.0.0.1:18082',
        target: 'http://172.16.80.122:18082',
        changeOrigin: true,
        pathRewrite: {
          "^/permission": ''
        }
      },
      '/workorder': {
        // target: 'http://127.0.0.1:18085',
        target: 'http://172.16.80.122:30060',
        changeOrigin: true,
        pathRewrite: {
          "^/workorder" : ''
        }
      },
      '/usptask': {
        // target: 'http://127.0.0.1:18086',
        target: 'http://172.16.80.122:30080',
        changeOrigin: true,
        pathRewrite: {
          "^/usptask" : ''
        }
      },
      '/icpmanagement': {
       target: 'http://127.0.0.1:30130',
      //target: 'http://172.16.80.122:300130',
        changeOrigin: true,
        pathRewrite: {
          "^/icpmanagement" : ''
        }
      },
      '/icptask': {
        // target: 'http://127.0.0.1:18080',
        target: 'http://172.16.80.122:300170',
        changeOrigin: true,
        pathRewrite: {
          "^/icptask" : ''
        }
      }
    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    userLocalIp:true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
