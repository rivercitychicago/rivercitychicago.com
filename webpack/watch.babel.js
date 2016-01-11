import webpack from 'webpack';
import config from './config.babel';
// import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

config.watch = true;
config.cache = true;
config.debug = true;
config.devtool = 'eval';
// config.devtool = 'source-map';
// config.sourceMapFilename = '[file].map';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({'process.env': {NODE_ENV: 'development'}}),
  // new BrowserSyncPlugin({
  //   proxy: process.env.BROWSERSYNC_PROXY || 'localhost:5050',
  //   host: process.env.BROWSERSYNC_HOST || '127.0.0.1',
  //   port: process.env.BROWSERSYNC_PORT || 5000,
  //   logConnections: true,
  //   open: false,
  //   files: [
  //     'styles/*.css',
  //   ],
  // }, {
  //   reload: false,
  // }),
]);

export default config;
