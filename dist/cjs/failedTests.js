"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFailedTests = getFailedTests;
exports.saveFailedTests = saveFailedTests;
var fs = _interopRequireWildcard(require("fs"));
var path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// myModule.ts

var filePath = path.resolve(__dirname, 'expectedlyFailedTests.json');
function loadState() {
  try {
    var data = fs.readFileSync(filePath, 'utf8');
    var state = JSON.parse(data);
    return state.failedTests;
  } catch (error) {
    return;
  }
}
function saveFailedTests(tests) {
  var state = {
    failedTests: tests
  };
  fs.writeFileSync(filePath, JSON.stringify(state));
}
var failedTests = loadState();

// Функция для получения текущего значения переменной
function getFailedTests() {
  return failedTests;
}
//# sourceMappingURL=failedTests.js.map