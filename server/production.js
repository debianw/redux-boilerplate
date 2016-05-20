/**
 * Module dependencies.
 */

import express from 'express';
import multiparty from 'multiparty';
import util from 'util';
//import routes from './lib/routes';

const app = express();
const port = process.env.PORT || 3006;

/**
 * Middlewares
 */

app.use( express.static(`${__dirname}/../dist`) );

/**
 *
 */

app.post('/data', (req, res) => {

  console.log('files => ', req.files);

  let form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    console.log('response => ', util.inspect(files));

    res.json(util.inspect({
      fields: fields,
      files: files
    }));
  });

});
//app.use('/', routes);

/**
 * Listen
 */

app.listen(port, () => console.log('app listening on port %d', port));
