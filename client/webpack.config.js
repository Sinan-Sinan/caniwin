module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ],
      devServer: {
        proxy:{
          '/api':{
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
              "^/api": "/api/v1"
            }
          },
        }
      }
    }
  };