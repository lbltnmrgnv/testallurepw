function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { ContentType, LabelName, Stage, Status } from "allure-js-commons";
import { extractMetadataFromString, getMessageAndTraceFromError, hasLabel, stripAnsi } from "allure-js-commons/sdk";
import { ALLURE_RUNTIME_MESSAGE_CONTENT_TYPE, ReporterRuntime, createDefaultWriter, escapeRegExp, getEnvironmentLabels, getFrameworkLabel, getHostLabel, getLanguageLabel, getPackageLabel, getThreadLabel, md5, parseTestPlan, readImageAsBase64 } from "allure-js-commons/sdk/reporter";
import { allurePlaywrightLegacyApi } from "./legacy.js";
import { statusToAllureStats } from "./utils.js";

// TODO: move to utils.ts
var diffEndRegexp = /-((expected)|(diff)|(actual))\.png$/;
export var AllureReporter = /*#__PURE__*/function () {
  function AllureReporter(config) {
    _classCallCheck(this, AllureReporter);
    _defineProperty(this, "config", void 0);
    _defineProperty(this, "suite", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "allureRuntime", void 0);
    _defineProperty(this, "globalStartTime", new Date());
    _defineProperty(this, "processedDiffs", []);
    _defineProperty(this, "startedTestCasesTitlesCache", []);
    _defineProperty(this, "allureResultsUuids", new Map());
    _defineProperty(this, "attachmentSteps", new Map());
    this.options = _objectSpread({
      suiteTitle: true,
      detail: true
    }, config);
  }
  return _createClass(AllureReporter, [{
    key: "onConfigure",
    value: function onConfigure(config) {
      this.config = config;
      var testPlan = parseTestPlan();
      if (!testPlan) {
        return;
      }

      // @ts-ignore
      var configElement = config[Object.getOwnPropertySymbols(config)[0]];
      if (!configElement) {
        return;
      }
      var testsWithSelectors = testPlan.tests.filter(function (test) {
        return test.selector;
      });
      var v1ReporterTests = [];
      var v2ReporterTests = [];
      var cliArgs = [];
      testsWithSelectors.forEach(function (test) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        if (!/#/.test(test.selector)) {
          v2ReporterTests.push(test);
          return;
        }
        v1ReporterTests.push(test);
      });
      if (v2ReporterTests.length) {
        // we need to cut off column because playwright works only with line number
        var v2SelectorsArgs = v2ReporterTests
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        .map(function (test) {
          return test.selector.replace(/:\d+$/, "");
        }).map(function (selector) {
          return escapeRegExp(selector);
        });
        cliArgs.push.apply(cliArgs, _toConsumableArray(v2SelectorsArgs));
      }
      if (v1ReporterTests.length) {
        var v1SelectorsArgs = v1ReporterTests
        // we can filter tests only by absolute path, so we need to cut off test name
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        .map(function (test) {
          return test.selector.split("#")[0];
        }).map(function (selector) {
          return escapeRegExp(selector);
        });
        cliArgs.push.apply(cliArgs, _toConsumableArray(v1SelectorsArgs));
      }
      if (!cliArgs.length) {
        return;
      }
      configElement.cliArgs = cliArgs.map(function (selector) {
        return "/".concat(selector);
      });
    }
  }, {
    key: "onError",
    value: function onError() {}
  }, {
    key: "onExit",
    value: function onExit() {}
  }, {
    key: "onStdErr",
    value: function onStdErr() {}
  }, {
    key: "onStdOut",
    value: function onStdOut() {}
  }, {
    key: "onBegin",
    value: function onBegin(suite) {
      this.suite = suite;
      this.allureRuntime = new ReporterRuntime(_objectSpread(_objectSpread({}, this.options), {}, {
        writer: createDefaultWriter({
          resultsDir: this.options.resultsDir
        })
      }));
    }
  }, {
    key: "onTestBegin",
    value: function onTestBegin(test) {
      var suite = test.parent;
      var titleMetadata = extractMetadataFromString(test.title);
      var project = suite.project();
      var testFilePath = path.relative(project === null || project === void 0 ? void 0 : project.testDir, test.location.file);
      var relativeFile = testFilePath.split(path.sep).join("/");
      // root > project > file path > test.describe...
      var _suite$titlePath = suite.titlePath(),
        _suite$titlePath2 = _toArray(_suite$titlePath),
        suiteTitles = _suite$titlePath2.slice(3);
      var nameSuites = suiteTitles.length > 0 ? "".concat(suiteTitles.join(" "), " ") : "";
      var testCaseIdBase = "".concat(relativeFile, "#").concat(nameSuites).concat(test.title);
      var result = {
        name: titleMetadata.cleanTitle,
        labels: [].concat(_toConsumableArray(titleMetadata.labels), _toConsumableArray(getEnvironmentLabels())),
        links: [],
        parameters: [],
        testCaseId: md5(testCaseIdBase),
        fullName: "".concat(relativeFile, ":").concat(test.location.line, ":").concat(test.location.column)
      };
      result.labels.push(getLanguageLabel());
      result.labels.push(getFrameworkLabel("playwright"));
      result.labels.push(getPackageLabel(testFilePath));
      result.labels.push({
        name: "titlePath",
        value: suite.titlePath().join(" > ")
      });

      // support for earlier playwright versions
      if ("tags" in test) {
        var _ref;
        var tags = test.tags.map(function (tag) {
          return {
            name: LabelName.TAG,
            value: tag.startsWith("@") ? tag.substring(1) : tag
          };
        });
        (_ref = result.labels).push.apply(_ref, _toConsumableArray(tags));
      }
      if (project !== null && project !== void 0 && project.name) {
        result.parameters.push({
          name: "Project",
          value: project.name
        });
      }
      if ((project === null || project === void 0 ? void 0 : project.repeatEach) > 1) {
        result.parameters.push({
          name: "Repetition",
          value: "".concat(test.repeatEachIndex + 1)
        });
      }
      var testUuid = this.allureRuntime.startTest(result);
      this.allureResultsUuids.set(test.id, testUuid);
      this.startedTestCasesTitlesCache.push(titleMetadata.cleanTitle);
    }
  }, {
    key: "onStepBegin",
    value: function onStepBegin(test, _result, step) {
      var testUuid = this.allureResultsUuids.get(test.id);
      if (step.category === "attach") {
        var _this$allureRuntime, _this$attachmentSteps;
        var currentStep = (_this$allureRuntime = this.allureRuntime) === null || _this$allureRuntime === void 0 ? void 0 : _this$allureRuntime.currentStep(testUuid);
        this.attachmentSteps.set(testUuid, [].concat(_toConsumableArray((_this$attachmentSteps = this.attachmentSteps.get(testUuid)) !== null && _this$attachmentSteps !== void 0 ? _this$attachmentSteps : []), [currentStep]));
        return;
      }

      // TODO fix the details disable, e.g. only ignore pw:api steps
      if (!this.options.detail && step.category !== "test.step") {
        return;
      }
      this.allureRuntime.startStep(testUuid, undefined, {
        name: step.title,
        start: step.startTime.getTime()
      });
    }
  }, {
    key: "onStepEnd",
    value: function onStepEnd(test, _result, step) {
      if (!this.options.detail && step.category !== "test.step") {
        return;
      }

      // ignore attach steps since attachments are already in the report
      if (step.category === "attach") {
        return;
      }
      var testUuid = this.allureResultsUuids.get(test.id);
      var currentStep = this.allureRuntime.currentStep(testUuid);
      if (!currentStep) {
        return;
      }
      this.allureRuntime.updateStep(currentStep, function (stepResult) {
        stepResult.status = step.error ? Status.FAILED : Status.PASSED;
        stepResult.stage = Stage.FINISHED;
        if (step.error) {
          stepResult.statusDetails = _objectSpread({}, getMessageAndTraceFromError(step.error));
        }
      });
      this.allureRuntime.stopStep(currentStep, {
        duration: step.duration
      });
    }
  }, {
    key: "onTestEnd",
    value: function () {
      var _onTestEnd = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(test, result) {
        var _this = this,
          _this$attachmentSteps2;
        var testUuid, threadId, thread, error, _test$parent$titlePat, _test$parent$titlePat2, projectSuiteTitle, fileSuiteTitle, suiteTitles, attachmentSteps, i, attachment, attachmentStep;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              testUuid = this.allureResultsUuids.get(test.id); // We need to check parallelIndex first because pw introduced this field only in v1.30.0
              threadId = result.parallelIndex !== undefined ? result.parallelIndex : result.workerIndex;
              thread = "pid-".concat(process.pid, "-worker-").concat(threadId);
              error = result.error; // only apply default suites if not set by user
              _test$parent$titlePat = test.parent.titlePath(), _test$parent$titlePat2 = _toArray(_test$parent$titlePat), projectSuiteTitle = _test$parent$titlePat2[1], fileSuiteTitle = _test$parent$titlePat2[2], suiteTitles = _test$parent$titlePat2.slice(3);
              this.allureRuntime.updateTest(testUuid, function (testResult) {
                testResult.labels.push(getHostLabel());
                testResult.labels.push(getThreadLabel(thread));
                if (projectSuiteTitle && !hasLabel(testResult, LabelName.PARENT_SUITE)) {
                  testResult.labels.push({
                    name: LabelName.PARENT_SUITE,
                    value: projectSuiteTitle
                  });
                }
                if (_this.options.suiteTitle && fileSuiteTitle && !hasLabel(testResult, LabelName.SUITE)) {
                  testResult.labels.push({
                    name: LabelName.SUITE,
                    value: fileSuiteTitle
                  });
                }
                if (suiteTitles.length > 0 && !hasLabel(testResult, LabelName.SUB_SUITE)) {
                  testResult.labels.push({
                    name: LabelName.SUB_SUITE,
                    value: suiteTitles.join(" > ")
                  });
                }
                if (error) {
                  testResult.statusDetails = _objectSpread({}, getMessageAndTraceFromError(error));
                } else {
                  var _test$annotations;
                  var skipReason = (_test$annotations = test.annotations) === null || _test$annotations === void 0 || (_test$annotations = _test$annotations.find(function (annotation) {
                    return annotation.type === "skip" || annotation.type === "fixme";
                  })) === null || _test$annotations === void 0 ? void 0 : _test$annotations.description;
                  if (skipReason) {
                    testResult.statusDetails = _objectSpread(_objectSpread({}, testResult.statusDetails), {}, {
                      message: skipReason
                    });
                  }
                }
                testResult.status = statusToAllureStats(result.status, test.expectedStatus);
                testResult.stage = Stage.FINISHED;
              });
              attachmentSteps = (_this$attachmentSteps2 = this.attachmentSteps.get(testUuid)) !== null && _this$attachmentSteps2 !== void 0 ? _this$attachmentSteps2 : [];
              i = 0;
            case 8:
              if (!(i < result.attachments.length)) {
                _context.next = 16;
                break;
              }
              attachment = result.attachments[i];
              attachmentStep = attachmentSteps.length > i ? attachmentSteps[i] : undefined;
              _context.next = 13;
              return this.processAttachment(testUuid, attachmentStep, attachment);
            case 13:
              i++;
              _context.next = 8;
              break;
            case 16:
              if (result.stdout.length > 0) {
                this.allureRuntime.writeAttachment(testUuid, undefined, "stdout", Buffer.from(stripAnsi(result.stdout.join("")), "utf-8"), {
                  contentType: ContentType.TEXT
                });
              }
              if (result.stderr.length > 0) {
                this.allureRuntime.writeAttachment(testUuid, undefined, "stderr", Buffer.from(stripAnsi(result.stderr.join("")), "utf-8"), {
                  contentType: ContentType.TEXT
                });
              }

              // FIXME: temp logic for labels override, we need it here to keep the reporter compatible with v2 API
              // in next iterations we need to implement the logic for every javascript integration
              this.allureRuntime.updateTest(testUuid, function (testResult) {
                var mappedLabels = testResult.labels.reduce(function (acc, label) {
                  if (!acc[label.name]) {
                    acc[label.name] = [];
                  }
                  acc[label.name].push(label);
                  return acc;
                }, {});
                var newLabels = Object.keys(mappedLabels).flatMap(function (labelName) {
                  var labelsGroup = mappedLabels[labelName];
                  if (labelName === LabelName.SUITE || labelName === LabelName.PARENT_SUITE || labelName === LabelName.SUB_SUITE) {
                    return labelsGroup.slice(-1);
                  }
                  return labelsGroup;
                });
                testResult.labels = newLabels;
              });
              this.allureRuntime.stopTest(testUuid, {
                duration: result.duration
              });
              this.allureRuntime.writeTest(testUuid);
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onTestEnd(_x, _x2) {
        return _onTestEnd.apply(this, arguments);
      }
      return onTestEnd;
    }()
  }, {
    key: "addSkippedResults",
    value: function () {
      var _addSkippedResults = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        var unprocessedCases, _iterator, _step, testCase;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              unprocessedCases = this.suite.allTests().filter(function (_ref2) {
                var title = _ref2.title;
                var titleMetadata = extractMetadataFromString(title);
                return !_this2.startedTestCasesTitlesCache.includes(titleMetadata.cleanTitle);
              });
              _iterator = _createForOfIteratorHelper(unprocessedCases);
              _context2.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context2.next = 11;
                break;
              }
              testCase = _step.value;
              this.onTestBegin(testCase);
              _context2.next = 9;
              return this.onTestEnd(testCase, {
                status: Status.SKIPPED,
                attachments: [],
                duration: 0,
                errors: [],
                parallelIndex: 0,
                workerIndex: 0,
                retry: 0,
                steps: [],
                stderr: [],
                stdout: [],
                startTime: this.globalStartTime
              });
            case 9:
              _context2.next = 4;
              break;
            case 11:
              _context2.next = 16;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              _iterator.e(_context2.t0);
            case 16:
              _context2.prev = 16;
              _iterator.f();
              return _context2.finish(16);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 13, 16, 19]]);
      }));
      function addSkippedResults() {
        return _addSkippedResults.apply(this, arguments);
      }
      return addSkippedResults;
    }()
  }, {
    key: "onEnd",
    value: function () {
      var _onEnd = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.addSkippedResults();
            case 2:
              this.allureRuntime.writeEnvironmentInfo();
              this.allureRuntime.writeCategoriesDefinitions();
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function onEnd() {
        return _onEnd.apply(this, arguments);
      }
      return onEnd;
    }()
  }, {
    key: "printsToStdio",
    value: function printsToStdio() {
      return false;
    }
  }, {
    key: "processAttachment",
    value: function () {
      var _processAttachment = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(testUuid, attachmentStepUuid, attachment) {
        var allureRuntimeMessage, message, parentUuid, pathWithoutEnd, actualBase64, expectedBase64, diffBase64, diffName;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!attachment.body && !attachment.path)) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              allureRuntimeMessage = attachment.contentType === ALLURE_RUNTIME_MESSAGE_CONTENT_TYPE;
              if (!(allureRuntimeMessage && !attachment.body)) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              if (!allureRuntimeMessage) {
                _context4.next = 9;
                break;
              }
              message = JSON.parse(attachment.body.toString()); // TODO fix step metadata messages
              this.allureRuntime.applyRuntimeMessages(testUuid, [message]);
              return _context4.abrupt("return");
            case 9:
              parentUuid = this.allureRuntime.startStep(testUuid, attachmentStepUuid, {
                name: attachment.name
              }); // only stop if step is created. Step may not be created only if test with specified uuid doesn't exists.
              // usually, missing test by uuid means we should completely skip result processing;
              // the later operations are safe and will only produce console warnings
              if (parentUuid) {
                this.allureRuntime.stopStep(parentUuid, undefined);
              }
              if (!attachment.body) {
                _context4.next = 15;
                break;
              }
              this.allureRuntime.writeAttachment(testUuid, parentUuid, attachment.name, attachment.body, {
                contentType: attachment.contentType
              });
              _context4.next = 20;
              break;
            case 15:
              if (existsSync(attachment.path)) {
                _context4.next = 19;
                break;
              }
              return _context4.abrupt("return");
            case 19:
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
              this.allureRuntime.writeAttachment(testUuid, parentUuid, attachment.name, attachment.path, {
                contentType: attachment.contentType
              });
            case 20:
              if (attachment.name.match(diffEndRegexp)) {
                _context4.next = 22;
                break;
              }
              return _context4.abrupt("return");
            case 22:
              pathWithoutEnd = attachment.path.replace(diffEndRegexp, "");
              if (!this.processedDiffs.includes(pathWithoutEnd)) {
                _context4.next = 25;
                break;
              }
              return _context4.abrupt("return");
            case 25:
              _context4.next = 27;
              return readImageAsBase64("".concat(pathWithoutEnd, "-actual.png"));
            case 27:
              actualBase64 = _context4.sent;
              _context4.next = 30;
              return readImageAsBase64("".concat(pathWithoutEnd, "-expected.png"));
            case 30:
              expectedBase64 = _context4.sent;
              _context4.next = 33;
              return readImageAsBase64("".concat(pathWithoutEnd, "-diff.png"));
            case 33:
              diffBase64 = _context4.sent;
              diffName = attachment.name.replace(diffEndRegexp, "");
              this.allureRuntime.writeAttachment(testUuid, undefined, diffName, Buffer.from(JSON.stringify({
                expected: expectedBase64,
                actual: actualBase64,
                diff: diffBase64,
                name: diffName
              }), "utf-8"), {
                contentType: ContentType.IMAGEDIFF,
                fileExtension: ".imagediff"
              });
              this.processedDiffs.push(pathWithoutEnd);
            case 37:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function processAttachment(_x3, _x4, _x5) {
        return _processAttachment.apply(this, arguments);
      }
      return processAttachment;
    }()
  }, {
    key: "version",
    value: function version() {
      return "v2";
    }
  }]);
}();

/**
 * @deprecated for removal, import functions directly from "allure-js-commons".
 */
export var allure = allurePlaywrightLegacyApi;

/**
 * @deprecated for removal, import functions directly from "@playwright/test".
 */
export { test, expect } from "@playwright/test";
export default AllureReporter;
//# sourceMappingURL=index.js.map