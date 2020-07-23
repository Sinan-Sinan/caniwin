const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../public'),
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
            loader: 'file-loader',
          }
        ]
      }
    ],
  }
};