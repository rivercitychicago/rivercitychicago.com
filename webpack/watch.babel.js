import webpack from 'webpack';
import config from './config.babel';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

config.watch = true;
config.cache = true;
config.debug = false;
config.devtool = null;
// config.devtool = 'eval';
// config.devtool = 'source-map';
// config.sourceMapFilename = '[file].map';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }),
  new webpack.optimize.UglifyJsPlugin(),
  new BrowserSyncPlugin({
    proxy: process.env.BROWSERSYNC_PROXY || 'localhost:9000',
    host: process.env.BROWSERSYNC_HOST || 'localhost',
    port: process.env.BROWSERSYNC_PORT || 5000,
    logConnections: true,
    open: false,
    files: [
      'styles/*.css',
    ],
  }),
]);

export default config;
