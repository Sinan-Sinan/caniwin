const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/src/assets'
  }, 
  devServer: {
    inline: false,
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api/v1"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      filename: '../public/index.html' //relative to root of the application
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
          }
        }
      },{
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader?name=/img/[name].[ext]'
          }
        ]
      }
    ],
  }
};