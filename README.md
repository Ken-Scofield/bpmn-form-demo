# bpmn-demo

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Custom steps

1. add zoom in, zoom out, shortcuts
2. add properties panel
3. add camunda platform

```text
You can easily create something yourself by using the ZoomScroll module 193

const zoomScroll = modeler.get('zoomScroll');

zoomScroll.reset();
zoomScroll.stepZoom(1);
zoomScroll.stepZoom(-1);
The buttons are not part of bpmn-js, but simple HTML elements which execute these methods.
```

#### vue jsx ext

@vue/babel-plugin-transform-vue-jsx
@vue/babel-helper-vue-jsx-merge-props

```javascript
// cli v4: cl5  file-loader, url-loader, raw-loader repalced with webpack asset-module
config.module
  .rule('images')
  .use('url-loader')
  .loader('url-loader')
  .tap(options => Object.assign(options, { limit: 20000 }))
```

```javascript
config.module
  .rule('images')
  .set('parser', {
    dataUrlCondition: {
      maxSize: 4 * 1024 // 4KiB
    }
  })
```

> links
> https://webpack.docschina.org/guides/asset-modules/#root
> 
> https://next.cli.vuejs.org/migrations/migrate-from-v4.html#vue-cli-service

# issues

diagram-js
>https://github.com/bpmn-io/form-js-examples/pull/7
> 
> https://commerce.nearform.com/blog/2018/finding-webpack-duplicates-with-inspectpack-plugin/
>
> https://www.developerway.com/posts/webpack-and-yarn-magic-against-duplicates-in-bundles

```javascript
// min-dash htm preact
```
