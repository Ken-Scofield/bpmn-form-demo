const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// eslint-disable-next-line
const { NormalModuleReplacementPlugin } = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  assetsDir: 'static',
  chainWebpack (config) {
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    config.module.rules.delete('svg')
    // config.module.rule('svg')
    //   .test(/\.(svg)(\?.*)?$/).use('url-loader')
    //   .loader('url-loader')
    //   .options({ limit: false }).end()
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .tap(options => Object.assign(options, { limit: 1024 }))
    config.plugin('copy').use(require('copy-webpack-plugin'), [{
      patterns: [{ from: path.resolve(__dirname, './static') }]
    }]).end()
    config.module.rule('raw-bpmn')
      .test(/\.bpmn$/).use('raw-loader')
      .loader('raw-loader')
      .options({ esModule: false }).end()
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/)
      .set('parser', {
        dataUrlCondition: {
          maxSize: 10 * 1024
        }
      })
    // config.module.rule('raw-svg')
    //   .test(/\.svg$/).use('raw-loader')
    //   .loader('raw-loader')
    //   .options({ esModule: false }).end()
    // config.module.rule('svg')
    //   .test(/\.svg$/).use('url-loader')
    //   .loader('url-loader')
    //   .options({ limit: false }).end()
  },
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin([{
  //       from: path.resolve(__dirname, './static'),
  //       to: 'static'
  //     }])
  //   ]
  // }
  configureWebpack: {
    plugins: [
      // new NormalModuleReplacementPlugin(
      //   /^(..\/preact|preact)(\/[^/]+)?$/,
      //   function (resource) {
      //     const replMap = {
      //       'preact/hooks': path.resolve('node_modules/preact/hooks/dist/hooks.module.js'),
      //       'preact/jsx-runtime': path.resolve('node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js'),
      //       preact: path.resolve('node_modules/preact/dist/preact.module.js'),
      //       '../preact/hooks': path.resolve('node_modules/preact/hooks/dist/hooks.module.js'),
      //       '../preact/jsx-runtime': path.resolve('node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js'),
      //       '../preact': path.resolve('node_modules/preact/dist/preact.module.js')
      //     }
      //     const replacement = replMap[resource.request]
      //     console.log('resource-request', resource.request)
      //     if (!replacement) {
      //       return
      //     }
      //     resource.request = replacement
      //   }
      // )
    ]
  }
})
