const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

 //  plugins: [
	// newHtmlWebpackPlugin({
	// 	template: '!!html-loader!templates/index.html'
	// })
 //  ],



// what is the function of the 'output' prop in your webpack.config?
  devtool: 'sourcemap',


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
