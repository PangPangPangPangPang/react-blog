/**
 * Created by wangyefeng on 02/03/2017.
 */
// const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: { path: __dirname + '/build', filename: 'bundle.js' }, // 编译到的文件
  module: {
    loaders: [ // 使用特定的加载器 loader 处理特定的文件
      {
        test: /.js?$/, // 文件过滤规则
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: [
            ['import', {
              libraryName: 'antd',
              libraryDirectory: 'lib',
              'style': 'css'
            }]
          ],
          presets: ['es2015', 'react', "stage-0"] // es2015 处理 ES6 语法，react 处理 jsx 语法
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=25000'
      }
    ]
  },
};
