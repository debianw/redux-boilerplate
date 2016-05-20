'use strict';

require('babel-core/register');
require(`./server/${process.env.NODE_ENV || 'development'}`);
