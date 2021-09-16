const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin")
const glob = require('glob');


/** generate entries  main application and individual snippets. */
function getEntries(pattern, manualEntries = {}) {
  //include main index.ts file and append to this list.
  const entries = manualEntries

  glob.sync(pattern).forEach((file) => {
    entries[file.replace('src/snippets/', '').replace('.ts','')] = path.join(__dirname, file);
  });

  return entries;
}


const config = {
  target:"web",
  entry: getEntries('src/snippets/*.ts',{'./main':'./src/index.ts'}),
  output: {  
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  mode:"development",
  devServer: {
    static: ['src'],
  },
  devtool:'eval',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/presentation.md' },
        { from:'src/snippets',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.ts"],
          },
          to:'./'
        },
        { from:'src/fonts',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ["**/*.ts"],
        },
        to:'./fonts/wotfard/'
      }]
    
    }),
    new CleanWebpackPlugin(),
    //will automatically inject bundle js into ./dist/index.html
    new HTMLWebpackPlugin({
    template: './src/index.html', //source
    filename: 'index.html',  //destination
})
  ]
};

module.exports = config;