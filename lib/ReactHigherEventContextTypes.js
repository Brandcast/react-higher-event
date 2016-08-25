"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var ReactHigherEventContextTypes = {
  higherEvent: _react.PropTypes.shape({
    subscribe: _react.PropTypes.func.isRequired
  }).isRequired
};

exports.default = ReactHigherEventContextTypes;