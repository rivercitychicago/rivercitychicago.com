import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssRgbaFallback from 'postcss-color-rgba-fallback';
import postcssReporter from 'postcss-reporter';
import postcssImport from 'postcss-import';
import postcssRoundSubpixels from 'postcss-round-subpixels';
import postcssBemLinter from 'postcss-bem-linter';
import postcssCssnext from 'postcss-cssnext';
import postcssFontMagician from 'postcss-font-magician';
import postcssDoiuse from 'doiuse';
import lost from 'lost';
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
    'jquery': 'jQuery',
    '$': 'jQuery',
  },

  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('styles/styles.less', { allChunks: true }),
    // new SvgStore('sprites/icons/**/*.svg', 'assets', { name: 'icons.svg' }),
  ],

  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader'] },
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'raw!css/locals?modules!postcss') },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('tojson!css-loader/locals?modules!postcss') },
      // { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', CSS_LOADERS) },
      { test: /\.(eot|ttf|woff|woff2|svg)$/, loader: 'file-loader' },
      { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=10000&name=/assets/[hash].[ext]' },
    ],
  },

  postcss: function postcss() {
    return [
      postcssImport(),
      postcssCssnext(),
      postcssRoundSubpixels(),
      postcssFontMagician(),
      postcssRgbaFallback(),
      lost({
        flexbox: 'flex',
        gutter: '2rem',
      }),
      postcssBemLinter(),
      postcssDoiuse({
        browsers: ['ie >= 8', '> 1%'],
      }),
      autoprefixer({ browsers: ['last 10 versions'] }),
      postcssReporter({ clearMessages: true }),
    ];
  },

  node: {
    __dirname: true,
    fs: 'empty',
  },
};
