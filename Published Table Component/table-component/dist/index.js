"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableComponent = function TableComponent(_ref) {
  var data = _ref.data;

  var createtableHeader = data && data.length && Object.keys(data[0]).map(function (column, index) {
    return _react2.default.createElement(
      "th",
      { key: index },
      column
    );
  });
  var createTableData = data && data.map(function (item, index) {
    return _react2.default.createElement(
      "tr",
      { key: index },
      Object.keys(item).map(function (column, index) {
        return _react2.default.createElement(
          "td",
          { key: index },
          item[column]
        );
      })
    );
  });
  return _react2.default.createElement(
    "table",
    null,
    _react2.default.createElement(
      "thead",
      null,
      _react2.default.createElement(
        "tr",
        null,
        createtableHeader
      )
    ),
    _react2.default.createElement(
      "tbody",
      null,
      createTableData
    )
  );
};

exports.default = TableComponent;