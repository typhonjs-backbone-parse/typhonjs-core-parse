/**
 * Provides additional mapped paths used for testing.
 */
/* eslint-disable */

var System = System || global.System;

System.config(
{
   "meta":
   {
      "jquery": { "build": false },
      "underscore": { "build": false }
   },

   map:
   {
      'appconfig': 'test/fixture/production-config.js'
   }
});