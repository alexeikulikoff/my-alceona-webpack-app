const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
    }
  }),
],
devServer: {
   //contentBase: './dist',
   contentBase:  path.resolve(__dirname, '../', 'src'),
   watchContentBase: true,
   historyApiFallback: true,
   inline: true,
   hot: true,
 },
};
