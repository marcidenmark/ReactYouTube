const path = require('path');



module.exports = {
  entry: ['./src/index.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

// what is the function of the 'output' prop in your webpack.config?


  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8085,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
