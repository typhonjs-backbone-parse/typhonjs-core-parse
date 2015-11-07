/**
 * user.js -- Provides a Backbone.Model for a single User.
 */

'use strict';

import Backbone   from 'backbone';

/**
 * Defines a model for a single user.
 */
export default class ParseUser extends Backbone.Model
{
   /**
    * Gets the Parse class name associated with the model.
    *
    * @returns {string}
    */
   get className() { return '_User'; }
}