import webpack from 'webpack';
import config from './config.babel';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
]);

export default config;
