;(function() {
  'use strict';

  // Used as a reference to the global object
  var root = window || this;

  // Quick reference to `document`
  var d = window.document;

  // Set up namespaces
  var n = {};
  var c = {};

<%= contents %>

  // some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose fQuery to the global object even when an AMD loader is present in
    // case fQuery is loaded with a RequireJS shim config.
    // See http://requirejs.org/docs/api.html#config-shim
    root.n = n;
    root.c = c;
    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "fQuery" module
    define(function() { return n; });
    define(function() { return c; });
  } else {
    // in a browser or Rhino
    root.n = n;
    root.c = c;
  }
}).call(this);
