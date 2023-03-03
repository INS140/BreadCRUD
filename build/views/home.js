"use strict";

var React = require('react');
var Default = require('./layouts/default');
function Home() {
  return /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("h2", null, "Home Page"), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
    href: "/breads"
  }, "Go to Index Page")));
}
module.exports = Home;