/**
 *
 */

const env = process.env.NODE_ENV || 'development';

//
const settings = {

  // Development settings
  development: {



  },

  // Production settings
  production: {



  }

};

//
module.exports = settings[env];
