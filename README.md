## move-to-public-path-webpack-plugin

用于将 webpack 构建之后产生的文件移动到 publicPath 所设置的路径。

[![npm version](https://badge.fury.io/js/move-to-public-path-webpack-plugin.svg)](https://badge.fury.io/js/move-to-public-path-webpack-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/YingJiangHui/move-to-public-path-webpack-plugin/blob/main/LICENSE)

### install
```bash
npm install move-to-public-path-webpack-plugin --save-dev
```
```bash
yarn add move-to-public-path-webpack-plugin -D
```
### webpack
```js
// webpack.config.js
const MoveToPublicPathWebpackPlugin = require('move-to-public-path-webpack-plugin').default

module.exports = {
  publicPath:'/your/public/path/',
  plugins:[
    new MoveToPublicPathWebpackPlugin()
  ]
}
```

### chainWebpack
```js
import MoveToPublicPathWebpackPlugin from 'move-to-public-path-webpack-plugin'

const chainWebpack = (config)=>{
  config.output.publicPath('/your/public/path/')
  config.plugins('move-to-public-path-webpack-plugin').use(MoveToPublicPathWebpackPlugin)
}
```