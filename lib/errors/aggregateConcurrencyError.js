'use strict';

// Grab the util module that's bundled with Node
var util = require('util');

// Create a new custom Error constructor
function AggregateConcurrencyError(msg, more) {
  // Pass the constructor to V8's
  // captureStackTrace to clean up the output
  Error.captureStackTrace(this, AggregateConcurrencyError);

  // If defined, store a custom error message
  if (msg) {
    this.message = msg;
  }

  // If defined, store more infos
  if (more) {
    this.more = more;
  }
}

// Extend our custom Error from Error
util.inherits(AggregateConcurrencyError, Error);

// Give our custom error a name property. Helpful for logging the error later.
AggregateConcurrencyError.prototype.name = AggregateConcurrencyError.name;

module.exports = AggregateConcurrencyError;
