"use strict";

var React = require('react');
var Default = require('./layouts/Default');
function Show(_ref) {
  var baker = _ref.baker;
  return /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("h3", null, baker.name), /*#__PURE__*/React.createElement("p", null, baker.name, " has been baking with us since ", baker.startDate.getFullYear()), /*#__PURE__*/React.createElement("p", null, "About ", baker.name, ": ", baker.bio), /*#__PURE__*/React.createElement("h3", null, "Breads ", baker.name, " has baked"), /*#__PURE__*/React.createElement("ul", null, baker.breads.map(function (bread) {
    return /*#__PURE__*/React.createElement("li", {
      key: bread.id
    }, /*#__PURE__*/React.createElement("a", {
      href: "/breads/".concat(bread.id)
    }, bread.name));
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/breads"
  }, "Go home")), /*#__PURE__*/React.createElement("form", {
    action: "/bakers/".concat(baker.id, "?_method=DELETE"),
    method: "POST"
  }, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "DELETE"
  })));
}
module.exports = Show;