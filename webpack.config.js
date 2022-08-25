const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const package = require('./package.json');
module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:"js/[name].js",
    clean:true,
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        loader:"./loaders/clean-log-loader.js"
      },
      {
        test:/\.js$/,
        loader:"./loaders/banner-loader/index.js",
        options:{
          package
        }
      }
      // {
      //   test:/\.js$/,
      //   loader:"./loaders/async-loader.js"
      // },
      // {
      //   test:/\.js$/,
      //   loader:"./loaders/await-loader.js"
      // },
      // {
      //   test:/\.js$/,
      //   use:['./loaders/async-loader.js','./loaders/await-loader.js']
      // }
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: path.resolve(__dirname,"index.html"),
    }),
  ],
  mode:"development"
}