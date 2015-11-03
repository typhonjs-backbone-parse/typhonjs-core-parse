/**
 * user.js -- Provides a Backbone.Model for a single User.
 */

'use strict';

import Backbone   from 'backbone';

export default class ParseUser extends Backbone.Model
{
   get className() { return '_User'; }
}