/**
 * ParseInitialize -- Initializes Parse from AppConfig.
 */

'use strict';

import Parse      from 'parse';
import AppConfig  from 'appconfig';

Parse.initialize(AppConfig.parseAppID, AppConfig.parseAPIKey);