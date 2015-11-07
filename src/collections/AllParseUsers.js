/**
 * users.js -- Provides an instance of a collection of users.
 */

'use strict';

import Backbone   from 'backbone';
import Parse      from 'parse';
import ParseUser  from '../models/ParseUser.js';

const s_QUERY = new Parse.Query('_User');

/**
 * Provides a ParseCollection which contains all users.
 */
class AllParseUsers extends Backbone.Collection
{
   /**
    * Returns the model associated with the collection.
    *
    * @returns {ParseUser}
    */
   get model() { return ParseUser; }

   /**
    * Returns the Parse.Query associated with the collection.
    *
    * @returns {*}
    */
   get query() { return s_QUERY; }
}

/**
 * Returns an instance of AllParseUsers
 */
export default new AllParseUsers();