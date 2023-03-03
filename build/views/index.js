"use strict";

var React = require('react');
var Default = require('./layouts/Default');
function Index(_ref) {
  var breads = _ref.breads,
    bakers = _ref.bakers,
    title = _ref.title;
  return /*#__PURE__*/React.createElement(Default, {
    title: title
  }, /*#__PURE__*/React.createElement("h1", null, "Index Page"), /*#__PURE__*/React.createElement("div", {
    className: "bakers"
  }, /*#__PURE__*/React.createElement("h2", null, "Bakers"), /*#__PURE__*/React.createElement("ul", null, bakers.map(function (baker) {
    return /*#__PURE__*/React.createElement("li", {
      key: baker._id
    }, /*#__PURE__*/React.createElement("a", {
      href: "/bakers/".concat(baker._id)
    }, baker.name));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "breads"
  }, /*#__PURE__*/React.createElement("h2", null, "Breads"), /*#__PURE__*/React.createElement("ul", null, breads.map(function (bread) {
    return /*#__PURE__*/React.createElement("li", {
      key: bread._id
    }, /*#__PURE__*/React.createElement("a", {
      href: "/breads/".concat(bread._id)
    }, bread.name));
  })), /*#__PURE__*/React.createElement("div", {
    className: "newButton"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/breads/new"
  }, /*#__PURE__*/React.createElement("button", null, "Add a new bread")))));
}
module.exports = Index;