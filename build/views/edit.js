"use strict";

var React = require('react');
var Default = require('./layouts/Default');
function Edit(_ref) {
  var bread = _ref.bread,
    bakers = _ref.bakers;
  return /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("h2", null, "Edit a bread"), /*#__PURE__*/React.createElement("form", {
    action: "/breads/".concat(bread.id, "?_method=PUT"),
    method: "POST"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: true,
    defaultValue: bread.name
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "image"
  }, "Image"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    defaultValue: bread.image
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "hasGluten"
  }, "Has Gluten?"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "hasGluten",
    id: "hasGluten",
    defaultChecked: bread.hasGluten
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
  })));
}
module.exports = Edit;