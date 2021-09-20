"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url.js");

var _react = _interopRequireDefault(require("react"));

var _papaparse = require("papaparse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ExportJsonCsv = props => {
  const {
    headers,
    items,
    fileTitle,
    style,
    className
  } = props; // Source[1] https://medium.com/@danny.pule/export-json-to-csv-file-using-javascript-a0b7bc5b00d2
  // Source[2] https://stackoverflow.com/questions/30993149/how-to-rearrange-csv-json-keys-columns-javascript
  // and refactor in order to rearrange the headers based on your UI tables order to work with ReactJs.
  // [NOTE]
  // arrange your header array to rearrage csv/json keys columns to your expected result.
  // headers array key must be the same wtih your items Object Keys in column.

  const exportCSVFile = (headers, items, fileTitle) => {
    var _fileTitle;

    fileTitle = (_fileTitle = fileTitle) !== null && _fileTitle !== void 0 ? _fileTitle : 'Exported';
    let csvHeader = (0, _papaparse.unparse)({
      fields: [...headers.map(item => item.name)],
      data: []
    });
    let csvVal = (0, _papaparse.unparse)(items, {
      header: false,
      columns: [...headers.map(item => item.key)]
    });
    let csv = csvHeader + csvVal;
    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    var blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });

    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      let link = document.createElement("a");

      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => exportCSVFile(headers, items, fileTitle),
    style: style,
    className: className
  }, " ", props.children || 'Export Data');
};

var _default = ExportJsonCsv;
exports.default = _default;