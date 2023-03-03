"use strict";

var React = require('react');
var Default = require('./layouts/Default');
function Show(_ref) {
  var bread = _ref.bread;
  return /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("h3", null, bread.name), /*#__PURE__*/React.createElement("p", null, "and it ", bread.hasGluten ? /*#__PURE__*/React.createElement("span", null, " does ") : /*#__PURE__*/React.createElement("span", null, " does NOT "), " have gluten."), /*#__PURE__*/React.createElement("img", {
    src: bread.image,
    alt: bread.name
  }), /*#__PURE__*/React.createElement("p", null, bread.getBakedBy()), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/breads"
  }, "Go home")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("a", {
    href: "/breads/".concat(bread.id, "/edit")
  }, /*#__PURE__*/React.createElement("button", null, "Edit")), /*#__PURE__*/React.createElement("form", {
    action: "/breads/".concat(bread.id, "?_method=DELETE"),
    method: "POST"
  }, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "DELETE"
  })));
}
module.exports = Show;