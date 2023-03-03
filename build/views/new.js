"use strict";

var React = require('react');
var Default = require('./layouts/default');
function New(_ref) {
  var bakers = _ref.bakers;
  return /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("h2", null, "Add a new bread"), /*#__PURE__*/React.createElement("form", {
    action: "/breads",
    method: "POST"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "image"
  }, "Image"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    pattern: "^(http|https)\\S+"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "hasGluten"
  }, "Has Gluten?"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "hasGluten",
    id: "hasGluten",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "baker"
  }, "Baker"), /*#__PURE__*/React.createElement("select", {
    name: "baker",
    id: "baker"
  }, bakers.map(function (baker) {
    return /*#__PURE__*/React.createElement("option", {
      value: baker.id,
      key: baker.id
    }, baker.name);
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit"
  })), /*#__PURE__*/React.createElement("div", {
    className: "backButton"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/breads"
  }, /*#__PURE__*/React.createElement("button", null, "Go back to the index"))));
}
module.exports = New;