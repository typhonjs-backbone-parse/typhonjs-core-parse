/**
 * users.js -- Provides an instance of a collection of users.
 */

'use strict';

import Backbone   from 'backbone';
import Parse      from 'parse';
import ParseUser  from '../models/ParseUser.js';

const s_QUERY = new Parse.Query('_User');

class ParseUsers extends Backbone.Collection
{
   get model() { return ParseUser; }
   get query() { return s_QUERY; }
}

export default new ParseUsers();