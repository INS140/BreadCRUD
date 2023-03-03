"use strict";

var React = require('react');
var Default = require('./layouts/default');
function Error404() {
  return /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("h1", null, "Oops! Looks like we lost something ..."), /*#__PURE__*/React.createElement("p", null, "... or maybe it never existed?"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/breads"
  }, "Go home")));
}
module.exports = Error404;