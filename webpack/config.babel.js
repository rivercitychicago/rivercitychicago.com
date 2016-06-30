import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import SvgStore from 'webpack-svgstore-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

const BUNDLE_PATH = '';
// const CSS_LOADERS = [
//   'css',
//   'postcss',
//   // 'sass',
// ].join('!');

module.exports = {
  target: 'web',
  cache: false,
  context: path.join(__dirname, '..'),
  devtool: false,
  entry: {
    main: './src/index',
  },

  output: {
    path: `./${BUNDLE_PATH}/`,
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].[id].js',
    // publicPath: `/${BUNDLE_PATH}/`,
  },

  externals: {
    jquery: 'jQuery',
    $: 'jQuery',
  },

  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('styles/styles.css', { allChunks: true }),
    // new SvgStore('sprites/icons/**/*.svg', 'assets', { name: 'icons.svg' }),
  ],

  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader'] },
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'raw!css/locals?modules!postcss') },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('tojson!css-loader/locals?modules!postcss') },
      // { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', CSS_LOADERS) },
      { test: /\.(eot|ttf|woff|woff2|svg)$/, loader: 'file-loader' },
      { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=10000&name=/assets/[hash].[ext]' },
    ],
  },

  postcss: function postcss() {
    return [
      require('lost')({
        flexbox: 'flex',
        gutter: '2rem',
      }),
      require('postcss-cssnext')(),
      require('postcss-round-subpixels')(),
      // require('postcss-font-magician')(),
      require('postcss-hexrgba')(),
      require('postcss-color-rgba-fallback')(),
      require('postcss-bem-linter')(),
      // require('doiuse')({
      //   browsers: ['ie >= 9', '> 1%'],
      // }),
      require('postcss-reporter')({ clearMessages: true }),
    ];
  },

  node: {
    __dirname: true,
    fs: 'empty',
  },
};
