/**
 * Module dependencies.
 */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../config/webpack.development';

const port = process.env.PORT || 3002;
const apiPort = process.env.API_PORT || 3006;

/**
 * Webpack Dev Server
 */

new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': `http://localhost:${apiPort}`
  },
  stats: {
    colors: true
  }
}).listen(port, 'localhost', (err, result) => {
  if (err) {
    return console.log("Error: ", err);
  }

  console.log("Listening at localhost:%d", port);
});
