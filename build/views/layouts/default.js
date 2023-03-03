"use strict";

var React = require('react');
function Default(props) {
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("title", null, props.title || 'Default'), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
    integrity: "sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css",
    integrity: "sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "/main.css"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("a", {
    href: "/breads"
  }, "BreadCRUD"))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, props.children))));
}
module.exports = Default;