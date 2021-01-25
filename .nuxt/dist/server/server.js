module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var shared = __webpack_require__(57);
var has = __webpack_require__(9);
var uid = __webpack_require__(60);
var NATIVE_SYMBOL = __webpack_require__(61);
var USE_SYMBOL_AS_UID = __webpack_require__(84);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(28);
var IS_PURE = __webpack_require__(26);
var global = __webpack_require__(2);
var getBuiltIn = __webpack_require__(17);
var NativePromise = __webpack_require__(101);
var redefine = __webpack_require__(19);
var redefineAll = __webpack_require__(102);
var setToStringTag = __webpack_require__(49);
var setSpecies = __webpack_require__(103);
var isObject = __webpack_require__(12);
var aFunction = __webpack_require__(20);
var anInstance = __webpack_require__(104);
var inspectSource = __webpack_require__(46);
var iterate = __webpack_require__(105);
var checkCorrectnessOfIteration = __webpack_require__(111);
var speciesConstructor = __webpack_require__(112);
var task = __webpack_require__(69).set;
var microtask = __webpack_require__(113);
var promiseResolve = __webpack_require__(114);
var hostReportErrors = __webpack_require__(115);
var newPromiseCapabilityModule = __webpack_require__(72);
var perform = __webpack_require__(116);
var InternalStateModule = __webpack_require__(45);
var isForced = __webpack_require__(65);
var wellKnownSymbol = __webpack_require__(3);
var IS_NODE = __webpack_require__(50);
var V8_VERSION = __webpack_require__(117);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var definePropertyModule = __webpack_require__(14);
var createPropertyDescriptor = __webpack_require__(40);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(58);
var anObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(59);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(23);
var addToUnscopables = __webpack_require__(83);
var Iterators = __webpack_require__(18);
var InternalStateModule = __webpack_require__(45);
var defineIterator = __webpack_require__(91);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(89);
var global = __webpack_require__(2);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(11);
var has = __webpack_require__(9);
var setGlobal = __webpack_require__(38);
var inspectSource = __webpack_require__(46);
var InternalStateModule = __webpack_require__(45);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(82);
var requireObjectCoercible = __webpack_require__(25);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var getOwnPropertyDescriptor = __webpack_require__(47).f;
var createNonEnumerableProperty = __webpack_require__(11);
var redefine = __webpack_require__(19);
var setGlobal = __webpack_require__(38);
var copyConstructorProperties = __webpack_require__(93);
var isForced = __webpack_require__(65);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("51a7d00b", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("ab0afbc2", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("34474501", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("db86d9d2", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7ed342b2", content, true, context)
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var setGlobal = __webpack_require__(38);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(11);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var isObject = __webpack_require__(12);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(57);
var uid = __webpack_require__(60);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(90);
var global = __webpack_require__(2);
var isObject = __webpack_require__(12);
var createNonEnumerableProperty = __webpack_require__(11);
var objectHas = __webpack_require__(9);
var shared = __webpack_require__(37);
var sharedKey = __webpack_require__(44);
var hiddenKeys = __webpack_require__(42);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(37);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var propertyIsEnumerableModule = __webpack_require__(92);
var createPropertyDescriptor = __webpack_require__(40);
var toIndexedObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(59);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(58);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(25);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(14).f;
var has = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(3);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(24);
var global = __webpack_require__(2);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(118);
var anObject = __webpack_require__(5);
var toObject = __webpack_require__(48);
var toLength = __webpack_require__(41);
var toInteger = __webpack_require__(27);
var requireObjectCoercible = __webpack_require__(25);
var advanceStringIndex = __webpack_require__(122);
var regExpExec = __webpack_require__(124);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(120);
var stickyHelpers = __webpack_require__(121);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("vue-typed-js");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (context, inject) => {
  inject('mail', {
    send: config => context.app.$axios.$post('/mail/send', config)
  });
};

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(26);
var store = __webpack_require__(37);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var fails = __webpack_require__(4);
var createElement = __webpack_require__(39);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var defineProperties = __webpack_require__(85);
var enumBugKeys = __webpack_require__(43);
var hiddenKeys = __webpack_require__(42);
var html = __webpack_require__(64);
var documentCreateElement = __webpack_require__(39);
var sharedKey = __webpack_require__(44);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIndexedObject = __webpack_require__(23);
var indexOf = __webpack_require__(87).indexOf;
var hiddenKeys = __webpack_require__(42);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(67);
var createNonEnumerableProperty = __webpack_require__(11);
var has = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(3);
var IS_PURE = __webpack_require__(26);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toObject = __webpack_require__(48);
var sharedKey = __webpack_require__(44);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(98);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(20);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var fails = __webpack_require__(4);
var bind = __webpack_require__(68);
var html = __webpack_require__(64);
var createElement = __webpack_require__(39);
var IS_IOS = __webpack_require__(70);
var IS_NODE = __webpack_require__(50);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(71);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(20);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("932a8f60", content, true, context)
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 79 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"name\":\"Компьютеры\",\"description\":\"Пк, Ноутбуки, Моноблоки\",\"image\":\"_nuxt/assets/svg/computer.svg\",\"details\":[{\"name\":\"Комплексное обслуживание\",\"price\":\"900 - 2500\",\"desc\":\"(чистка от пыли/замена термопасты/смазка и замена кулеров/замена батарейки BIOS/замена конденсаторов/очистка ос системы от временных файлов и вирусов)\"},{\"name\":\"Установка операционной системы\",\"price\":900,\"desc\":\"(В строимость входит: установка Microsoft Windows XP/7/8/10, Apple MacOS, Linux, установка всех драйверов, установка Microsoft Office)\"},{\"name\":\"Перенос операционной системы на SSD/HDD\",\"price\":900,\"desc\":\"(В строимость входит: подбор SSD, полное или частичное клонирование диска, настройка компьютера для загрузки с нового накопителя)\"},{\"name\":\"Установка программ\",\"price\":\"договорная\",\"desc\":\"(Cтоимость зависит от количества программ)\"},{\"name\":\"Установка драйверов\",\"price\":500,\"desc\":\"(установка необходимых драйверов, обновление установленных драйверов)\"},{\"name\":\"Установка новых комплектующих\",\"price\":500,\"desc\":\"(Помощь в подборе необходимых комплектующих, установка устройства, установка драйвера)\"},{\"name\":\"Сборка ПК\",\"price\":\"1000 - 2500\",\"desc\":\"(Предложение вариантов сборки исходя из бюджета, сборка компьютера, установка операционной системы, установка базовых программ)\"},{\"name\":\"Сложный ремонт\",\"price\":\"договорна\",\"desc\":\"(Прайс-лист на ремонт зависит от сложности и требует диагностики. Ремонт комплектующих производится ТОЛЬКО если в этом есть смысл. Например, если дешевле купить и установить новую деталь - сделаем так)\"}]},{\"id\":\"2\",\"name\":\"Cмартфоны\",\"description\":\"iPhone, android \",\"image\":\"_nuxt/assets/education.jpg\",\"details\":[{\"name\":\"Замена экрана\",\"price\":1000,\"desc\":\"(В стоимость входит только работа. Стоимость экрана уточняйте по телефону.)\"},{\"name\":\"Замена АКБ (аккумулятора)\",\"price\":800,\"desc\":\"(В стоимость входит только работа. Стоимость акб уточняйте по телефону.)\"},{\"name\":\"Устранение проблем с оперционной системой\",\"price\":700,\"desc\":\"(Обновление/прошивка/сброс к заводским настройкам)\"}]},{\"id\":\"3\",\"name\":\"Настройка\",\"description\":\"Настройка оборудования\",\"image\":\"_nuxt/assets/iconT.svg\",\"details\":[{\"name\":\"Настройка SMART TV \",\"price\":500},{\"name\":\"Настройка умных устройств\",\"price\":500},{\"name\":\"Настройка/ремонт аудиооборудования\",\"price\":\"договорная\"}]},{\"id\":\"4\",\"name\":\"Интернет\",\"description\":\"Настройка и подключение\",\"image\":\"_nuxt/assets/iconT.svg\",\"details\":[{\"name\":\"Настройка роутера\",\"price\":500},{\"name\":\"Обжим витой пары\",\"price\":\"500\",\"desc\":\"(В стоимость входит выезд и 1 обжим. Каждый последующий обжим - + 100)\"},{\"name\":\"Настройка IP видеонаблюдения \",\"price\":\"договорная\"}]},{\"id\":\"5\",\"name\":\"Обучение\",\"description\":\"Обучение работе с компьютером\",\"image\":\"_nuxt/assets/iconT.svg\",\"details\":[{\"name\":\"Обучение в формате онлайн\",\"price\":\"1000\",\"desc\":\"Стоимость указана за 1 академический час\"}]},{\"id\":\"6\",\"name\":\"Другое\",\"description\":\"Продажа, оценка, скупка\",\"image\":\"_nuxt/assets/iconT.svg\",\"details\":[{\"name\":\"Куплю\",\"price\":\"договорная\"},{\"name\":\"Помогу продать\",\"price\":\"500 - 1500\"},{\"name\":\"Онлайн оценка\",\"price\":\"400\"}]}]");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(150);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var classof = __webpack_require__(24);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);
var create = __webpack_require__(62);
var definePropertyModule = __webpack_require__(14);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(61);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var definePropertyModule = __webpack_require__(14);
var anObject = __webpack_require__(5);
var objectKeys = __webpack_require__(86);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(43);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(23);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(88);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

module.exports = global;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inspectSource = __webpack_require__(46);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(28);
var createIteratorConstructor = __webpack_require__(97);
var getPrototypeOf = __webpack_require__(67);
var setPrototypeOf = __webpack_require__(99);
var setToStringTag = __webpack_require__(49);
var createNonEnumerableProperty = __webpack_require__(11);
var redefine = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(3);
var IS_PURE = __webpack_require__(26);
var Iterators = __webpack_require__(18);
var IteratorsCore = __webpack_require__(66);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var ownKeys = __webpack_require__(94);
var getOwnPropertyDescriptorModule = __webpack_require__(47);
var definePropertyModule = __webpack_require__(14);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);
var getOwnPropertyNamesModule = __webpack_require__(95);
var getOwnPropertySymbolsModule = __webpack_require__(96);
var anObject = __webpack_require__(5);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(43);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(66).IteratorPrototype;
var create = __webpack_require__(62);
var createPropertyDescriptor = __webpack_require__(40);
var setToStringTag = __webpack_require__(49);
var Iterators = __webpack_require__(18);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var aPossiblePrototype = __webpack_require__(100);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

module.exports = global.Promise;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(19);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(17);
var definePropertyModule = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(13);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isArrayIteratorMethod = __webpack_require__(106);
var toLength = __webpack_require__(41);
var bind = __webpack_require__(68);
var getIteratorMethod = __webpack_require__(107);
var iteratorClose = __webpack_require__(110);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);
var Iterators = __webpack_require__(18);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(108);
var Iterators = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(3);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(109);
var classofRaw = __webpack_require__(24);
var wellKnownSymbol = __webpack_require__(3);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(3);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var getOwnPropertyDescriptor = __webpack_require__(47).f;
var macrotask = __webpack_require__(69).set;
var IS_IOS = __webpack_require__(70);
var IS_NODE = __webpack_require__(50);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(72);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var userAgent = __webpack_require__(71);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(119);
var redefine = __webpack_require__(19);
var fails = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(3);
var regexpExec = __webpack_require__(52);
var createNonEnumerableProperty = __webpack_require__(11);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(28);
var exec = __webpack_require__(52);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(5);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(4);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(123).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var requireObjectCoercible = __webpack_require__(25);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(24);
var regexpExec = __webpack_require__(52);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(28);
var aFunction = __webpack_require__(20);
var toObject = __webpack_require__(48);
var fails = __webpack_require__(4);
var arrayMethodIsStrict = __webpack_require__(126);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(4);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("25950107", content, true)

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! bulma.io v0.9.1 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.breadcrumb,.button,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless):after,.select:not(.is-multiple):not(.is-loading):after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.pagination:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;pointer-events:auto;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before,.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.delete:before,.modal-close:before{height:2px;width:50%}.delete:after,.modal-close:after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading:after,.control.is-loading:after,.loader,.select.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;position:relative;width:1em}.hero-video,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.textarea{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.5em;justify-content:flex-start;line-height:1.5;padding:calc(.5em - 1px) calc(.75em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.textarea:active,.textarea:focus{outline:none}.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select fieldset[disabled] select,.select select[disabled],.textarea[disabled],fieldset[disabled] .button,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .input,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-previous,fieldset[disabled] .select select,fieldset[disabled] .textarea{cursor:not-allowed}\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:inherit}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,optgroup,select,textarea{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#3273dc;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{color:#da1039;font-size:.875em;font-weight:400;padding:.25em .5em}code,hr{background-color:#f5f5f5}hr{border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:inherit}table th{color:#363636}.box{background-color:#fff;border-radius:6px;box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);color:#4a4a4a;display:block;padding:1.25rem}a.box:focus,a.box:hover{box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px #3273dc}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #3273dc}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding:calc(.5em - 1px) 1em;text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.5em - 1px);margin-right:.25em}.button .icon:last-child:not(:first-child){margin-left:.25em;margin-right:calc(-.5em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.5em - 1px);margin-right:calc(-.5em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#3273dc;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:transparent;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-hovered,.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined.is-focused,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined.is-loading.is-focused:after,.button.is-white.is-outlined.is-loading.is-hovered:after,.button.is-white.is-outlined.is-loading:focus:after,.button.is-white.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined.is-focused,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-white.is-inverted.is-outlined.is-loading:focus:after,.button.is-white.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:transparent;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-hovered,.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined.is-focused,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined.is-loading.is-focused:after,.button.is-black.is-outlined.is-loading.is-hovered:after,.button.is-black.is-outlined.is-loading:focus:after,.button.is-black.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined.is-focused,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-black.is-inverted.is-outlined.is-loading:focus:after,.button.is-black.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#f5f5f5;border-color:transparent;box-shadow:none}.button.is-light.is-inverted{color:#f5f5f5}.button.is-light.is-inverted,.button.is-light.is-inverted.is-hovered,.button.is-light.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined.is-focused,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:rgba(0,0,0,.7)}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined.is-loading.is-focused:after,.button.is-light.is-outlined.is-loading.is-hovered:after,.button.is-light.is-outlined.is-loading:focus:after,.button.is-light.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-light.is-inverted.is-outlined.is-focused,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#f5f5f5}.button.is-light.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-light.is-inverted.is-outlined.is-loading:focus:after,.button.is-light.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-dark{background-color:#363636;border-color:transparent;color:#fff}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#fff}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#fff}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#fff}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#363636;border-color:transparent;box-shadow:none}.button.is-dark.is-inverted{background-color:#fff;color:#363636}.button.is-dark.is-inverted.is-hovered,.button.is-dark.is-inverted:hover{background-color:#f2f2f2}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined.is-focused,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#fff}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined.is-loading.is-focused:after,.button.is-dark.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-outlined.is-loading:focus:after,.button.is-dark.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-dark.is-inverted.is-outlined.is-focused,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#fff;color:#363636}.button.is-dark.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-inverted.is-outlined.is-loading:focus:after,.button.is-dark.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#00d1b2;border-color:transparent;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-hovered,.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#00d1b2}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}.button.is-primary.is-outlined.is-focused,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-outlined.is-loading.is-focused:after,.button.is-primary.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-outlined.is-loading:focus:after,.button.is-primary.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;box-shadow:none;color:#00d1b2}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined.is-focused,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-inverted.is-outlined.is-loading:focus:after,.button.is-primary.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-primary.is-light{background-color:#ebfffc;color:#00947e}.button.is-primary.is-light.is-hovered,.button.is-primary.is-light:hover{background-color:#defffa;border-color:transparent;color:#00947e}.button.is-primary.is-light.is-active,.button.is-primary.is-light:active{background-color:#d1fff8;border-color:transparent;color:#00947e}.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#3273dc;border-color:transparent;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-hovered,.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#3273dc}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}.button.is-link.is-outlined.is-focused,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-outlined.is-loading.is-focused:after,.button.is-link.is-outlined.is-loading.is-hovered:after,.button.is-link.is-outlined.is-loading:focus:after,.button.is-link.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;box-shadow:none;color:#3273dc}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined.is-focused,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-link.is-inverted.is-outlined.is-loading:focus:after,.button.is-link.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-link.is-light{background-color:#eef3fc;color:#2160c4}.button.is-link.is-light.is-hovered,.button.is-link.is-light:hover{background-color:#e3ecfa;border-color:transparent;color:#2160c4}.button.is-link.is-light.is-active,.button.is-link.is-light:active{background-color:#d8e4f8;border-color:transparent;color:#2160c4}.button.is-info{background-color:#3298dc;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#2793da;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,152,220,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#238cd1;border-color:transparent;color:#fff}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#3298dc;border-color:transparent;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#3298dc}.button.is-info.is-inverted.is-hovered,.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#3298dc}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#3298dc;color:#3298dc}.button.is-info.is-outlined.is-focused,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#3298dc;border-color:#3298dc;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #3298dc #3298dc!important}.button.is-info.is-outlined.is-loading.is-focused:after,.button.is-info.is-outlined.is-loading.is-hovered:after,.button.is-info.is-outlined.is-loading:focus:after,.button.is-info.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#3298dc;box-shadow:none;color:#3298dc}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined.is-focused,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#3298dc}.button.is-info.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-info.is-inverted.is-outlined.is-loading:focus:after,.button.is-info.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #3298dc #3298dc!important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-info.is-light{background-color:#eef6fc;color:#1d72aa}.button.is-info.is-light.is-hovered,.button.is-info.is-light:hover{background-color:#e3f1fa;border-color:transparent;color:#1d72aa}.button.is-info.is-light.is-active,.button.is-info.is-light:active{background-color:#d8ebf8;border-color:transparent;color:#1d72aa}.button.is-success{background-color:#48c774;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#3ec46d;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){box-shadow:0 0 0 .125em rgba(72,199,116,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#3abb67;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#48c774;border-color:transparent;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#48c774}.button.is-success.is-inverted.is-hovered,.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#48c774}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#48c774;color:#48c774}.button.is-success.is-outlined.is-focused,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#48c774;border-color:#48c774;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #48c774 #48c774!important}.button.is-success.is-outlined.is-loading.is-focused:after,.button.is-success.is-outlined.is-loading.is-hovered:after,.button.is-success.is-outlined.is-loading:focus:after,.button.is-success.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#48c774;box-shadow:none;color:#48c774}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined.is-focused,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#48c774}.button.is-success.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-success.is-inverted.is-outlined.is-loading:focus:after,.button.is-success.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #48c774 #48c774!important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-success.is-light{background-color:#effaf3;color:#257942}.button.is-success.is-light.is-hovered,.button.is-success.is-light:hover{background-color:#e6f7ec;border-color:transparent;color:#257942}.button.is-success.is-light.is-active,.button.is-success.is-light:active{background-color:#dcf4e4;border-color:transparent;color:#257942}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffdd57;border-color:transparent;box-shadow:none}.button.is-warning.is-inverted{color:#ffdd57}.button.is-warning.is-inverted,.button.is-warning.is-inverted.is-hovered,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined.is-focused,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined.is-loading.is-focused:after,.button.is-warning.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-outlined.is-loading:focus:after,.button.is-warning.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined.is-focused,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-inverted.is-outlined.is-loading:focus:after,.button.is-warning.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-warning.is-light{background-color:#fffbeb;color:#947600}.button.is-warning.is-light.is-hovered,.button.is-warning.is-light:hover{background-color:#fff8de;border-color:transparent;color:#947600}.button.is-warning.is-light.is-active,.button.is-warning.is-light:active{background-color:#fff6d1;border-color:transparent;color:#947600}.button.is-danger{background-color:#f14668;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#f03a5f;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ef2e55;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#f14668;border-color:transparent;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-hovered,.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#f14668}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#f14668;color:#f14668}.button.is-danger.is-outlined.is-focused,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#f14668;border-color:#f14668;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #f14668 #f14668!important}.button.is-danger.is-outlined.is-loading.is-focused:after,.button.is-danger.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-outlined.is-loading:focus:after,.button.is-danger.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#f14668;box-shadow:none;color:#f14668}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined.is-focused,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-inverted.is-outlined.is-loading:focus:after,.button.is-danger.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f14668 #f14668!important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.button.is-danger.is-light.is-hovered,.button.is-danger.is-light:hover{background-color:#fde0e6;border-color:transparent;color:#cc0f35}.button.is-danger.is-light.is-active,.button.is-danger.is-light:active{background-color:#fcd4dc;border-color:transparent;color:#cc0f35}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{position:absolute;left:calc(50% - .5em);top:calc(50% - .5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:290486px;padding-left:1.25em;padding-right:1.25em}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){border-radius:2px;font-size:.75rem}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1;flex-shrink:1}.buttons.is-centered{justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.container{flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none!important;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width:1024px){.container{max-width:960px}}@media screen and (max-width:1215px){.container.is-widescreen:not(.is-max-desktop){max-width:1152px}}@media screen and (max-width:1407px){.container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}@media screen and (min-width:1216px){.container:not(.is-max-desktop){max-width:1152px}}@media screen and (min-width:1408px){.container:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:inherit}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:290486px}.image.is-fullwidth{width:100%}.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;position:relative;padding:1.25rem 2.5rem 1.25rem 1.5rem}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{right:.5rem;position:absolute;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.notification.is-dark{background-color:#363636;color:#fff}.notification.is-primary{background-color:#00d1b2;color:#fff}.notification.is-primary.is-light{background-color:#ebfffc;color:#00947e}.notification.is-link{background-color:#3273dc;color:#fff}.notification.is-link.is-light{background-color:#eef3fc;color:#2160c4}.notification.is-info{background-color:#3298dc;color:#fff}.notification.is-info.is-light{background-color:#eef6fc;color:#1d72aa}.notification.is-success{background-color:#48c774;color:#fff}.notification.is-success.is-light{background-color:#effaf3;color:#257942}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-warning.is-light{background-color:#fffbeb;color:#947600}.notification.is-danger{background-color:#f14668;color:#fff}.notification.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#ededed}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:linear-gradient(90deg,#fff 30%,#ededed 0)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:linear-gradient(90deg,#0a0a0a 30%,#ededed 0)}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-light:indeterminate{background-image:linear-gradient(90deg,#f5f5f5 30%,#ededed 0)}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-dark:indeterminate{background-image:linear-gradient(90deg,#363636 30%,#ededed 0)}.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}.progress.is-primary::-ms-fill{background-color:#00d1b2}.progress.is-primary:indeterminate{background-image:linear-gradient(90deg,#00d1b2 30%,#ededed 0)}.progress.is-link::-webkit-progress-value{background-color:#3273dc}.progress.is-link::-moz-progress-bar{background-color:#3273dc}.progress.is-link::-ms-fill{background-color:#3273dc}.progress.is-link:indeterminate{background-image:linear-gradient(90deg,#3273dc 30%,#ededed 0)}.progress.is-info::-webkit-progress-value{background-color:#3298dc}.progress.is-info::-moz-progress-bar{background-color:#3298dc}.progress.is-info::-ms-fill{background-color:#3298dc}.progress.is-info:indeterminate{background-image:linear-gradient(90deg,#3298dc 30%,#ededed 0)}.progress.is-success::-webkit-progress-value{background-color:#48c774}.progress.is-success::-moz-progress-bar{background-color:#48c774}.progress.is-success::-ms-fill{background-color:#48c774}.progress.is-success:indeterminate{background-image:linear-gradient(90deg,#48c774 30%,#ededed 0)}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-warning:indeterminate{background-image:linear-gradient(90deg,#ffdd57 30%,#ededed 0)}.progress.is-danger::-webkit-progress-value{background-color:#f14668}.progress.is-danger::-moz-progress-bar{background-color:#f14668}.progress.is-danger::-ms-fill{background-color:#f14668}.progress.is-danger:indeterminate{background-image:linear-gradient(90deg,#f14668 30%,#ededed 0)}.progress:indeterminate{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveIndeterminate;animation-name:moveIndeterminate;-webkit-animation-timing-function:linear;animation-timing-function:linear;background-color:#ededed;background-image:linear-gradient(90deg,#4a4a4a 30%,#ededed 0);background-position:0 0;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress:indeterminate::-ms-fill{animation-name:none}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@-webkit-keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:rgba(0,0,0,.7)}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#fff}.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}.table td.is-info,.table th.is-info{background-color:#3298dc;border-color:#3298dc;color:#fff}.table td.is-success,.table th.is-success{background-color:#48c774;border-color:#48c774;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#f14668;border-color:#f14668;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#00d1b2;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table td.is-vcentered,.table th.is-vcentered{vertical-align:middle}.table th{color:#363636}.table th:not([align]){text-align:inherit}.table tr.is-selected{background-color:#00d1b2;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:transparent}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:transparent}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:transparent}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover,.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(2n){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.has-addons .tag,.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.tag:not(body).is-dark{background-color:#363636;color:#fff}.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}.tag:not(body).is-primary.is-light{background-color:#ebfffc;color:#00947e}.tag:not(body).is-link{background-color:#3273dc;color:#fff}.tag:not(body).is-link.is-light{background-color:#eef3fc;color:#2160c4}.tag:not(body).is-info{background-color:#3298dc;color:#fff}.tag:not(body).is-info.is-light{background-color:#eef6fc;color:#1d72aa}.tag:not(body).is-success{background-color:#48c774;color:#fff}.tag:not(body).is-success.is-light{background-color:#effaf3;color:#257942}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-warning.is-light{background-color:#fffbeb;color:#947600}.tag:not(body).is-danger{background-color:#f14668;color:#fff}.tag:not(body).is-danger.is-light{background-color:#feecf0;color:#cc0f35}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.subtitle sup,.title sub,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight pre{overflow:auto;max-width:100%}.number{align-items:center;background-color:#f5f5f5;border-radius:290486px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.input,.select select,.textarea{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.input::-moz-placeholder,.select select::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.select select::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.select select:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.select select:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input:hover,.is-hovered.input,.is-hovered.textarea,.select select.is-hovered,.select select:hover,.textarea:hover{border-color:#b5b5b5}.input:active,.input:focus,.is-active.input,.is-active.textarea,.is-focused.input,.is-focused.textarea,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.textarea:active,.textarea:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input[disabled],.select fieldset[disabled] select,.select select[disabled],.textarea[disabled],fieldset[disabled] .input,fieldset[disabled] .select select,fieldset[disabled] .textarea{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,.select select[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,.select select[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,.select select[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,.select select[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input,.textarea{box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);max-width:100%;width:100%}.input[readonly],.textarea[readonly]{box-shadow:none}.is-white.input,.is-white.textarea{border-color:#fff}.is-white.input:active,.is-white.input:focus,.is-white.is-active.input,.is-white.is-active.textarea,.is-white.is-focused.input,.is-white.is-focused.textarea,.is-white.textarea:active,.is-white.textarea:focus{box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.is-black.input,.is-black.textarea{border-color:#0a0a0a}.is-black.input:active,.is-black.input:focus,.is-black.is-active.input,.is-black.is-active.textarea,.is-black.is-focused.input,.is-black.is-focused.textarea,.is-black.textarea:active,.is-black.textarea:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.input,.is-light.textarea{border-color:#f5f5f5}.is-light.input:active,.is-light.input:focus,.is-light.is-active.input,.is-light.is-active.textarea,.is-light.is-focused.input,.is-light.is-focused.textarea,.is-light.textarea:active,.is-light.textarea:focus{box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.is-dark.input,.is-dark.textarea{border-color:#363636}.is-dark.input:active,.is-dark.input:focus,.is-dark.is-active.input,.is-dark.is-active.textarea,.is-dark.is-focused.input,.is-dark.is-focused.textarea,.is-dark.textarea:active,.is-dark.textarea:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.is-primary.input,.is-primary.textarea{border-color:#00d1b2}.is-primary.input:active,.is-primary.input:focus,.is-primary.is-active.input,.is-primary.is-active.textarea,.is-primary.is-focused.input,.is-primary.is-focused.textarea,.is-primary.textarea:active,.is-primary.textarea:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.is-link.input,.is-link.textarea{border-color:#3273dc}.is-link.input:active,.is-link.input:focus,.is-link.is-active.input,.is-link.is-active.textarea,.is-link.is-focused.input,.is-link.is-focused.textarea,.is-link.textarea:active,.is-link.textarea:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.is-info.input,.is-info.textarea{border-color:#3298dc}.is-info.input:active,.is-info.input:focus,.is-info.is-active.input,.is-info.is-active.textarea,.is-info.is-focused.input,.is-info.is-focused.textarea,.is-info.textarea:active,.is-info.textarea:focus{box-shadow:0 0 0 .125em rgba(50,152,220,.25)}.is-success.input,.is-success.textarea{border-color:#48c774}.is-success.input:active,.is-success.input:focus,.is-success.is-active.input,.is-success.is-active.textarea,.is-success.is-focused.input,.is-success.is-focused.textarea,.is-success.textarea:active,.is-success.textarea:focus{box-shadow:0 0 0 .125em rgba(72,199,116,.25)}.is-warning.input,.is-warning.textarea{border-color:#ffdd57}.is-warning.input:active,.is-warning.input:focus,.is-warning.is-active.input,.is-warning.is-active.textarea,.is-warning.is-focused.input,.is-warning.is-focused.textarea,.is-warning.textarea:active,.is-warning.textarea:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.is-danger.input,.is-danger.textarea{border-color:#f14668}.is-danger.input:active,.is-danger.input:focus,.is-danger.is-active.input,.is-danger.is-active.textarea,.is-danger.is-focused.input,.is-danger.is-focused.textarea,.is-danger.textarea:active,.is-danger.textarea:focus{box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.is-small.input,.is-small.textarea{border-radius:2px;font-size:.75rem}.is-medium.input,.is-medium.textarea{font-size:1.25rem}.is-large.input,.is-large.textarea{font-size:1.5rem}.is-fullwidth.input,.is-fullwidth.textarea{display:block;width:100%}.is-inline.input,.is-inline.textarea{display:inline;width:auto}.input.is-rounded{border-radius:290486px;padding-left:calc(1.125em - 1px);padding-right:calc(1.125em - 1px)}.input.is-static{background-color:transparent;border-color:transparent;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:auto}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.checkbox input[disabled],.radio[disabled],.radio input[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .radio{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.5em}.select:not(.is-multiple):not(.is-loading):after{border-color:#3273dc;right:1.125em;z-index:4}.select.is-rounded select{border-radius:290486px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover:after{border-color:#363636}.select.is-white:not(:hover):after,.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black:not(:hover):after,.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover):after,.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.select.is-dark:not(:hover):after,.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover):after,.select.is-primary select{border-color:#00d1b2}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#00b89c}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.select.is-link:not(:hover):after,.select.is-link select{border-color:#3273dc}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#2366d1}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select.is-info:not(:hover):after,.select.is-info select{border-color:#3298dc}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#238cd1}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{box-shadow:0 0 0 .125em rgba(50,152,220,.25)}.select.is-success:not(:hover):after,.select.is-success select{border-color:#48c774}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#3abb67}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{box-shadow:0 0 0 .125em rgba(72,199,116,.25)}.select.is-warning:not(:hover):after,.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger:not(:hover):after,.select.is-danger select{border-color:#f14668}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ef2e55}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{margin-top:0;position:absolute;right:.625em;top:.625em;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);color:rgba(0,0,0,.7)}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#fff}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#fff}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(54,54,54,.25);color:#fff}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#fff}.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#3298dc;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#2793da;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(50,152,220,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#238cd1;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#48c774;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#3ec46d;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(72,199,116,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#3abb67;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#f14668;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#f03a5f;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(241,70,104,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ef2e55;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border:1px solid #dbdbdb;border-left-width:0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-primary{color:#00d1b2}.help.is-link{color:#3273dc}.help.is-info{color:#3298dc}.help.is-success{color:#48c774}.help.is-warning{color:#ffdd57}.help.is-danger{color:#f14668}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover{z-index:2}.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]):focus{z-index:3}.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1;flex-shrink:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#4a4a4a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.5em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.5em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#3273dc;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#b5b5b5;content:\"\\0002f\"}.breadcrumb ol,.breadcrumb ul{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"\\02192\"}.breadcrumb.has-bullet-separator li+li:before{content:\"\\02022\"}.breadcrumb.has-dot-separator li+li:before{content:\"\\000b7\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"\\0227B\"}.card{background-color:#fff;border-radius:.25rem;box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);color:#4a4a4a;max-width:100%;overflow:hidden;position:relative}.card-header{background-color:transparent;align-items:stretch;box-shadow:0 .125em .25em rgba(10,10,10,.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem 1rem}.card-header-icon,.card-header-title.is-centered{justify-content:center}.card-header-icon{align-items:center;cursor:pointer;display:flex;padding:.75rem 1rem}.card-image{display:block;position:relative}.card-content{padding:1.5rem}.card-content,.card-footer{background-color:transparent}.card-footer{border-top:1px solid #ededed;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #ededed}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:0;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#3273dc;color:#fff}.dropdown-divider{background-color:#ededed;border:none;display:block;height:1px;margin:.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media print,screen and (min-width:769px){.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:flex}}.media{align-items:flex-start;display:flex;text-align:inherit}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid hsla(0,0%,85.9%,.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid hsla(0,0%,85.9%,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:inherit}@media screen and (max-width:768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#3273dc;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.message.is-light .message-body{border-color:#f5f5f5}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#fff}.message.is-dark .message-body{border-color:#363636}.message.is-primary{background-color:#ebfffc}.message.is-primary .message-header{background-color:#00d1b2;color:#fff}.message.is-primary .message-body{border-color:#00d1b2;color:#00947e}.message.is-link{background-color:#eef3fc}.message.is-link .message-header{background-color:#3273dc;color:#fff}.message.is-link .message-body{border-color:#3273dc;color:#2160c4}.message.is-info{background-color:#eef6fc}.message.is-info .message-header{background-color:#3298dc;color:#fff}.message.is-info .message-body{border-color:#3298dc;color:#1d72aa}.message.is-success{background-color:#effaf3}.message.is-success .message-header{background-color:#48c774;color:#fff}.message.is-success .message-body{border-color:#48c774;color:#257942}.message.is-warning{background-color:#fffbeb}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#947600}.message.is-danger{background-color:#feecf0}.message.is-danger .message-header{background-color:#f14668;color:#fff}.message.is-danger .message-body{border-color:#f14668;color:#cc0f35}.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-radius:4px;border:solid #dbdbdb;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-foot,.modal-card-head{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5}.navbar.is-light,.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:rgba(0,0,0,.7)}}.navbar.is-dark{background-color:#363636;color:#fff}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#fff}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#fff}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-dark .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#fff}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#fff}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#fff}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#fff}}.navbar.is-primary{background-color:#00d1b2;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}.navbar.is-link{background-color:#3273dc;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}.navbar.is-info{background-color:#3298dc;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#238cd1;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#238cd1;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#238cd1;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#3298dc;color:#fff}}.navbar.is-success{background-color:#48c774;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#3abb67;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#3abb67;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#3abb67;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#48c774;color:#fff}}.navbar.is-warning{background-color:#ffdd57}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#f14668;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#f14668;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:focus,.navbar-link:hover,.navbar-link[focus-within],a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:hover,a.navbar-item[focus-within]{background-color:#fafafa;color:#3273dc}.navbar-link.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover{background-color:#fafafa;color:#3273dc}.navbar-item{flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#3273dc}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom:3px solid #3273dc;color:#3273dc;padding-bottom:calc(.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless):after{border-color:#3273dc;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link:after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{align-items:stretch;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable[focus-within] .navbar-link,.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable[focus-within] .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar-item.is-hoverable[focus-within] .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable[focus-within] .navbar-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% - 4px);transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-.75rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:focus):not(:hover),a.navbar-item.is-active:not(:focus):not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 3.25rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}.pagination.is-rounded .pagination-link{border-radius:290486px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.5em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#3273dc}.pagination-link:active,.pagination-next:active,.pagination-previous:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#3273dc;border-color:#3273dc;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}@media screen and (max-width:768px){.pagination{flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{flex-grow:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{border-radius:6px;box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel.is-white .panel-heading{background-color:#fff;color:#0a0a0a}.panel.is-white .panel-tabs a.is-active{border-bottom-color:#fff}.panel.is-white .panel-block.is-active .panel-icon{color:#fff}.panel.is-black .panel-heading{background-color:#0a0a0a;color:#fff}.panel.is-black .panel-tabs a.is-active{border-bottom-color:#0a0a0a}.panel.is-black .panel-block.is-active .panel-icon{color:#0a0a0a}.panel.is-light .panel-heading{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.panel.is-light .panel-tabs a.is-active{border-bottom-color:#f5f5f5}.panel.is-light .panel-block.is-active .panel-icon{color:#f5f5f5}.panel.is-dark .panel-heading{background-color:#363636;color:#fff}.panel.is-dark .panel-tabs a.is-active{border-bottom-color:#363636}.panel.is-dark .panel-block.is-active .panel-icon{color:#363636}.panel.is-primary .panel-heading{background-color:#00d1b2;color:#fff}.panel.is-primary .panel-tabs a.is-active{border-bottom-color:#00d1b2}.panel.is-primary .panel-block.is-active .panel-icon{color:#00d1b2}.panel.is-link .panel-heading{background-color:#3273dc;color:#fff}.panel.is-link .panel-tabs a.is-active{border-bottom-color:#3273dc}.panel.is-link .panel-block.is-active .panel-icon{color:#3273dc}.panel.is-info .panel-heading{background-color:#3298dc;color:#fff}.panel.is-info .panel-tabs a.is-active{border-bottom-color:#3298dc}.panel.is-info .panel-block.is-active .panel-icon{color:#3298dc}.panel.is-success .panel-heading{background-color:#48c774;color:#fff}.panel.is-success .panel-tabs a.is-active{border-bottom-color:#48c774}.panel.is-success .panel-block.is-active .panel-icon{color:#48c774}.panel.is-warning .panel-heading{background-color:#ffdd57;color:rgba(0,0,0,.7)}.panel.is-warning .panel-tabs a.is-active{border-bottom-color:#ffdd57}.panel.is-warning .panel-block.is-active .panel-icon{color:#ffdd57}.panel.is-danger .panel-heading{background-color:#f14668;color:#fff}.panel.is-danger .panel-tabs a.is-active{border-bottom-color:#f14668}.panel.is-danger .panel-block.is-active .panel-icon{color:#f14668}.panel-block:not(:last-child),.panel-tabs:not(:last-child){border-bottom:1px solid #ededed}.panel-heading{background-color:#ededed;border-radius:6px 6px 0 0;color:#363636;font-size:1.25em;font-weight:700;line-height:1.25;padding:.75em 1em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#3273dc}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#3273dc;color:#363636}.panel-block.is-active .panel-icon{color:#3273dc}.panel-block:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom:1px solid #dbdbdb;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#3273dc;color:#3273dc}.tabs ul{align-items:center;border-bottom:1px solid #dbdbdb;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border:1px solid #dbdbdb;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#3273dc;border-color:#3273dc;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{flex:none;width:0}.columns.is-mobile>.column.is-offset-0{margin-left:0}.columns.is-mobile>.column.is-1{flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-narrow-mobile{flex:none}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{flex:none;width:0}.column.is-offset-0-mobile{margin-left:0}.column.is-1-mobile{flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-narrow,.column.is-narrow-tablet{flex:none}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{flex:none;width:0}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-narrow-touch{flex:none}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{flex:none;width:0}.column.is-offset-0-touch{margin-left:0}.column.is-1-touch{flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-narrow-desktop{flex:none}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{flex:none;width:0}.column.is-offset-0-desktop{margin-left:0}.column.is-1-desktop{flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-narrow-widescreen{flex:none}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{flex:none;width:0}.column.is-offset-0-widescreen{margin-left:0}.column.is-1-widescreen{flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-narrow-fullhd{flex:none}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{flex:none;width:0}.column.is-offset-0-fullhd{margin-left:0}.column.is-1-fullhd{flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:.75rem}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(var(--columnGap)*-1);margin-right:calc(var(--columnGap)*-1)}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}@media screen and (max-width:768px){.columns.is-variable.is-0-mobile{--columnGap:0rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-0-tablet{--columnGap:0rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-0-tablet-only{--columnGap:0rem}}@media screen and (max-width:1023px){.columns.is-variable.is-0-touch{--columnGap:0rem}}@media screen and (min-width:1024px){.columns.is-variable.is-0-desktop{--columnGap:0rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-0-desktop-only{--columnGap:0rem}}@media screen and (min-width:1216px){.columns.is-variable.is-0-widescreen{--columnGap:0rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-0-widescreen-only{--columnGap:0rem}}@media screen and (min-width:1408px){.columns.is-variable.is-0-fullhd{--columnGap:0rem}}.columns.is-variable.is-1{--columnGap:0.25rem}@media screen and (max-width:768px){.columns.is-variable.is-1-mobile{--columnGap:0.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-1-tablet{--columnGap:0.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-1-tablet-only{--columnGap:0.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-1-touch{--columnGap:0.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-1-desktop{--columnGap:0.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-1-desktop-only{--columnGap:0.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-1-widescreen{--columnGap:0.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-1-widescreen-only{--columnGap:0.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-1-fullhd{--columnGap:0.25rem}}.columns.is-variable.is-2{--columnGap:0.5rem}@media screen and (max-width:768px){.columns.is-variable.is-2-mobile{--columnGap:0.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-2-tablet{--columnGap:0.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-2-tablet-only{--columnGap:0.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-2-touch{--columnGap:0.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-2-desktop{--columnGap:0.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-2-desktop-only{--columnGap:0.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-2-widescreen{--columnGap:0.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-2-widescreen-only{--columnGap:0.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-2-fullhd{--columnGap:0.5rem}}.columns.is-variable.is-3{--columnGap:0.75rem}@media screen and (max-width:768px){.columns.is-variable.is-3-mobile{--columnGap:0.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-3-tablet{--columnGap:0.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-3-tablet-only{--columnGap:0.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-3-touch{--columnGap:0.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-3-desktop{--columnGap:0.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-3-desktop-only{--columnGap:0.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-3-widescreen{--columnGap:0.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-3-widescreen-only{--columnGap:0.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-3-fullhd{--columnGap:0.75rem}}.columns.is-variable.is-4{--columnGap:1rem}@media screen and (max-width:768px){.columns.is-variable.is-4-mobile{--columnGap:1rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-4-tablet{--columnGap:1rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-4-tablet-only{--columnGap:1rem}}@media screen and (max-width:1023px){.columns.is-variable.is-4-touch{--columnGap:1rem}}@media screen and (min-width:1024px){.columns.is-variable.is-4-desktop{--columnGap:1rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-4-desktop-only{--columnGap:1rem}}@media screen and (min-width:1216px){.columns.is-variable.is-4-widescreen{--columnGap:1rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-4-widescreen-only{--columnGap:1rem}}@media screen and (min-width:1408px){.columns.is-variable.is-4-fullhd{--columnGap:1rem}}.columns.is-variable.is-5{--columnGap:1.25rem}@media screen and (max-width:768px){.columns.is-variable.is-5-mobile{--columnGap:1.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-5-tablet{--columnGap:1.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-5-tablet-only{--columnGap:1.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-5-touch{--columnGap:1.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-5-desktop{--columnGap:1.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-5-desktop-only{--columnGap:1.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-5-widescreen{--columnGap:1.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-5-widescreen-only{--columnGap:1.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-5-fullhd{--columnGap:1.25rem}}.columns.is-variable.is-6{--columnGap:1.5rem}@media screen and (max-width:768px){.columns.is-variable.is-6-mobile{--columnGap:1.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-6-tablet{--columnGap:1.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-6-tablet-only{--columnGap:1.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-6-touch{--columnGap:1.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-6-desktop{--columnGap:1.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-6-desktop-only{--columnGap:1.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-6-widescreen{--columnGap:1.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-6-widescreen-only{--columnGap:1.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-6-fullhd{--columnGap:1.5rem}}.columns.is-variable.is-7{--columnGap:1.75rem}@media screen and (max-width:768px){.columns.is-variable.is-7-mobile{--columnGap:1.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-7-tablet{--columnGap:1.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-7-tablet-only{--columnGap:1.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-7-touch{--columnGap:1.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-7-desktop{--columnGap:1.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-7-desktop-only{--columnGap:1.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-7-widescreen{--columnGap:1.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-7-widescreen-only{--columnGap:1.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-7-fullhd{--columnGap:1.75rem}}.columns.is-variable.is-8{--columnGap:2rem}@media screen and (max-width:768px){.columns.is-variable.is-8-mobile{--columnGap:2rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-8-tablet{--columnGap:2rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-8-tablet-only{--columnGap:2rem}}@media screen and (max-width:1023px){.columns.is-variable.is-8-touch{--columnGap:2rem}}@media screen and (min-width:1024px){.columns.is-variable.is-8-desktop{--columnGap:2rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-8-desktop-only{--columnGap:2rem}}@media screen and (min-width:1216px){.columns.is-variable.is-8-widescreen{--columnGap:2rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-8-widescreen-only{--columnGap:2rem}}@media screen and (min-width:1408px){.columns.is-variable.is-8-fullhd{--columnGap:2rem}}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333%}.tile.is-2{flex:none;width:16.66667%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333%}.tile.is-5{flex:none;width:41.66667%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333%}.tile.is-8{flex:none;width:66.66667%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333%}.tile.is-11{flex:none;width:91.66667%}.tile.is-12{flex:none;width:100%}}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#00d1b2!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}.has-background-primary{background-color:#00d1b2!important}.has-text-primary-light{color:#ebfffc!important}a.has-text-primary-light:focus,a.has-text-primary-light:hover{color:#b8fff4!important}.has-background-primary-light{background-color:#ebfffc!important}.has-text-primary-dark{color:#00947e!important}a.has-text-primary-dark:focus,a.has-text-primary-dark:hover{color:#00c7a9!important}.has-background-primary-dark{background-color:#00947e!important}.has-text-link{color:#3273dc!important}a.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}.has-background-link{background-color:#3273dc!important}.has-text-link-light{color:#eef3fc!important}a.has-text-link-light:focus,a.has-text-link-light:hover{color:#c2d5f5!important}.has-background-link-light{background-color:#eef3fc!important}.has-text-link-dark{color:#2160c4!important}a.has-text-link-dark:focus,a.has-text-link-dark:hover{color:#3b79de!important}.has-background-link-dark{background-color:#2160c4!important}.has-text-info{color:#3298dc!important}a.has-text-info:focus,a.has-text-info:hover{color:#207dbc!important}.has-background-info{background-color:#3298dc!important}.has-text-info-light{color:#eef6fc!important}a.has-text-info-light:focus,a.has-text-info-light:hover{color:#c2e0f5!important}.has-background-info-light{background-color:#eef6fc!important}.has-text-info-dark{color:#1d72aa!important}a.has-text-info-dark:focus,a.has-text-info-dark:hover{color:#248fd6!important}.has-background-info-dark{background-color:#1d72aa!important}.has-text-success{color:#48c774!important}a.has-text-success:focus,a.has-text-success:hover{color:#34a85c!important}.has-background-success{background-color:#48c774!important}.has-text-success-light{color:#effaf3!important}a.has-text-success-light:focus,a.has-text-success-light:hover{color:#c8eed6!important}.has-background-success-light{background-color:#effaf3!important}.has-text-success-dark{color:#257942!important}a.has-text-success-dark:focus,a.has-text-success-dark:hover{color:#31a058!important}.has-background-success-dark{background-color:#257942!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-background-warning{background-color:#ffdd57!important}.has-text-warning-light{color:#fffbeb!important}a.has-text-warning-light:focus,a.has-text-warning-light:hover{color:#fff1b8!important}.has-background-warning-light{background-color:#fffbeb!important}.has-text-warning-dark{color:#947600!important}a.has-text-warning-dark:focus,a.has-text-warning-dark:hover{color:#c79f00!important}.has-background-warning-dark{background-color:#947600!important}.has-text-danger{color:#f14668!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ee1742!important}.has-background-danger{background-color:#f14668!important}.has-text-danger-light{color:#feecf0!important}a.has-text-danger-light:focus,a.has-text-danger-light:hover{color:#fabdc9!important}.has-background-danger-light{background-color:#feecf0!important}.has-text-danger-dark{color:#cc0f35!important}a.has-text-danger-dark:focus,a.has-text-danger-dark:hover{color:#ee2049!important}.has-background-danger-dark{background-color:#cc0f35!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.is-flex-direction-row{flex-direction:row!important}.is-flex-direction-row-reverse{flex-direction:row-reverse!important}.is-flex-direction-column{flex-direction:column!important}.is-flex-direction-column-reverse{flex-direction:column-reverse!important}.is-flex-wrap-nowrap{flex-wrap:nowrap!important}.is-flex-wrap-wrap{flex-wrap:wrap!important}.is-flex-wrap-wrap-reverse{flex-wrap:wrap-reverse!important}.is-justify-content-flex-start{justify-content:flex-start!important}.is-justify-content-flex-end{justify-content:flex-end!important}.is-justify-content-center{justify-content:center!important}.is-justify-content-space-between{justify-content:space-between!important}.is-justify-content-space-around{justify-content:space-around!important}.is-justify-content-space-evenly{justify-content:space-evenly!important}.is-justify-content-start{justify-content:start!important}.is-justify-content-end{justify-content:end!important}.is-justify-content-left{justify-content:left!important}.is-justify-content-right{justify-content:right!important}.is-align-content-flex-start{align-content:flex-start!important}.is-align-content-flex-end{align-content:flex-end!important}.is-align-content-center{align-content:center!important}.is-align-content-space-between{align-content:space-between!important}.is-align-content-space-around{align-content:space-around!important}.is-align-content-space-evenly{align-content:space-evenly!important}.is-align-content-stretch{align-content:stretch!important}.is-align-content-start{align-content:start!important}.is-align-content-end{align-content:end!important}.is-align-content-baseline{align-content:baseline!important}.is-align-items-stretch{align-items:stretch!important}.is-align-items-flex-start{align-items:flex-start!important}.is-align-items-flex-end{align-items:flex-end!important}.is-align-items-center{align-items:center!important}.is-align-items-baseline{align-items:baseline!important}.is-align-items-start{align-items:start!important}.is-align-items-end{align-items:end!important}.is-align-items-self-start{align-items:self-start!important}.is-align-items-self-end{align-items:self-end!important}.is-align-self-auto{align-self:auto!important}.is-align-self-flex-start{align-self:flex-start!important}.is-align-self-flex-end{align-self:flex-end!important}.is-align-self-center{align-self:center!important}.is-align-self-baseline{align-self:baseline!important}.is-align-self-stretch{align-self:stretch!important}.is-flex-grow-0{flex-grow:0!important}.is-flex-grow-1{flex-grow:1!important}.is-flex-grow-2{flex-grow:2!important}.is-flex-grow-3{flex-grow:3!important}.is-flex-grow-4{flex-grow:4!important}.is-flex-grow-5{flex-grow:5!important}.is-flex-shrink-0{flex-shrink:0!important}.is-flex-shrink-1{flex-shrink:1!important}.is-flex-shrink-2{flex-shrink:2!important}.is-flex-shrink-3{flex-shrink:3!important}.is-flex-shrink-4{flex-shrink:4!important}.is-flex-shrink-5{flex-shrink:5!important}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-radiusless{border-radius:0!important}.is-shadowless{box-shadow:none!important}.is-clickable{cursor:pointer!important}.is-clipped{overflow:hidden!important}.is-relative{position:relative!important}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.m-0{margin:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.mx-0{margin-right:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:.25rem!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-2{margin:.5rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-3{margin:.75rem!important}.mt-3{margin-top:.75rem!important}.mr-3{margin-right:.75rem!important}.mb-3{margin-bottom:.75rem!important}.ml-3,.mx-3{margin-left:.75rem!important}.mx-3{margin-right:.75rem!important}.my-3{margin-top:.75rem!important;margin-bottom:.75rem!important}.m-4{margin:1rem!important}.mt-4{margin-top:1rem!important}.mr-4{margin-right:1rem!important}.mb-4{margin-bottom:1rem!important}.ml-4,.mx-4{margin-left:1rem!important}.mx-4{margin-right:1rem!important}.my-4{margin-top:1rem!important;margin-bottom:1rem!important}.m-5{margin:1.5rem!important}.mt-5{margin-top:1.5rem!important}.mr-5{margin-right:1.5rem!important}.mb-5{margin-bottom:1.5rem!important}.ml-5,.mx-5{margin-left:1.5rem!important}.mx-5{margin-right:1.5rem!important}.my-5{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-6{margin:3rem!important}.mt-6{margin-top:3rem!important}.mr-6{margin-right:3rem!important}.mb-6{margin-bottom:3rem!important}.ml-6,.mx-6{margin-left:3rem!important}.mx-6{margin-right:3rem!important}.my-6{margin-top:3rem!important;margin-bottom:3rem!important}.p-0{padding:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.px-0{padding-right:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:.25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-2{padding:.5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-3{padding:.75rem!important}.pt-3{padding-top:.75rem!important}.pr-3{padding-right:.75rem!important}.pb-3{padding-bottom:.75rem!important}.pl-3,.px-3{padding-left:.75rem!important}.px-3{padding-right:.75rem!important}.py-3{padding-top:.75rem!important;padding-bottom:.75rem!important}.p-4{padding:1rem!important}.pt-4{padding-top:1rem!important}.pr-4{padding-right:1rem!important}.pb-4{padding-bottom:1rem!important}.pl-4,.px-4{padding-left:1rem!important}.px-4{padding-right:1rem!important}.py-4{padding-top:1rem!important;padding-bottom:1rem!important}.p-5{padding:1.5rem!important}.pt-5{padding-top:1.5rem!important}.pr-5{padding-right:1.5rem!important}.pb-5{padding-bottom:1.5rem!important}.pl-5,.px-5{padding-left:1.5rem!important}.px-5{padding-right:1.5rem!important}.py-5{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-6{padding:3rem!important}.pt-6{padding-top:3rem!important}.pr-6{padding-right:3rem!important}.pb-6{padding-bottom:3rem!important}.pl-6,.px-6{padding-left:3rem!important}.px-6{padding-right:3rem!important}.py-6{padding-top:3rem!important;padding-bottom:3rem!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-medium{font-weight:500!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-family-primary,.is-family-sans-serif,.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif!important}.is-family-code,.is-family-monospace{font-family:monospace!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:inline-flex!important}}.is-hidden{display:none!important}.is-sr-only{border:none!important;clip:rect(0,0,0,0)!important;height:.01em!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:.01em!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover,.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover,.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:rgba(0,0,0,.7)}.hero.is-light .subtitle{color:rgba(0,0,0,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(0,0,0,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.hero.is-light .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-light .tabs a:hover,.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#fff}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#fff}.hero.is-dark .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#fff}.hero.is-dark .tabs a{color:#fff;opacity:.9}.hero.is-dark .tabs a:hover,.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#fff}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#00d1b2;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover,.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}}.hero.is-link{background-color:#3273dc;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#3273dc}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover,.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}}.hero.is-info{background-color:#3298dc;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#3298dc}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#238cd1;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover,.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3298dc}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#159dc6,#3298dc 71%,#4389e5)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#159dc6,#3298dc 71%,#4389e5)}}.hero.is-success{background-color:#48c774;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#48c774}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#3abb67;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover,.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#48c774}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#29b342,#48c774 71%,#56d296)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#29b342,#48c774 71%,#56d296)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover,.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}}.hero.is-danger{background-color:#f14668;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#f14668}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ef2e55;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover,.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#f14668}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#fa0a62,#f14668 71%,#f7595f)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#fa0a62,#f14668 71%,#f7595f)}}.hero.is-small .hero-body{padding:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding:9rem 1.5rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding:18rem 1.5rem}}.hero.is-fullheight-with-navbar .hero-body,.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{align-items:center;display:flex}.hero.is-fullheight-with-navbar .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0}.hero-body,.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("5764bbd8", content, true)

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;transform:scale(.25);transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;transform:scale(.25);transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;transform:scale(.25);transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("vue-scrollto");

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".logoText_3hiZC{color:#000;margin-left:10px;font-size:25px;font-weight:700}", ""]);
// Exports
exports.locals = {
	"logoText": "logoText_3hiZC"
};
module.exports = exports;


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrap_1AEYe{background:linear-gradient(100deg,#5479f7 37%,#1f105d)}@media (min-width:320px) and (max-width:767px){.wrap_1AEYe{height:100%;padding:0;background:none}}.nmbr_2rTU7{font-size:20px;color:#fff}.dark_2MuNw{display:none}@media (min-width:320px) and (max-width:767px){.dark_2MuNw{display:block;background-color:#000;width:100%;opacity:.5;height:100%;position:absolute}}.clear_2D1cX{height:20vw}@media (min-width:768px) and (max-width:1215px){.clear_2D1cX{height:100px}}.bcg_3IOOC{position:absolute;right:0;top:20px;max-width:650px}@media (min-width:320px) and (max-width:767px){.bcg_3IOOC{display:none}}@media (min-width:768px) and (max-width:1215px){.bcg_3IOOC{max-width:450px}}.bcgMobile_c1KuP{position:absolute;width:100%}.bcgMobileWrap_3lpL7{width:100%}.title_3Svx8{font-size:calc(25px + .5vw);position:relative;font-weight:700;color:#fff;font-family:\"Montserrat\",sans-serif;margin-bottom:20px}@media (min-width:320px) and (max-width:767px){.title_3Svx8{font-size:calc(18px + .5vw);position:relative;color:#fff}}.desc_2MJa9{color:#fff;font-size:14px}@media (min-width:320px) and (max-width:767px){.desc_2MJa9{position:relative;color:#fff}}.textWrap_f9lKw{width:40%;padding:120px 0 0 60px;box-sizing:border-box}@media (min-width:320px) and (max-width:767px){.textWrap_f9lKw{padding:60px 12vw 0;width:100%;background:url(https://st.depositphotos.com/2315957/5027/i/600/depositphotos_50279419-stock-photo-computer-repair.jpg) no-repeat;background-size:100%}}@media (min-width:768px) and (max-width:1215px){.textWrap_f9lKw{padding:60px 0 0 .75rem}}", ""]);
// Exports
exports.locals = {
	"wrap": "wrap_1AEYe",
	"nmbr": "nmbr_2rTU7",
	"dark": "dark_2MuNw",
	"clear": "clear_2D1cX",
	"bcg": "bcg_3IOOC",
	"bcgMobile": "bcgMobile_c1KuP",
	"bcgMobileWrap": "bcgMobileWrap_3lpL7",
	"title": "title_3Svx8",
	"desc": "desc_2MJa9",
	"textWrap": "textWrap_f9lKw"
};
module.exports = exports;


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".column_1hzPx{max-width:400px}.wrap_3b3Tv{padding-top:100px}@media (min-width:320px) and (max-width:767px){.wrap_3b3Tv{padding-top:50px}}.icon_3_kiq{font-size:calc(30px + 5vh);color:#458ff6}.item_3PtHw{border-radius:20px;padding:35px calc(15px + 1vw);height:100%;width:400px;text-align:left}@media (min-width:320px) and (max-width:767px){.item_3PtHw{text-align:center;padding:0 60px}}@media (min-width:768px) and (max-width:1407px){.item_3PtHw{text-align:center}}.subTitle_2K4cR{font-size:calc(11px + .5vw);margin:20px 0 15px;font-family:\"Montserrat\",sans-serif;font-weight:700}.desc_1lm5W{font-size:calc(8px + .5vw);color:#7d7987}.img_1tecJ{width:100px;margin:15px 0 20px}", ""]);
// Exports
exports.locals = {
	"column": "column_1hzPx",
	"wrap": "wrap_3b3Tv",
	"icon": "icon_3_kiq",
	"item": "item_3PtHw",
	"subTitle": "subTitle_2K4cR",
	"desc": "desc_1lm5W",
	"img": "img_1tecJ"
};
module.exports = exports;


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:320px) and (max-width:767px){.form_2qu1g{margin:0 auto;width:80%}}.dots_16zpc{width:100px;position:absolute;left:-50px}@media (min-width:320px) and (max-width:767px){.dots_16zpc{display:none}}.dotsBlue_Pojlk{width:100px;position:absolute;right:-80px;bottom:10px;z-index:-1}@media (min-width:320px) and (max-width:767px){.dotsBlue_Pojlk{display:none}}.wrap_1mdB5{display:grid;background:#5479f7;border-radius:24px;padding:50px 80px;box-sizing:border-box;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr);grid-column-gap:0;grid-row-gap:0;width:90%;margin:0 auto}@media (min-width:320px) and (max-width:540px){.wrap_1mdB5{padding:5% 20px}}.fWrap_3DQVc{padding:100px 5% 50px}@media (min-width:320px) and (max-width:767px){.fWrap_3DQVc{padding:0 5% 50px}}.title_cZCHP{color:#fff;font-size:calc(25px + .5vw);text-align:left;text-align:center;font-family:\"Montserrat\",sans-serif;font-weight:400;width:100%;margin:0 0 40px}.fTitle_MU-XI{font-size:calc(16px + .5vw);margin-bottom:15px}.fSubTitle_339bv{margin:70px 0 5px;font-size:14px}.id_2K3rh{margin:auto 0 auto 20px;font-family:\"Montserrat\",sans-serif}.id__name_3nDC8{font-size:20px;font-weight:700}.id__subName_2sknT{font-size:14px;margin-bottom:15px}.info_36eHB{color:#fff;grid-area:2/1/3/2;display:flex}.desc_3XBBd{color:#fff;margin:0 auto}@media (min-width:320px) and (max-width:540px){.desc_3XBBd{text-align:justify}}.icons_YXiYk{display:flex;justify-content:space-between;max-width:20%;text-align:center;color:#000;margin:50px auto 0;font-size:30px}.img_3lmAN{border:3px solid #fff;border-radius:290486px}@media (min-width:320px) and (max-width:540px){.img_3lmAN{border-radius:0}}.phone_xkMD-{margin-right:20px;white-space:nowrap;font-weight:700}", ""]);
// Exports
exports.locals = {
	"form": "form_2qu1g",
	"dots": "dots_16zpc",
	"dotsBlue": "dotsBlue_Pojlk",
	"wrap": "wrap_1mdB5",
	"fWrap": "fWrap_3DQVc",
	"title": "title_cZCHP",
	"fTitle": "fTitle_MU-XI",
	"fSubTitle": "fSubTitle_339bv",
	"id": "id_2K3rh",
	"id__name": "id__name_3nDC8",
	"id__subName": "id__subName_2sknT",
	"info": "info_36eHB",
	"desc": "desc_3XBBd",
	"icons": "icons_YXiYk",
	"img": "img_3lmAN",
	"phone": "phone_xkMD-"
};
module.exports = exports;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".navItem_3cNSr{color:#fff!important;background:#5479f7!important}.desc_Lcrxl{color:#fff;grid-area:2/2/3/3;width:100%}.wrap_3EMAN{background:#5479f7;height:100px;margin-top:100px;display:flex;justify-content:space-between}.logoText_24G4u{font-size:24px;margin-left:10px;font-weight:700;color:#fff!important}.logoText__a_2vqUh{color:#fff!important;margin-right:10px}.logoWrap_3ZA7J{padding:0 .75rem;margin:auto 0;display:flex}@media (min-width:320px) and (max-width:767px){.nav_21cI4{display:none}}", ""]);
// Exports
exports.locals = {
	"navItem": "navItem_3cNSr",
	"desc": "desc_Lcrxl",
	"wrap": "wrap_3EMAN",
	"logoText": "logoText_24G4u",
	"logoText__a": "logoText__a_2vqUh",
	"logoWrap": "logoWrap_3ZA7J",
	"nav": "nav_21cI4"
};
module.exports = exports;


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:\"rouble\";src:url(/full_path/fonts/rouble.otf) format(\"opentype\")}.rub{font-family:\"rouble\"}html{font-family:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.modalShadow{background-color:#000!important;position:fixed;top:0;bottom:0;z-index:1;opacity:.8;height:100vh;width:100%}.ps{height:100%}.wrap{background-color:#f9f9f9!important}.logoText{font-size:24px;margin-left:10px;font-weight:700}.navbar{width:100%}.navbar-end{display:flex}.title{font-size:calc(25px + .5vw);text-align:left;margin:0 0 70px;color:#402b2b;text-align:center;font-family:\"Montserrat\",sans-serif;font-weight:400}@media screen and (max-width:540px){.title{font-size:calc(14px + 1vw);margin:0 0 50px!important;font-weight:700}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
var _store_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(79, 1);


const services = _store_data_json__WEBPACK_IMPORTED_MODULE_1__;
const state = () => ({
  services: [],
  modal: false,
  currentDetail: {}
});
const mutations = {
  SET_SERVICES_LIST(state, services) {
    state.services = services;
  },

  // OPEN_MODAL (state, payload) {
  //   state.modal = payload
  // },
  CLOSE_MODAL(state, payload) {
    state.modal = payload;
  },

  SET_CURRENT_DETAIL(state, detail) {
    state.currentDetail = services.find(item => item.id === detail);
    state.modal = true;
    console.log(this.state.modal);
  }

};
const actions = {
  async getCatalog({
    commit
  }) {
    try {
      await commit('SET_SERVICES_LIST', services);
    } catch (err) {
      console.log(err);
      throw new Error('Внутреняя ошибка сервера, сообщите администратору');
    }
  } // async getCurrentDetail ({ commit }, {route}) {
  //   await sleep(1000)
  //   const detail = vehicles.find((detail) => detail.name === route.params.DetailPage)
  //   await commit('SET_CURRENT_DETAIL', detail)
  // }


};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(51);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(76);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(77);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(125);

// CONCATENATED MODULE: ./.nuxt/utils.js




 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js




async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(78);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(53);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(34);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(21);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js



if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _5fadc45c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 157))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _5fadc45c,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "28a49920"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js






/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(129)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "2d6594a4"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bulma/css/bulma.css
var bulma = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(133);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=b67f1eda&
var defaultvue_type_template_id_b67f1eda_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('Title',{attrs:{"id":"title"}}),_vm._ssrNode(" "),_c('Advantages',{staticClass:"container",attrs:{"id":"advantages"}}),_vm._ssrNode(" "),_c('Nuxt',{staticClass:"container",attrs:{"id":"catalog"}}),_vm._ssrNode(" "),_c('Contacts',{staticClass:"container",attrs:{"id":"contacts"}}),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_b67f1eda_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=b67f1eda&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=a50f4180&
var Headervue_type_template_id_a50f4180_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.modal)?_vm._ssrNode("<div class=\"modalShadow\">","</div>"):(!this.modal)?_vm._ssrNode("<div id=\"top\" class=\"header\">","</div>",[_vm._ssrNode("<nav role=\"navigation\" aria-label=\"main navigation\" class=\"navbar wrap\">","</nav>",[_vm._ssrNode("<div class=\"navbar-brand\">","</div>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#top'),expression:"'#top'"}],staticClass:"navbar-item",attrs:{"href":"#"}},[_vm._ssrNode("<div style=\"display: flex\"><div style=\"\\n                height: 35px;\\n                width: 12px;\\n                background: #00d1b2;\\n                margin-right: 15px;\\n              \"></div> <div style=\"height: 35px; width: 12px; background: #00d1b2\"></div></div> "),_c('vue-typed-js',{staticClass:"is-hidden-mobile",attrs:{"backDelay":1000,"startDelay":1000,"loop":true,"strings":['Polyakov', 'Поляковъ']}},[_c('h1',{staticClass:"typing",class:_vm.$style.logoText})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"navbar-item is-hidden-tablet\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#contacts'),expression:"'#contacts'"}],staticClass:"button is-primary",attrs:{"href":"#"}},[_vm._ssrNode("<strong>Свяжитесь с нами</strong>")])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"navbarBasicExample\" class=\"navbar-menu is-active\">","</div>",[_vm._ssrNode("<div class=\"navbar-end\">","</div>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#advantages'),expression:"'#advantages'"}],staticClass:"navbar-item",attrs:{"href":"#"}},[_vm._ssrNode("О нас")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#catalog'),expression:"'#catalog'"}],staticClass:"navbar-item",attrs:{"href":"#"}},[_vm._ssrNode("Каталог услуг")]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"navbar-item is-hidden-mobile\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#contacts'),expression:"'#contacts'"}],staticClass:"button is-primary",attrs:{"href":"#"}},[_vm._ssrNode("<strong>Свяжитесь с нами</strong>")])])])],2)])],2)]):_vm._e()])}
var Headervue_type_template_id_a50f4180_staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=a50f4180&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/svg/logo.svg?vue&type=template&id=087ec69b&
var logovue_type_template_id_087ec69b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"version":"1.1","id":"logo_svg__Слой_1","xmlns":"http://www.w3.org/2000/svg","x":"0","y":"0","viewBox":"0 0 105 302","xml:space":"preserve"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".logo_svg__st0{fill:#5479f7}")]),_vm._ssrNode("<path d=\"M0 0h35v302H0zM70 0h35v302H70z\" class=\"logo_svg__st0\"></path>")],2)}
var logovue_type_template_id_087ec69b_staticRenderFns = []


// CONCATENATED MODULE: ./assets/svg/logo.svg?vue&type=template&id=087ec69b&

// CONCATENATED MODULE: ./assets/svg/logo.svg

var script = {}


/* normalize component */

var logo_component = Object(componentNormalizer["a" /* default */])(
  script,
  logovue_type_template_id_087ec69b_render,
  logovue_type_template_id_087ec69b_staticRenderFns,
  false,
  null,
  null,
  "2b82839b"
  
)

/* harmony default export */ var logo = (logo_component.exports);
// EXTERNAL MODULE: external "vue-typed-js"
var external_vue_typed_js_ = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const Vuer = __webpack_require__(0);

const VueScrollTo = __webpack_require__(135);

external_vue_default.a.use(VueScrollTo);
external_vue_default.a.use(external_vue_typed_js_["VueTypedJs"]);
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    Logo: logo,
    VueTypedJs: external_vue_typed_js_["VueTypedJs"]
  },
  computed: { ...Object(external_vuex_["mapState"])({
      modal: "modal"
    })
  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_a50f4180_render,
  Headervue_type_template_id_a50f4180_staticRenderFns,
  false,
  Header_injectStyles,
  null,
  "8132a906"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=template&id=6680eec4&
var Titlevue_type_template_id_6680eec4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.wrap},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('Bcg',{class:_vm.$style.bcg}),_vm._ssrNode(" <div><div"+(_vm._ssrClass(null,_vm.$style.dark))+"></div></div> <div"+(_vm._ssrClass(null,_vm.$style.textWrap))+"><div"+(_vm._ssrClass(null,_vm.$style.title))+">Сломался компьютер? Звоните мне!</div> <div"+(_vm._ssrClass("is-hidden-mobile",_vm.$style.desc))+">\n          Отношение с техникой иногда заходят в тупик, если ваш гаджет перестал\n          работать или возникли сложности с установкой приборов/программ я\n          помогу вам решить проблему! Я занимаюсь ремонтом стационарных\n          компьютеров, мобильных устройств и установкой/настройкой различной.\n        </div> <div"+(_vm._ssrClass(null,_vm.$style.desc))+" style=\"margin-top: 10px; font-weight: bold\"><p>Если вы не нашли нужную вам информацию - позвоните мне! :)</p><br> <a href=\"tel:+79251249327\""+(_vm._ssrClass(null,_vm.$style.nmbr))+">+7 (977) 177-95-41\n</a></div> <div"+(_vm._ssrClass(null,_vm.$style.clear))+"></div></div>")],2)])}
var Titlevue_type_template_id_6680eec4_staticRenderFns = []


// CONCATENATED MODULE: ./components/Title.vue?vue&type=template&id=6680eec4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/svg/bcg.svg?vue&type=template&id=2f69be30&
var bcgvue_type_template_id_2f69be30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 630.27 537.18"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".bcg_svg__st377{opacity:.31;fill:#3570df}")]),_vm._ssrNode("<g id=\"bcg_svg__Illustration\">","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_1_","gradientUnits":"userSpaceOnUse","x1":"689.331","y1":"245.139","x2":"318.792","y2":"121.627","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M571.31 233.26c13.58 9.37 23.2 18.34 27.22 25.14l-19.11 10.95c-11.76-2.37-27.22-7.99-43.35-15.9l35.24-20.19z\" fill=\"url(#bcg_svg__SVGID_1_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_2_","gradientUnits":"userSpaceOnUse","x1":"697.341","y1":"221.11","x2":"326.798","y2":"97.597","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M410.88 180.65c-13.58-9.37-23.2-18.34-27.22-25.14l-.01-17.2c11.76 2.37 46.33 14.24 62.46 22.15l-35.23 20.19z\" fill=\"url(#bcg_svg__SVGID_2_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_3_","gradientUnits":"userSpaceOnUse","x1":"670.86","y1":"300.548","x2":"300.323","y2":"177.036","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M445.32 253.34c-16.26 7.86-31.82 13.44-43.62 15.78l-18.92-11c4.14-6.8 13.91-15.74 27.65-25.07l34.89 20.29z\" fill=\"url(#bcg_svg__SVGID_3_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_4_","gradientUnits":"userSpaceOnUse","x1":"717.822","y1":"159.649","x2":"347.286","y2":"36.137","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M536.87 160.57c16.26-7.86 50.74-19.64 62.54-21.98l.01 17.2c-4.14 6.8-13.91 15.74-27.65 25.07l-34.9-20.29z\" fill=\"url(#bcg_svg__SVGID_4_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_5_","gradientUnits":"userSpaceOnUse","x1":"674.43","y1":"289.852","x2":"303.887","y2":"166.338","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M515.45 258.35c-1.9 12.19-6.1 22.47-11.6 28.94l-26.89-.04c-5.39-6.48-9.41-16.78-11.1-28.97l49.59.07z\" fill=\"url(#bcg_svg__SVGID_5_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_6_","gradientUnits":"userSpaceOnUse","x1":"712.293","y1":"176.249","x2":"341.751","y2":"52.735","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M466.74 155.56c1.9-12.19 6.1-22.47 11.6-28.94l26.89.04c5.39 6.48 9.41 16.78 11.1 28.97l-49.59-.07z\" fill=\"url(#bcg_svg__SVGID_6_)\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_7_","gradientUnits":"userSpaceOnUse","x1":"681.734","y1":"267.945","x2":"311.19","y2":"144.431","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M402 221.15c-21.1-1.06-38.9-3.46-50.09-6.62l-.01-17.2c11.24-3.13 29.22-3.8 50.34-4.81l-.24 28.63z\" fill=\"url(#bcg_svg__SVGID_7_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_8_","gradientUnits":"userSpaceOnUse","x1":"705.233","y1":"197.435","x2":"334.689","y2":"73.92","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#21126d"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M580.18 192.76c21.1 1.06 38.77 1.78 49.95 4.94l.01 17.2c-11.24 3.13-29.08 5.48-50.2 6.49l.24-28.63z\" fill=\"url(#bcg_svg__SVGID_8_)\"></path>")],2),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_9_","gradientUnits":"userSpaceOnUse","x1":"693.234","y1":"233.427","x2":"322.694","y2":"109.915","gradientTransform":"rotate(2.098 -1304.365 2070.594)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#190f4a"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#361bc5"}})],1),_vm._ssrNode("<path d=\"M573.75 163.01c-44.59-25.93-116.82-26.74-161.33-1.81s-44.46 66.15.13 92.08 116.82 26.74 161.33 1.81c44.51-24.92 44.45-66.15-.13-92.08zm-28.17 15.78c29.01 16.87 29.04 43.69.08 59.9-28.96 16.22-75.95 15.69-104.96-1.18-29.01-16.87-29.04-43.69-.08-59.9 28.97-16.22 75.96-15.69 104.96 1.18z\" fill=\"url(#bcg_svg__SVGID_9_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_10_","gradientUnits":"userSpaceOnUse","x1":"1193.939","y1":"1481.984","x2":"967.026","y2":"1242.831","gradientTransform":"scale(1 -1) rotate(59.822 2044.636 95.84)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#3a1ba5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4b4af3"}})],1),_vm._ssrNode("<path d=\"M599.4 138.59l-18.92-11c-7.63 1.51-16.84 4.39-26.78 8.35-12.32-4.78-25.94-7.99-40-9.63-2.08-6.86-4.99-12.66-8.47-16.85l-26.89-.04c-3.56 4.18-6.56 9.97-8.76 16.83-14.09 1.6-27.76 4.78-40.17 9.53-9.88-3.99-19.04-6.89-26.64-8.42l-19.11 10.95c2.6 4.4 7.55 9.71 14.39 15.44-8.31 7.13-13.91 14.99-16.79 23.11-11.9 1.22-21.94 2.92-29.21 4.94l-.13 15.53c7.24 2.04 17.25 3.77 29.13 5.02 2.74 8.13 8.21 16.01 16.39 23.16-6.94 5.71-11.98 11.01-14.66 15.4l18.92 11c7.63-1.51 16.84-4.39 26.78-8.35 12.32 4.78 25.94 7.99 40 9.63 2.08 6.86 4.99 12.66 8.47 16.85l26.89.04c3.56-4.18 6.56-9.97 8.76-16.83 14.09-1.6 27.76-4.78 40.17-9.53 9.88 3.99 19.04 6.89 26.64 8.42l19.11-10.95c-2.6-4.4-7.55-9.71-14.39-15.44 8.31-7.13 13.91-14.99 16.79-23.11 11.9-1.22 21.94-2.92 29.21-4.94l.13-15.53c-7.24-2.04-17.25-3.77-29.13-5.02-2.74-8.13-8.21-16.01-16.39-23.16 6.94-5.71 11.99-11 14.66-15.4zm-56.48 21.45c28.35 16.48 28.12 43.15-.51 59.56-28.63 16.41-74.82 16.35-103.16-.14-28.35-16.48-28.12-43.15.51-59.56 28.63-16.4 74.82-16.34 103.16.14z\" fill=\"url(#bcg_svg__SVGID_10_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_11_","gradientUnits":"userSpaceOnUse","x1":"1002.645","y1":"1120.364","x2":"1042.189","y2":"1457.906","gradientTransform":"scale(1 -1) rotate(59.822 2044.636 95.84)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#3a1ba5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4b4af3"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_11_)\" d=\"M579.42 269.35v-17.2l19.1-10.95.01 17.2z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_12_","gradientUnits":"userSpaceOnUse","x1":"1138.367","y1":"1490.69","x2":"984.896","y2":"1244.005","gradientTransform":"scale(1 -1) rotate(59.822 2044.636 95.84)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#422dc2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4f81ff"}})],1),_vm._ssrNode("<path d=\"M570.86 205.15l-1.63-.95c-4.03 6.94-10.72 13.11-19.87 18.35-32.46 18.6-85.01 18.54-117.14-.15-21.52-12.51-28.91-30.56-19.29-47.1 4.03-6.93 10.72-13.11 19.87-18.35 32.46-18.6 85.01-18.54 117.14.15 21.52 12.51 28.91 30.56 19.29 47.1l1.63.95zm0 0c9.81-16.87 3.18-36.21-19.97-49.67-32.71-19.02-85.99-19.09-119.02-.16-9.65 5.53-16.51 12.08-20.56 19.04-9.81 16.87-3.18 36.21 19.97 49.67 32.71 19.02 85.99 19.09 119.02.16 9.66-5.53 16.51-12.08 20.56-19.04z\" fill=\"url(#bcg_svg__SVGID_12_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_13_","gradientUnits":"userSpaceOnUse","x1":"885.643","y1":"1134.077","x2":"925.186","y2":"1471.612","gradientTransform":"scale(1 -1) rotate(59.822 2044.636 95.84)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#3a1ba5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4b4af3"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_13_)\" d=\"M401.7 269.12l-.01-17.2-18.92-11.01.01 17.21z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_14_","gradientUnits":"userSpaceOnUse","x1":"925.331","y1":"1129.424","x2":"964.875","y2":"1466.966","gradientTransform":"scale(1 -1) rotate(59.822 2044.636 95.84)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#3a1ba5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4b4af3"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_14_)\" d=\"M503.85 287.29v-17.2l-26.9-.04.01 17.2z\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_15_","gradientUnits":"userSpaceOnUse","x1":"1127.914","y1":"128.228","x2":"1192.474","y2":"588.217","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path d=\"M282.52 82.14l3.77-1.87c1.29-.74 2.87-.74 4.16 0l190.94 110.24c3.23 1.86 5.22 5.31 5.22 9.04v164.7c0 .87-.46 1.67-1.21 2.1-.11.06-.22.11-.33.15l-3.54 1.76-.73-3.18-193.95-111.96a5.292 5.292 0 01-2.65-4.58V83.88c0-.42.07-.84.19-1.23l-1.87-.51z\" fill=\"url(#bcg_svg__SVGID_15_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_16_","gradientUnits":"userSpaceOnUse","x1":"1120.295","y1":"141.571","x2":"1207.622","y2":"444.02","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#cd2eb9"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#2b0d99"}})],1),_vm._ssrNode("<path d=\"M280.04 249.91a5.28 5.28 0 002.65 4.58L478.8 367.72c.75.43 1.67.43 2.42 0s1.21-1.23 1.21-2.1V201.6c0-3.73-1.99-7.18-5.22-9.04L286.28 82.32a4.175 4.175 0 00-4.16 0 4.153 4.153 0 00-2.08 3.6v163.99z\" fill=\"url(#bcg_svg__SVGID_16_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_17_","gradientUnits":"userSpaceOnUse","x1":"1116.533","y1":"152.421","x2":"1212.322","y2":"402.463","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c93bde"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4615a5"}})],1),_vm._ssrNode("<path d=\"M284.2 83.11c.49 0 .98.13 1.4.38l190.94 110.24a9.113 9.113 0 014.54 7.87v164.02c0 .38-.21.74-.54.93a1.114 1.114 0 01-1.08 0l-196.1-113.23a3.943 3.943 0 01-1.97-3.42V85.92a2.814 2.814 0 012.81-2.81zm0-1.35c-.72 0-1.44.19-2.08.56a4.153 4.153 0 00-2.08 3.6v163.99a5.28 5.28 0 002.65 4.58L478.8 367.72c.38.22.79.32 1.21.32.42 0 .84-.11 1.21-.32.75-.43 1.21-1.23 1.21-2.1V201.6c0-3.73-1.99-7.18-5.22-9.04L286.28 82.32c-.64-.37-1.36-.56-2.08-.56z\" fill=\"url(#bcg_svg__SVGID_17_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_18_","gradientUnits":"userSpaceOnUse","x1":"1121.313","y1":"246.097","x2":"1321.357","y2":"467.492","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path d=\"M151.18 317.61l9.01 2.98 118.06-68.16c.89-.52 2.25-.57 3.02-.13l191.75 110.71.56-1.33 8.8-1.62-.01 7.75c0 1.58-1.63 2.58-2.13 2.87L355.32 442.8c-.89.52-2.25.57-3.02.13L152.82 327.76c-.38-.22-1.64-1.03-1.64-1.8v-8.35z\" fill=\"url(#bcg_svg__SVGID_18_)\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg___x3C_Path_x3E__1_","gradientUnits":"userSpaceOnUse","x1":"1158.813","y1":"300.087","x2":"1359.836","y2":"455.239","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#cd2eb9"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#2b0d99"}})],1),_vm._ssrNode("<path id=\"bcg_svg___x3C_Path_x3E__18_\" d=\"M151.69 318.34l200.6 115.82c.77.45 2.13.39 3.02-.13l126.33-72.94c.89-.52.99-1.3.22-1.75l-200.6-115.82c-.77-.45-2.13-.39-3.02.13L151.91 316.6c-.89.51-.99 1.29-.22 1.74z\" fill=\"url(#bcg_svg___x3C_Path_x3E__1_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg___x3C_Path_x3E__2_","gradientUnits":"userSpaceOnUse","x1":"1174.671","y1":"317.913","x2":"1354.108","y2":"435.289","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c93bde"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4615a5"}})],1),_vm._ssrNode("<path id=\"bcg_svg___x3C_Path_x3E__17_\" d=\"M469.57 362.06L276.58 250.63c-.52-.3-1.42-.26-2.02.08l-70.23 40.55c-.6.34-.66.87-.14 1.16l192.99 111.42c.52.3 1.42.26 2.02-.08l70.23-40.55c.59-.33.66-.86.14-1.15z\" fill=\"url(#bcg_svg___x3C_Path_x3E__2_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_19_","gradientUnits":"userSpaceOnUse","x1":"1074.379","y1":"406.901","x2":"1334.315","y2":"345.29","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path d=\"M383.1 383.27c.55-.32 1.45-.32 2.01 0L398.5 391l3.34 1.93 5.36 3.09c.56.32.56.84.01 1.16l-8.18 4.72c-.55.32-1.45.32-2.01 0l-5.36-3.09-3.34-1.93-13.39-7.73c-.56-.32-.56-.84-.01-1.16l8.18-4.72z\" fill=\"url(#bcg_svg__SVGID_19_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_2_","gradientUnits":"userSpaceOnUse","x1":"1072.845","y1":"400.429","x2":"1332.78","y2":"338.818","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_498_\" d=\"M361.46 381.38l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_2_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_3_","gradientUnits":"userSpaceOnUse","x1":"1071.72","y1":"395.683","x2":"1331.656","y2":"334.072","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_497_\" d=\"M345.39 372.11l11.52 6.65c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-11.52-6.65c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_3_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_4_","gradientUnits":"userSpaceOnUse","x1":"1064.297","y1":"364.368","x2":"1324.233","y2":"302.757","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_496_\" d=\"M248.21 316l11.52 6.65c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-11.52-6.65c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_4_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_5_","gradientUnits":"userSpaceOnUse","x1":"1068.017","y1":"380.062","x2":"1327.953","y2":"318.45","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_495_\" d=\"M264.5 325.4l76.34 44.08c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-76.34-44.08c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_5_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_20_","gradientUnits":"userSpaceOnUse","x1":"1061.629","y1":"353.111","x2":"1321.565","y2":"291.5","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path d=\"M216.17 286.89c.55-.32 1.45-.32 2.01 0l7.38 4.26 1.32.76 13.39 7.73c.56.32.56.84.01 1.16l-8.18 4.72c-.55.32-1.45.32-2.01 0l-13.39-7.73-1.32-.76-7.38-4.26c-.56-.32-.56-.84-.01-1.16l8.18-4.72z\" fill=\"url(#bcg_svg__SVGID_20_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_6_","gradientUnits":"userSpaceOnUse","x1":"1063.163","y1":"359.583","x2":"1323.099","y2":"297.972","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_494_\" d=\"M234.7 308.2l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_6_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_7_","gradientUnits":"userSpaceOnUse","x1":"1071.95","y1":"396.652","x2":"1331.885","y2":"335.041","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_493_\" d=\"M384.91 380.22l24.91 14.38c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-24.91-14.38c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_7_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_8_","gradientUnits":"userSpaceOnUse","x1":"1070.313","y1":"389.749","x2":"1330.249","y2":"328.138","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_492_\" d=\"M371.52 372.49l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_8_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_9_","gradientUnits":"userSpaceOnUse","x1":"1069.29","y1":"385.434","x2":"1329.226","y2":"323.823","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_491_\" d=\"M358.13 364.76l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_9_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_10_","gradientUnits":"userSpaceOnUse","x1":"1068.268","y1":"381.12","x2":"1328.204","y2":"319.509","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_490_\" d=\"M344.73 357.02l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_10_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_11_","gradientUnits":"userSpaceOnUse","x1":"1067.245","y1":"376.805","x2":"1327.181","y2":"315.194","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_489_\" d=\"M331.34 349.29l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_11_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_12_","gradientUnits":"userSpaceOnUse","x1":"1066.223","y1":"372.49","x2":"1326.158","y2":"310.879","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_488_\" d=\"M317.95 341.56l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_12_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_13_","gradientUnits":"userSpaceOnUse","x1":"1065.2","y1":"368.175","x2":"1325.135","y2":"306.564","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_487_\" d=\"M304.56 333.83l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_13_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_14_","gradientUnits":"userSpaceOnUse","x1":"1064.177","y1":"363.861","x2":"1324.112","y2":"302.25","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_486_\" d=\"M291.17 326.1l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_14_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_15_","gradientUnits":"userSpaceOnUse","x1":"1063.154","y1":"359.546","x2":"1323.09","y2":"297.935","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_485_\" d=\"M277.78 318.37l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_15_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_16_","gradientUnits":"userSpaceOnUse","x1":"1062.131","y1":"355.231","x2":"1322.067","y2":"293.62","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_484_\" d=\"M264.39 310.64l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_16_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_17_","gradientUnits":"userSpaceOnUse","x1":"1061.11","y1":"350.916","x2":"1321.045","y2":"289.305","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_483_\" d=\"M251 302.91l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_17_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_18_","gradientUnits":"userSpaceOnUse","x1":"1059.438","y1":"343.869","x2":"1319.374","y2":"282.258","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_482_\" d=\"M220.65 285.38l25.8 14.9c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-25.8-14.9c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_18_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_19_","gradientUnits":"userSpaceOnUse","x1":"1069.861","y1":"387.842","x2":"1329.797","y2":"326.231","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_481_\" d=\"M403.89 376.47l18.66 10.77c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-18.66-10.77c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_19_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_20_","gradientUnits":"userSpaceOnUse","x1":"1068.464","y1":"381.945","x2":"1328.399","y2":"320.334","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_480_\" d=\"M390.5 368.74l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_20_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_21_","gradientUnits":"userSpaceOnUse","x1":"1067.441","y1":"377.63","x2":"1327.376","y2":"316.02","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_479_\" d=\"M377.11 361.01l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_21_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_22_","gradientUnits":"userSpaceOnUse","x1":"1066.418","y1":"373.316","x2":"1326.353","y2":"311.705","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_478_\" d=\"M363.72 353.28l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_22_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_23_","gradientUnits":"userSpaceOnUse","x1":"1065.395","y1":"369.001","x2":"1325.331","y2":"307.39","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_477_\" d=\"M350.33 345.55l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_23_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_24_","gradientUnits":"userSpaceOnUse","x1":"1064.373","y1":"364.686","x2":"1324.308","y2":"303.075","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_476_\" d=\"M336.93 337.82l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_24_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_25_","gradientUnits":"userSpaceOnUse","x1":"1063.35","y1":"360.372","x2":"1323.285","y2":"298.761","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_475_\" d=\"M323.54 330.09l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_25_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_26_","gradientUnits":"userSpaceOnUse","x1":"1062.327","y1":"356.057","x2":"1322.263","y2":"294.446","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_474_\" d=\"M310.15 322.36l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_26_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_27_","gradientUnits":"userSpaceOnUse","x1":"1061.305","y1":"351.742","x2":"1321.24","y2":"290.131","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_473_\" d=\"M296.76 314.63l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_27_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_28_","gradientUnits":"userSpaceOnUse","x1":"1060.282","y1":"347.428","x2":"1320.217","y2":"285.817","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_472_\" d=\"M283.37 306.9l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_28_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_29_","gradientUnits":"userSpaceOnUse","x1":"1059.26","y1":"343.113","x2":"1319.195","y2":"281.502","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_471_\" d=\"M269.98 299.16l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_29_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_30_","gradientUnits":"userSpaceOnUse","x1":"1056.839","y1":"332.901","x2":"1316.775","y2":"271.29","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_470_\" d=\"M233.38 278.03l18.66 10.77c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-18.66-10.77c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_30_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_31_","gradientUnits":"userSpaceOnUse","x1":"1058.236","y1":"338.798","x2":"1318.172","y2":"277.187","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_469_\" d=\"M256.59 291.43l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_31_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_32_","gradientUnits":"userSpaceOnUse","x1":"1067.671","y1":"378.6","x2":"1327.607","y2":"316.989","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_468_\" d=\"M420.19 371.18l15.09 8.71c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-15.09-8.71c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_32_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_33_","gradientUnits":"userSpaceOnUse","x1":"1066.409","y1":"373.279","x2":"1326.345","y2":"311.668","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_467_\" d=\"M406.8 363.45l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_33_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_34_","gradientUnits":"userSpaceOnUse","x1":"1065.387","y1":"368.964","x2":"1325.322","y2":"307.353","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_466_\" d=\"M393.41 355.72l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_34_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_35_","gradientUnits":"userSpaceOnUse","x1":"1064.364","y1":"364.649","x2":"1324.299","y2":"303.038","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_465_\" d=\"M380.02 347.99l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_35_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_36_","gradientUnits":"userSpaceOnUse","x1":"1063.341","y1":"360.334","x2":"1323.277","y2":"298.724","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_464_\" d=\"M366.63 340.26l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_36_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_37_","gradientUnits":"userSpaceOnUse","x1":"1062.318","y1":"356.02","x2":"1322.254","y2":"294.409","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_463_\" d=\"M353.24 332.53l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_37_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_38_","gradientUnits":"userSpaceOnUse","x1":"1061.296","y1":"351.705","x2":"1321.231","y2":"290.094","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_462_\" d=\"M339.85 324.8l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_38_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_39_","gradientUnits":"userSpaceOnUse","x1":"1060.273","y1":"347.39","x2":"1320.209","y2":"285.779","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_461_\" d=\"M326.46 317.07l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_39_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_40_","gradientUnits":"userSpaceOnUse","x1":"1059.25","y1":"343.076","x2":"1319.186","y2":"281.465","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_460_\" d=\"M313.07 309.34l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_40_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_41_","gradientUnits":"userSpaceOnUse","x1":"1058.228","y1":"338.761","x2":"1318.163","y2":"277.15","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_459_\" d=\"M299.68 301.61l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_41_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_42_","gradientUnits":"userSpaceOnUse","x1":"1057.205","y1":"334.446","x2":"1317.141","y2":"272.835","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_458_\" d=\"M286.29 293.87l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.35-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_42_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_43_","gradientUnits":"userSpaceOnUse","x1":"1055.161","y1":"325.817","x2":"1315.096","y2":"264.206","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_457_\" d=\"M259.5 278.41l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_43_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_44_","gradientUnits":"userSpaceOnUse","x1":"1054.137","y1":"321.502","x2":"1314.072","y2":"259.891","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_456_\" d=\"M246.11 270.68l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_44_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_45_","gradientUnits":"userSpaceOnUse","x1":"1056.182","y1":"330.132","x2":"1316.118","y2":"268.521","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_455_\" d=\"M272.9 286.14l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_45_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_46_","gradientUnits":"userSpaceOnUse","x1":"1065.582","y1":"369.79","x2":"1325.518","y2":"308.179","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_454_\" d=\"M439.17 367.44l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_46_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_47_","gradientUnits":"userSpaceOnUse","x1":"1064.56","y1":"365.475","x2":"1324.495","y2":"303.864","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_453_\" d=\"M425.78 359.71l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_47_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_48_","gradientUnits":"userSpaceOnUse","x1":"1063.537","y1":"361.16","x2":"1323.473","y2":"299.549","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_452_\" d=\"M412.39 351.98l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_48_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_49_","gradientUnits":"userSpaceOnUse","x1":"1062.514","y1":"356.846","x2":"1322.449","y2":"295.235","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_451_\" d=\"M399 344.25l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_49_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_50_","gradientUnits":"userSpaceOnUse","x1":"1061.492","y1":"352.531","x2":"1321.427","y2":"290.92","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_450_\" d=\"M385.61 336.52l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_50_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_51_","gradientUnits":"userSpaceOnUse","x1":"1060.469","y1":"348.216","x2":"1320.404","y2":"286.605","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_449_\" d=\"M372.22 328.79l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_51_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_52_","gradientUnits":"userSpaceOnUse","x1":"1059.446","y1":"343.901","x2":"1319.382","y2":"282.29","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_448_\" d=\"M358.83 321.06l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_52_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_53_","gradientUnits":"userSpaceOnUse","x1":"1058.424","y1":"339.587","x2":"1318.359","y2":"277.976","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_447_\" d=\"M345.44 313.32l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_53_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_54_","gradientUnits":"userSpaceOnUse","x1":"1057.401","y1":"335.272","x2":"1317.336","y2":"273.661","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_446_\" d=\"M332.05 305.59l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_54_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_55_","gradientUnits":"userSpaceOnUse","x1":"1056.378","y1":"330.957","x2":"1316.314","y2":"269.346","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_445_\" d=\"M318.66 297.86l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_55_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_56_","gradientUnits":"userSpaceOnUse","x1":"1055.355","y1":"326.642","x2":"1315.291","y2":"265.032","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_444_\" d=\"M305.27 290.13l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_56_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_57_","gradientUnits":"userSpaceOnUse","x1":"1054.333","y1":"322.328","x2":"1314.268","y2":"260.717","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_443_\" d=\"M291.88 282.4l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_57_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_58_","gradientUnits":"userSpaceOnUse","x1":"1053.311","y1":"318.013","x2":"1313.245","y2":"256.402","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_442_\" d=\"M278.49 274.67l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_58_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_59_","gradientUnits":"userSpaceOnUse","x1":"1052.049","y1":"312.692","x2":"1311.985","y2":"251.081","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_441_\" d=\"M258.85 263.33l15.09 8.71c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-15.09-8.71c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_59_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_60_","gradientUnits":"userSpaceOnUse","x1":"1063.667","y1":"361.71","x2":"1323.604","y2":"300.099","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_440_\" d=\"M450.5 359.28l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_60_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_61_","gradientUnits":"userSpaceOnUse","x1":"1062.528","y1":"356.906","x2":"1322.465","y2":"295.294","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_439_\" d=\"M435.59 350.67l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_61_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_62_","gradientUnits":"userSpaceOnUse","x1":"1061.39","y1":"352.101","x2":"1321.326","y2":"290.49","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_438_\" d=\"M420.68 342.06l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.35-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_62_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_63_","gradientUnits":"userSpaceOnUse","x1":"1060.251","y1":"347.297","x2":"1320.187","y2":"285.686","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_437_\" d=\"M405.77 333.46l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_63_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_64_","gradientUnits":"userSpaceOnUse","x1":"1059.112","y1":"342.492","x2":"1319.048","y2":"280.881","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_436_\" d=\"M390.86 324.85l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_64_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_65_","gradientUnits":"userSpaceOnUse","x1":"1057.973","y1":"337.688","x2":"1317.91","y2":"276.077","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_435_\" d=\"M375.95 316.24l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_65_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_66_","gradientUnits":"userSpaceOnUse","x1":"1056.835","y1":"332.884","x2":"1316.771","y2":"271.272","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_434_\" d=\"M361.04 307.63l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_66_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_67_","gradientUnits":"userSpaceOnUse","x1":"1055.696","y1":"328.079","x2":"1315.632","y2":"266.468","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_433_\" d=\"M346.13 299.02l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_67_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_68_","gradientUnits":"userSpaceOnUse","x1":"1054.557","y1":"323.275","x2":"1314.493","y2":"261.663","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_432_\" d=\"M331.22 290.41l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_68_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_69_","gradientUnits":"userSpaceOnUse","x1":"1053.418","y1":"318.47","x2":"1313.355","y2":"256.859","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_431_\" d=\"M316.31 281.81l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_69_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_70_","gradientUnits":"userSpaceOnUse","x1":"1052.279","y1":"313.666","x2":"1312.216","y2":"252.055","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_430_\" d=\"M301.4 273.2l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_70_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_71_","gradientUnits":"userSpaceOnUse","x1":"1051.14","y1":"308.862","x2":"1311.076","y2":"247.25","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_429_\" d=\"M286.49 264.59l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_71_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_72_","gradientUnits":"userSpaceOnUse","x1":"1050.002","y1":"304.057","x2":"1309.939","y2":"242.446","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_428_\" d=\"M271.58 255.98l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_72_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_21_","gradientUnits":"userSpaceOnUse","x1":"1063.584","y1":"361.362","x2":"1323.504","y2":"299.755","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_21_)\" d=\"M466.19 361.83v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_22_","gradientUnits":"userSpaceOnUse","x1":"1064.981","y1":"367.25","x2":"1324.9","y2":"305.643","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_22_)\" d=\"M458.55 366.24v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_23_","gradientUnits":"userSpaceOnUse","x1":"1062.445","y1":"356.555","x2":"1322.398","y2":"294.94","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_23_)\" d=\"M451.28 353.22v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_24_","gradientUnits":"userSpaceOnUse","x1":"1063.959","y1":"362.949","x2":"1323.923","y2":"301.332","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_24_)\" d=\"M445.16 358.52v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_25_","gradientUnits":"userSpaceOnUse","x1":"1061.304","y1":"351.752","x2":"1321.267","y2":"290.134","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_25_)\" d=\"M436.37 344.61v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_26_","gradientUnits":"userSpaceOnUse","x1":"1062.942","y1":"358.637","x2":"1322.851","y2":"297.032","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_26_)\" d=\"M431.77 350.79v.95l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_27_","gradientUnits":"userSpaceOnUse","x1":"1060.159","y1":"346.931","x2":"1320.123","y2":"285.313","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_27_)\" d=\"M421.46 335.99v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_28_","gradientUnits":"userSpaceOnUse","x1":"1061.921","y1":"354.327","x2":"1321.84","y2":"292.72","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_28_)\" d=\"M418.38 343.07v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_29_","gradientUnits":"userSpaceOnUse","x1":"1059.02","y1":"342.133","x2":"1318.984","y2":"280.515","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_29_)\" d=\"M406.55 327.38v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_30_","gradientUnits":"userSpaceOnUse","x1":"1060.902","y1":"350.025","x2":"1320.821","y2":"288.418","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_30_)\" d=\"M404.99 335.35v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_31_","gradientUnits":"userSpaceOnUse","x1":"1057.881","y1":"337.335","x2":"1317.845","y2":"275.717","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_31_)\" d=\"M391.64 318.78v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_32_","gradientUnits":"userSpaceOnUse","x1":"1059.855","y1":"345.676","x2":"1319.83","y2":"284.056","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_32_)\" d=\"M391.6 327.58v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_33_","gradientUnits":"userSpaceOnUse","x1":"1056.743","y1":"332.542","x2":"1316.707","y2":"270.925","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_33_)\" d=\"M376.73 310.18v.95l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_34_","gradientUnits":"userSpaceOnUse","x1":"1058.851","y1":"341.366","x2":"1318.77","y2":"279.759","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_34_)\" d=\"M378.2 319.86v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_35_","gradientUnits":"userSpaceOnUse","x1":"1055.61","y1":"327.77","x2":"1315.574","y2":"266.152","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_35_)\" d=\"M361.82 301.61v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_36_","gradientUnits":"userSpaceOnUse","x1":"1057.811","y1":"337.05","x2":"1317.774","y2":"275.432","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_36_)\" d=\"M364.81 312.12v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_37_","gradientUnits":"userSpaceOnUse","x1":"1054.469","y1":"322.964","x2":"1314.433","y2":"261.346","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_37_)\" d=\"M346.91 293v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_38_","gradientUnits":"userSpaceOnUse","x1":"1056.793","y1":"332.765","x2":"1316.757","y2":"271.147","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_38_)\" d=\"M351.42 304.42v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_39_","gradientUnits":"userSpaceOnUse","x1":"1055.782","y1":"328.403","x2":"1315.701","y2":"266.796","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_39_)\" d=\"M338.03 296.65v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_40_","gradientUnits":"userSpaceOnUse","x1":"1054.731","y1":"324.104","x2":"1314.705","y2":"262.483","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_40_)\" d=\"M324.64 288.92v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_41_","gradientUnits":"userSpaceOnUse","x1":"1053.316","y1":"318.108","x2":"1313.28","y2":"256.49","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_41_)\" d=\"M331.99 284.34v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_42_","gradientUnits":"userSpaceOnUse","x1":"1053.742","y1":"319.786","x2":"1313.66","y2":"258.179","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_42_)\" d=\"M311.25 281.2v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_43_","gradientUnits":"userSpaceOnUse","x1":"1052.183","y1":"313.334","x2":"1312.147","y2":"251.717","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_43_)\" d=\"M317.08 275.76v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_44_","gradientUnits":"userSpaceOnUse","x1":"1052.717","y1":"315.461","x2":"1312.636","y2":"253.854","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_44_)\" d=\"M297.86 273.46v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_45_","gradientUnits":"userSpaceOnUse","x1":"1051.039","y1":"308.515","x2":"1311.003","y2":"246.898","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_45_)\" d=\"M302.17 267.14v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_46_","gradientUnits":"userSpaceOnUse","x1":"1051.666","y1":"311.169","x2":"1311.63","y2":"249.551","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_46_)\" d=\"M284.47 265.74v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_47_","gradientUnits":"userSpaceOnUse","x1":"1053.55","y1":"318.964","x2":"1313.469","y2":"257.357","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_47_)\" d=\"M265.49 269.48v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_48_","gradientUnits":"userSpaceOnUse","x1":"1054.542","y1":"323.268","x2":"1314.495","y2":"261.653","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_48_)\" d=\"M278.88 277.2v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_49_","gradientUnits":"userSpaceOnUse","x1":"1055.598","y1":"327.615","x2":"1315.517","y2":"266.008","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_49_)\" d=\"M292.27 284.97v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_50_","gradientUnits":"userSpaceOnUse","x1":"1056.586","y1":"331.911","x2":"1316.549","y2":"270.293","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_50_)\" d=\"M305.66 292.67v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_51_","gradientUnits":"userSpaceOnUse","x1":"1057.613","y1":"336.24","x2":"1317.577","y2":"274.623","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_51_)\" d=\"M319.05 300.42v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_52_","gradientUnits":"userSpaceOnUse","x1":"1058.658","y1":"340.536","x2":"1318.577","y2":"278.929","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_52_)\" d=\"M332.44 308.14v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_53_","gradientUnits":"userSpaceOnUse","x1":"1059.662","y1":"344.868","x2":"1319.625","y2":"283.25","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_53_)\" d=\"M345.83 315.88v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_54_","gradientUnits":"userSpaceOnUse","x1":"1060.699","y1":"349.176","x2":"1320.629","y2":"287.567","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_54_)\" d=\"M359.22 323.61v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_55_","gradientUnits":"userSpaceOnUse","x1":"1061.721","y1":"353.471","x2":"1321.64","y2":"291.864","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_55_)\" d=\"M372.61 331.32v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_56_","gradientUnits":"userSpaceOnUse","x1":"1062.733","y1":"357.804","x2":"1322.697","y2":"296.187","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_56_)\" d=\"M386 339.07v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_57_","gradientUnits":"userSpaceOnUse","x1":"1063.757","y1":"362.131","x2":"1323.732","y2":"300.511","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_57_)\" d=\"M399.4 346.81v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_58_","gradientUnits":"userSpaceOnUse","x1":"1064.794","y1":"366.439","x2":"1324.702","y2":"304.834","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_58_)\" d=\"M412.79 354.54v.94l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_59_","gradientUnits":"userSpaceOnUse","x1":"1065.812","y1":"370.748","x2":"1325.731","y2":"309.141","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_59_)\" d=\"M426.18 362.26v.94l-.5-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_60_","gradientUnits":"userSpaceOnUse","x1":"1056.617","y1":"331.904","x2":"1316.536","y2":"270.297","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_60_)\" d=\"M262.58 282.46v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_61_","gradientUnits":"userSpaceOnUse","x1":"1057.614","y1":"336.265","x2":"1317.578","y2":"274.647","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_61_)\" d=\"M275.97 290.23v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_62_","gradientUnits":"userSpaceOnUse","x1":"1058.67","y1":"340.544","x2":"1318.579","y2":"278.94","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_62_)\" d=\"M289.36 297.93v.95l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_63_","gradientUnits":"userSpaceOnUse","x1":"1059.689","y1":"344.877","x2":"1319.608","y2":"283.269","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_63_)\" d=\"M302.75 305.68v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_64_","gradientUnits":"userSpaceOnUse","x1":"1060.688","y1":"349.183","x2":"1320.641","y2":"287.568","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_64_)\" d=\"M316.14 313.4v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_65_","gradientUnits":"userSpaceOnUse","x1":"1061.703","y1":"353.512","x2":"1321.677","y2":"291.892","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_65_)\" d=\"M329.53 321.14v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_66_","gradientUnits":"userSpaceOnUse","x1":"1062.753","y1":"357.817","x2":"1322.672","y2":"296.21","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_66_)\" d=\"M342.92 328.87v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_67_","gradientUnits":"userSpaceOnUse","x1":"1063.756","y1":"362.116","x2":"1323.709","y2":"300.501","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_67_)\" d=\"M356.31 336.58v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_68_","gradientUnits":"userSpaceOnUse","x1":"1064.78","y1":"366.447","x2":"1324.743","y2":"304.829","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_68_)\" d=\"M369.7 344.33v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_69_","gradientUnits":"userSpaceOnUse","x1":"1065.82","y1":"370.77","x2":"1325.739","y2":"309.163","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_69_)\" d=\"M383.09 352.07v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_70_","gradientUnits":"userSpaceOnUse","x1":"1066.841","y1":"375.081","x2":"1326.76","y2":"313.474","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_70_)\" d=\"M396.48 359.8v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_71_","gradientUnits":"userSpaceOnUse","x1":"1067.855","y1":"379.391","x2":"1327.808","y2":"317.776","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_71_)\" d=\"M409.87 367.52v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_72_","gradientUnits":"userSpaceOnUse","x1":"1061.552","y1":"352.762","x2":"1321.482","y2":"291.153","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_72_)\" d=\"M240.68 299.3v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_73_","gradientUnits":"userSpaceOnUse","x1":"1062.586","y1":"357.05","x2":"1322.495","y2":"295.446","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_73_)\" d=\"M254.07 307.01v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_74_","gradientUnits":"userSpaceOnUse","x1":"1063.821","y1":"362.269","x2":"1323.729","y2":"300.664","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_74_)\" d=\"M270.26 316.35v.95l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_75_","gradientUnits":"userSpaceOnUse","x1":"1059.505","y1":"344.091","x2":"1319.424","y2":"282.484","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_75_)\" d=\"M256.99 294.01v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_76_","gradientUnits":"userSpaceOnUse","x1":"1060.521","y1":"348.38","x2":"1320.44","y2":"286.772","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_76_)\" d=\"M270.37 301.71v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_77_","gradientUnits":"userSpaceOnUse","x1":"1061.554","y1":"352.708","x2":"1321.462","y2":"291.104","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_77_)\" d=\"M283.77 309.46v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_78_","gradientUnits":"userSpaceOnUse","x1":"1062.565","y1":"357.012","x2":"1322.484","y2":"295.405","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_78_)\" d=\"M297.16 317.18v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_79_","gradientUnits":"userSpaceOnUse","x1":"1063.563","y1":"361.345","x2":"1323.527","y2":"299.727","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_79_)\" d=\"M310.55 324.92v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_80_","gradientUnits":"userSpaceOnUse","x1":"1064.587","y1":"365.656","x2":"1324.551","y2":"304.039","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_80_)\" d=\"M323.94 332.65v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_81_","gradientUnits":"userSpaceOnUse","x1":"1065.628","y1":"369.947","x2":"1325.547","y2":"308.339","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_81_)\" d=\"M337.33 340.36v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_82_","gradientUnits":"userSpaceOnUse","x1":"1066.658","y1":"374.276","x2":"1326.566","y2":"312.671","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_82_)\" d=\"M350.72 348.1v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_83_","gradientUnits":"userSpaceOnUse","x1":"1067.662","y1":"378.607","x2":"1327.626","y2":"316.99","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_83_)\" d=\"M364.11 355.85v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_84_","gradientUnits":"userSpaceOnUse","x1":"1068.699","y1":"382.915","x2":"1328.618","y2":"321.308","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_84_)\" d=\"M377.5 363.58v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_85_","gradientUnits":"userSpaceOnUse","x1":"1069.708","y1":"387.226","x2":"1329.672","y2":"325.608","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_85_)\" d=\"M390.89 371.3v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_86_","gradientUnits":"userSpaceOnUse","x1":"1067.309","y1":"377.072","x2":"1327.228","y2":"315.465","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_86_)\" d=\"M445.82 373.59v.95l-.5-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_87_","gradientUnits":"userSpaceOnUse","x1":"1049.888","y1":"303.7","x2":"1309.862","y2":"242.08","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_87_)\" d=\"M287.26 258.51v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_88_","gradientUnits":"userSpaceOnUse","x1":"1069.999","y1":"388.394","x2":"1329.918","y2":"326.786","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_88_)\" d=\"M351.38 363.17v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_89_","gradientUnits":"userSpaceOnUse","x1":"1071.225","y1":"393.569","x2":"1331.144","y2":"331.962","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_89_)\" d=\"M367.45 372.44v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_90_","gradientUnits":"userSpaceOnUse","x1":"1072.236","y1":"397.896","x2":"1332.2","y2":"336.278","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_90_)\" d=\"M380.84 380.19v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_91_","gradientUnits":"userSpaceOnUse","x1":"1074.297","y1":"406.57","x2":"1334.25","y2":"344.955","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_91_)\" d=\"M407.62 395.7v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_92_","gradientUnits":"userSpaceOnUse","x1":"1069.633","y1":"386.891","x2":"1329.597","y2":"325.274","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_92_)\" d=\"M433.08 380.95v.94l-.49-.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_93_","gradientUnits":"userSpaceOnUse","x1":"1071.966","y1":"396.713","x2":"1331.885","y2":"335.106","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_93_)\" d=\"M420.35 388.3v.94l-.49-.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_94_","gradientUnits":"userSpaceOnUse","x1":"-6342.477","y1":"-3496.16","x2":"-6082.524","y2":"-3557.775","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_94_)\" d=\"M450.15 358.79v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_95_","gradientUnits":"userSpaceOnUse","x1":"-6341.335","y1":"-3491.346","x2":"-6081.472","y2":"-3552.94","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_95_)\" d=\"M435.24 350.18v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_96_","gradientUnits":"userSpaceOnUse","x1":"-6340.193","y1":"-3486.537","x2":"-6080.23","y2":"-3548.155","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_96_)\" d=\"M420.33 341.56v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_97_","gradientUnits":"userSpaceOnUse","x1":"-6339.068","y1":"-3481.742","x2":"-6079.205","y2":"-3543.336","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_97_)\" d=\"M405.42 332.97v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_98_","gradientUnits":"userSpaceOnUse","x1":"-6337.916","y1":"-3476.95","x2":"-6077.941","y2":"-3538.57","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_98_)\" d=\"M390.51 324.37v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_99_","gradientUnits":"userSpaceOnUse","x1":"-6336.792","y1":"-3472.119","x2":"-6076.907","y2":"-3533.718","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_99_)\" d=\"M375.6 315.74v-.95l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_100_","gradientUnits":"userSpaceOnUse","x1":"-6335.635","y1":"-3467.32","x2":"-6075.682","y2":"-3528.935","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_100_)\" d=\"M360.69 307.13v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_101_","gradientUnits":"userSpaceOnUse","x1":"-6334.527","y1":"-3462.501","x2":"-6074.663","y2":"-3524.095","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_101_)\" d=\"M345.78 298.51v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_102_","gradientUnits":"userSpaceOnUse","x1":"-6333.355","y1":"-3457.708","x2":"-6073.401","y2":"-3519.323","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_102_)\" d=\"M330.87 289.91v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_103_","gradientUnits":"userSpaceOnUse","x1":"-6332.257","y1":"-3452.884","x2":"-6072.393","y2":"-3514.478","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_103_)\" d=\"M315.96 281.29v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_104_","gradientUnits":"userSpaceOnUse","x1":"-6331.076","y1":"-3448.106","x2":"-6071.123","y2":"-3509.721","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_104_)\" d=\"M301.05 272.7v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_105_","gradientUnits":"userSpaceOnUse","x1":"-6329.985","y1":"-3443.291","x2":"-6070.111","y2":"-3504.887","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_105_)\" d=\"M286.14 264.09v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_106_","gradientUnits":"userSpaceOnUse","x1":"-6328.782","y1":"-3438.502","x2":"-6068.808","y2":"-3500.122","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_106_)\" d=\"M271.23 255.48v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_107_","gradientUnits":"userSpaceOnUse","x1":"-6344.906","y1":"-3506.411","x2":"-6084.986","y2":"-3568.018","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_107_)\" d=\"M438.82 366.94V366l.5.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_108_","gradientUnits":"userSpaceOnUse","x1":"-6343.886","y1":"-3502.104","x2":"-6083.967","y2":"-3563.711","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_108_)\" d=\"M425.43 359.21v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_109_","gradientUnits":"userSpaceOnUse","x1":"-6342.866","y1":"-3497.797","x2":"-6082.947","y2":"-3559.404","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_109_)\" d=\"M412.04 351.49v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_110_","gradientUnits":"userSpaceOnUse","x1":"-6341.838","y1":"-3493.486","x2":"-6081.874","y2":"-3555.103","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_110_)\" d=\"M398.65 343.76v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_111_","gradientUnits":"userSpaceOnUse","x1":"-6340.818","y1":"-3489.151","x2":"-6080.899","y2":"-3550.758","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_111_)\" d=\"M385.26 336.01v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_112_","gradientUnits":"userSpaceOnUse","x1":"-6339.797","y1":"-3484.836","x2":"-6079.877","y2":"-3546.443","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_112_)\" d=\"M371.87 328.28v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_113_","gradientUnits":"userSpaceOnUse","x1":"-6338.756","y1":"-3480.504","x2":"-6078.792","y2":"-3542.122","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_113_)\" d=\"M358.48 320.53v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_114_","gradientUnits":"userSpaceOnUse","x1":"-6337.751","y1":"-3476.196","x2":"-6077.832","y2":"-3537.803","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_114_)\" d=\"M345.09 312.81v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_115_","gradientUnits":"userSpaceOnUse","x1":"-6336.74","y1":"-3471.909","x2":"-6076.832","y2":"-3533.513","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_115_)\" d=\"M331.7 305.11v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_116_","gradientUnits":"userSpaceOnUse","x1":"-6335.695","y1":"-3467.589","x2":"-6075.742","y2":"-3529.204","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_116_)\" d=\"M318.31 297.37v-.95l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_117_","gradientUnits":"userSpaceOnUse","x1":"-6334.692","y1":"-3463.278","x2":"-6074.773","y2":"-3524.885","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_117_)\" d=\"M304.92 289.64v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_118_","gradientUnits":"userSpaceOnUse","x1":"-6333.696","y1":"-3458.928","x2":"-6073.833","y2":"-3520.521","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_118_)\" d=\"M291.53 281.88v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_119_","gradientUnits":"userSpaceOnUse","x1":"-6332.619","y1":"-3454.62","x2":"-6072.666","y2":"-3516.235","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_119_)\" d=\"M278.14 274.15v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_120_","gradientUnits":"userSpaceOnUse","x1":"-6331.148","y1":"-3448.31","x2":"-6071.229","y2":"-3509.917","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_120_)\" d=\"M258.5 262.83v-.94l.49.38z\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_121_","gradientUnits":"userSpaceOnUse","x1":"-6346.751","y1":"-3514.2","x2":"-6086.787","y2":"-3575.817","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_121_)\" d=\"M419.84 370.66v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_122_","gradientUnits":"userSpaceOnUse","x1":"-6345.734","y1":"-3509.892","x2":"-6085.826","y2":"-3571.496","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_122_)\" d=\"M406.45 362.94V362l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_123_","gradientUnits":"userSpaceOnUse","x1":"-6344.713","y1":"-3505.585","x2":"-6084.794","y2":"-3567.192","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_123_)\" d=\"M393.06 355.22v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_124_","gradientUnits":"userSpaceOnUse","x1":"-6343.68","y1":"-3501.275","x2":"-6083.706","y2":"-3562.895","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_124_)\" d=\"M379.67 347.49v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_125_","gradientUnits":"userSpaceOnUse","x1":"-6342.666","y1":"-3496.939","x2":"-6082.747","y2":"-3558.546","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_125_)\" d=\"M366.28 339.74v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_126_","gradientUnits":"userSpaceOnUse","x1":"-6341.644","y1":"-3492.624","x2":"-6081.725","y2":"-3554.231","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_126_)\" d=\"M352.89 332.01v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_127_","gradientUnits":"userSpaceOnUse","x1":"-6340.617","y1":"-3488.289","x2":"-6080.698","y2":"-3549.896","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_127_)\" d=\"M339.5 324.26v-.95l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_128_","gradientUnits":"userSpaceOnUse","x1":"-6339.593","y1":"-3483.986","x2":"-6079.664","y2":"-3545.595","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_128_)\" d=\"M326.11 316.53v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_129_","gradientUnits":"userSpaceOnUse","x1":"-6338.583","y1":"-3479.698","x2":"-6078.664","y2":"-3541.305","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_129_)\" d=\"M312.72 308.83v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_130_","gradientUnits":"userSpaceOnUse","x1":"-6337.535","y1":"-3475.379","x2":"-6077.571","y2":"-3536.997","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_130_)\" d=\"M299.33 301.09v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_131_","gradientUnits":"userSpaceOnUse","x1":"-6336.513","y1":"-3471.073","x2":"-6076.549","y2":"-3532.691","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_131_)\" d=\"M285.94 293.37v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_132_","gradientUnits":"userSpaceOnUse","x1":"-6335.511","y1":"-3466.724","x2":"-6075.592","y2":"-3528.331","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_132_)\" d=\"M272.55 285.61v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_133_","gradientUnits":"userSpaceOnUse","x1":"-6334.463","y1":"-3462.409","x2":"-6074.51","y2":"-3524.024","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_133_)\" d=\"M259.16 277.87v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_134_","gradientUnits":"userSpaceOnUse","x1":"-6333.504","y1":"-3458.096","x2":"-6073.629","y2":"-3519.692","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_134_)\" d=\"M245.77 270.16v-.94l.49.37z\"></path>")],2),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_135_","gradientUnits":"userSpaceOnUse","x1":"-6348.809","y1":"-3522.884","x2":"-6088.855","y2":"-3584.499","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_135_)\" d=\"M403.54 375.97v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_136_","gradientUnits":"userSpaceOnUse","x1":"-6347.791","y1":"-3518.576","x2":"-6087.861","y2":"-3580.186","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_136_)\" d=\"M390.15 368.25v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_137_","gradientUnits":"userSpaceOnUse","x1":"-6346.763","y1":"-3514.271","x2":"-6086.799","y2":"-3575.889","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_137_)\" d=\"M376.76 360.52v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_138_","gradientUnits":"userSpaceOnUse","x1":"-6345.751","y1":"-3509.956","x2":"-6085.832","y2":"-3571.563","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_138_)\" d=\"M363.37 352.8v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_139_","gradientUnits":"userSpaceOnUse","x1":"-6344.725","y1":"-3505.623","x2":"-6084.806","y2":"-3567.23","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_139_)\" d=\"M349.98 345.05v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_140_","gradientUnits":"userSpaceOnUse","x1":"-6343.682","y1":"-3501.313","x2":"-6083.708","y2":"-3562.933","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_140_)\" d=\"M336.59 337.31v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_141_","gradientUnits":"userSpaceOnUse","x1":"-6342.657","y1":"-3496.977","x2":"-6082.694","y2":"-3558.595","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_141_)\" d=\"M323.19 329.56v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_142_","gradientUnits":"userSpaceOnUse","x1":"-6341.657","y1":"-3492.668","x2":"-6081.738","y2":"-3554.275","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_142_)\" d=\"M309.8 321.84v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_143_","gradientUnits":"userSpaceOnUse","x1":"-6340.618","y1":"-3488.388","x2":"-6080.654","y2":"-3550.005","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_143_)\" d=\"M296.41 314.14v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_144_","gradientUnits":"userSpaceOnUse","x1":"-6339.591","y1":"-3484.063","x2":"-6079.628","y2":"-3545.681","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_144_)\" d=\"M283.02 306.4v-.94l.5.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_145_","gradientUnits":"userSpaceOnUse","x1":"-6338.599","y1":"-3479.751","x2":"-6078.679","y2":"-3541.358","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_145_)\" d=\"M269.63 298.68v-.94l.5.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_146_","gradientUnits":"userSpaceOnUse","x1":"-6337.539","y1":"-3475.415","x2":"-6077.575","y2":"-3537.033","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_146_)\" d=\"M256.24 290.92v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_147_","gradientUnits":"userSpaceOnUse","x1":"-6336.505","y1":"-3471.097","x2":"-6076.53","y2":"-3532.717","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_147_)\" d=\"M242.85 283.18v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_148_","gradientUnits":"userSpaceOnUse","x1":"-6335.801","y1":"-3467.936","x2":"-6075.882","y2":"-3529.544","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_148_)\" d=\"M233.03 277.53v-.94l.5.37z\"></path>")],2),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_149_","gradientUnits":"userSpaceOnUse","x1":"-6350.653","y1":"-3530.676","x2":"-6090.689","y2":"-3592.294","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_149_)\" d=\"M384.56 379.7v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_150_","gradientUnits":"userSpaceOnUse","x1":"-6349.64","y1":"-3526.367","x2":"-6089.721","y2":"-3587.974","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_150_)\" d=\"M371.17 371.98v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_151_","gradientUnits":"userSpaceOnUse","x1":"-6348.623","y1":"-3522.06","x2":"-6088.715","y2":"-3583.664","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_151_)\" d=\"M357.78 364.26v-.95l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_152_","gradientUnits":"userSpaceOnUse","x1":"-6347.588","y1":"-3517.75","x2":"-6087.635","y2":"-3579.365","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_152_)\" d=\"M344.39 356.53v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_153_","gradientUnits":"userSpaceOnUse","x1":"-6346.56","y1":"-3513.418","x2":"-6086.606","y2":"-3575.032","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_153_)\" d=\"M331 348.78v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_154_","gradientUnits":"userSpaceOnUse","x1":"-6345.551","y1":"-3509.099","x2":"-6085.632","y2":"-3570.706","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_154_)\" d=\"M317.61 341.05v-.95l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_155_","gradientUnits":"userSpaceOnUse","x1":"-6344.497","y1":"-3504.771","x2":"-6084.523","y2":"-3566.391","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_155_)\" d=\"M304.21 333.29v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_156_","gradientUnits":"userSpaceOnUse","x1":"-6343.511","y1":"-3500.458","x2":"-6083.602","y2":"-3562.063","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_156_)\" d=\"M290.82 325.57v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_157_","gradientUnits":"userSpaceOnUse","x1":"-6342.49","y1":"-3496.173","x2":"-6082.571","y2":"-3557.78","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_157_)\" d=\"M277.43 317.87v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_158_","gradientUnits":"userSpaceOnUse","x1":"-6341.436","y1":"-3491.855","x2":"-6081.473","y2":"-3553.473","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_158_)\" d=\"M264.04 310.13v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_159_","gradientUnits":"userSpaceOnUse","x1":"-6340.446","y1":"-3487.542","x2":"-6080.527","y2":"-3549.149","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_159_)\" d=\"M250.65 302.41v-.94l.5.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_160_","gradientUnits":"userSpaceOnUse","x1":"-6338.089","y1":"-3477.757","x2":"-6078.126","y2":"-3539.375","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_160_)\" d=\"M220.3 284.87v-.94l.49.38z\"></path>")],2),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_161_","gradientUnits":"userSpaceOnUse","x1":"-6353.186","y1":"-3541.329","x2":"-6093.267","y2":"-3602.936","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_161_)\" d=\"M374.51 388.57v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_162_","gradientUnits":"userSpaceOnUse","x1":"-6352.155","y1":"-3537.024","x2":"-6092.191","y2":"-3598.642","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_162_)\" d=\"M361.11 380.85v-.94l.5.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_163_","gradientUnits":"userSpaceOnUse","x1":"-6350.947","y1":"-3531.872","x2":"-6091.027","y2":"-3593.479","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_163_)\" d=\"M345.04 371.6v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_164_","gradientUnits":"userSpaceOnUse","x1":"-6344.755","y1":"-3505.825","x2":"-6084.802","y2":"-3567.44","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_164_)\" d=\"M264.15 324.91v-.94l.5.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_165_","gradientUnits":"userSpaceOnUse","x1":"-6343.53","y1":"-3500.552","x2":"-6083.611","y2":"-3562.159","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_165_)\" d=\"M247.86 315.49v-.94l.49.37z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_166_","gradientUnits":"userSpaceOnUse","x1":"-6342.465","y1":"-3496.21","x2":"-6082.502","y2":"-3557.828","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_166_)\" d=\"M234.35 307.69v-.94l.49.38z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_167_","gradientUnits":"userSpaceOnUse","x1":"-6340.402","y1":"-3487.559","x2":"-6080.427","y2":"-3549.179","gradientTransform":"matrix(1 0 0 -1 6777.893 -3141.329)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#271d74"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#180d5b"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_167_)\" d=\"M207.57 292.2v-.94l.49.38z\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_168_","gradientUnits":"userSpaceOnUse","x1":"1062.468","y1":"338.405","x2":"1282.829","y2":"500.752","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path d=\"M383.1 382.34c.55-.32 1.45-.32 2.01 0l13.39 7.73 3.34 1.93 5.36 3.09c.56.32.56.84.01 1.16l-8.18 4.72c-.55.32-1.45.32-2.01 0l-5.36-3.09-3.34-1.93-13.39-7.73c-.56-.32-.56-.84-.01-1.16l8.18-4.72z\" fill=\"url(#bcg_svg__SVGID_168_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_73_","gradientUnits":"userSpaceOnUse","x1":"1075.073","y1":"321.297","x2":"1295.433","y2":"483.644","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_427_\" d=\"M361.46 380.45l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_73_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_74_","gradientUnits":"userSpaceOnUse","x1":"1084.316","y1":"308.751","x2":"1304.677","y2":"471.098","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_426_\" d=\"M345.39 371.17l11.52 6.65c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-11.52-6.65c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_74_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_75_","gradientUnits":"userSpaceOnUse","x1":"1145.301","y1":"225.973","x2":"1365.662","y2":"388.321","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_425_\" d=\"M248.21 315.06l11.52 6.65c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-11.52-6.65c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_75_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_76_","gradientUnits":"userSpaceOnUse","x1":"1114.738","y1":"267.457","x2":"1335.099","y2":"429.805","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_424_\" d=\"M264.5 324.47l76.34 44.08c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-76.34-44.08c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_76_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_169_","gradientUnits":"userSpaceOnUse","x1":"1167.224","y1":"196.216","x2":"1387.584","y2":"358.563","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path d=\"M216.17 285.96c.55-.32 1.45-.32 2.01 0l7.38 4.26 1.32.76 13.39 7.73c.56.32.56.84.01 1.16l-8.18 4.72c-.55.32-1.45.32-2.01 0l-13.39-7.73-1.32-.76-7.38-4.26c-.56-.32-.56-.84-.01-1.16l8.18-4.72z\" fill=\"url(#bcg_svg__SVGID_169_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_77_","gradientUnits":"userSpaceOnUse","x1":"1154.619","y1":"213.324","x2":"1374.98","y2":"375.672","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_423_\" d=\"M234.7 307.26l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_77_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_78_","gradientUnits":"userSpaceOnUse","x1":"1062.34","y1":"338.58","x2":"1282.699","y2":"500.927","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_422_\" d=\"M384.91 379.28l24.91 14.38c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-24.91-14.38c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_78_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_79_","gradientUnits":"userSpaceOnUse","x1":"1075.784","y1":"320.331","x2":"1296.145","y2":"482.679","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_421_\" d=\"M371.52 371.55l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_79_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_80_","gradientUnits":"userSpaceOnUse","x1":"1084.187","y1":"308.926","x2":"1304.547","y2":"471.273","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_420_\" d=\"M358.13 363.82l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_80_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_81_","gradientUnits":"userSpaceOnUse","x1":"1092.59","y1":"297.52","x2":"1312.95","y2":"459.867","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_419_\" d=\"M344.73 356.09l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_81_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_82_","gradientUnits":"userSpaceOnUse","x1":"1100.992","y1":"286.114","x2":"1321.353","y2":"448.462","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_418_\" d=\"M331.34 348.36l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_82_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_83_","gradientUnits":"userSpaceOnUse","x1":"1109.396","y1":"274.709","x2":"1329.756","y2":"437.056","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_417_\" d=\"M317.95 340.63l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_83_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_84_","gradientUnits":"userSpaceOnUse","x1":"1117.799","y1":"263.304","x2":"1338.158","y2":"425.651","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_416_\" d=\"M304.56 332.9l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_84_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_85_","gradientUnits":"userSpaceOnUse","x1":"1126.201","y1":"251.898","x2":"1346.561","y2":"414.245","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_415_\" d=\"M291.17 325.17l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_85_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_86_","gradientUnits":"userSpaceOnUse","x1":"1134.604","y1":"240.492","x2":"1354.965","y2":"402.84","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_414_\" d=\"M277.78 317.43l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_86_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_87_","gradientUnits":"userSpaceOnUse","x1":"1143.007","y1":"229.087","x2":"1363.367","y2":"391.434","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_413_\" d=\"M264.39 309.7l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_87_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_88_","gradientUnits":"userSpaceOnUse","x1":"1151.41","y1":"217.681","x2":"1371.77","y2":"380.029","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_412_\" d=\"M251 301.97l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_88_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_89_","gradientUnits":"userSpaceOnUse","x1":"1165.134","y1":"199.052","x2":"1385.495","y2":"361.4","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_411_\" d=\"M220.65 284.45l25.8 14.9c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-25.8-14.9c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_89_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_90_","gradientUnits":"userSpaceOnUse","x1":"1059.41","y1":"342.557","x2":"1279.77","y2":"504.904","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_410_\" d=\"M403.89 375.54l18.66 10.77c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-18.66-10.77c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_90_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_91_","gradientUnits":"userSpaceOnUse","x1":"1070.894","y1":"326.969","x2":"1291.255","y2":"489.317","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_409_\" d=\"M390.5 367.81l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_91_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_92_","gradientUnits":"userSpaceOnUse","x1":"1079.297","y1":"315.563","x2":"1299.657","y2":"477.911","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_408_\" d=\"M377.11 360.08l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_92_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_93_","gradientUnits":"userSpaceOnUse","x1":"1087.7","y1":"304.158","x2":"1308.06","y2":"466.505","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_407_\" d=\"M363.72 352.35l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_93_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_94_","gradientUnits":"userSpaceOnUse","x1":"1096.102","y1":"292.752","x2":"1316.463","y2":"455.1","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_406_\" d=\"M350.33 344.62l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_94_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_95_","gradientUnits":"userSpaceOnUse","x1":"1104.505","y1":"281.347","x2":"1324.865","y2":"443.694","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_405_\" d=\"M336.93 336.88l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_95_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_96_","gradientUnits":"userSpaceOnUse","x1":"1112.908","y1":"269.941","x2":"1333.268","y2":"432.288","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_404_\" d=\"M323.54 329.15l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_96_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_97_","gradientUnits":"userSpaceOnUse","x1":"1121.311","y1":"258.536","x2":"1341.671","y2":"420.883","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_403_\" d=\"M310.15 321.42l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_97_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_98_","gradientUnits":"userSpaceOnUse","x1":"1129.714","y1":"247.13","x2":"1350.074","y2":"409.478","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_402_\" d=\"M296.76 313.69l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_98_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_99_","gradientUnits":"userSpaceOnUse","x1":"1138.116","y1":"235.725","x2":"1358.477","y2":"398.072","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_401_\" d=\"M283.37 305.96l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_99_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_100_","gradientUnits":"userSpaceOnUse","x1":"1146.519","y1":"224.319","x2":"1366.88","y2":"386.667","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_400_\" d=\"M269.98 298.23l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_100_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_101_","gradientUnits":"userSpaceOnUse","x1":"1166.406","y1":"197.326","x2":"1386.767","y2":"359.674","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_399_\" d=\"M233.38 277.1l18.66 10.77c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-18.66-10.77c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_101_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_102_","gradientUnits":"userSpaceOnUse","x1":"1154.922","y1":"212.914","x2":"1375.283","y2":"375.261","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_398_\" d=\"M256.59 290.5l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_102_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_103_","gradientUnits":"userSpaceOnUse","x1":"1057.32","y1":"345.392","x2":"1277.682","y2":"507.74","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_397_\" d=\"M420.19 370.25l15.09 8.71c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-15.09-8.71c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_103_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_104_","gradientUnits":"userSpaceOnUse","x1":"1067.684","y1":"331.326","x2":"1288.044","y2":"493.673","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_396_\" d=\"M406.8 362.52l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_104_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_105_","gradientUnits":"userSpaceOnUse","x1":"1076.087","y1":"319.92","x2":"1296.448","y2":"482.268","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_395_\" d=\"M393.41 354.79l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_105_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_106_","gradientUnits":"userSpaceOnUse","x1":"1084.49","y1":"308.515","x2":"1304.85","y2":"470.862","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_394_\" d=\"M380.02 347.06l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_106_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_107_","gradientUnits":"userSpaceOnUse","x1":"1092.893","y1":"297.109","x2":"1313.252","y2":"459.456","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_393_\" d=\"M366.63 339.33l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_107_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_108_","gradientUnits":"userSpaceOnUse","x1":"1101.295","y1":"285.704","x2":"1321.656","y2":"448.051","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_392_\" d=\"M353.24 331.6l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_108_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_109_","gradientUnits":"userSpaceOnUse","x1":"1109.698","y1":"274.298","x2":"1330.059","y2":"436.646","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_391_\" d=\"M339.85 323.86l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.35-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_109_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_110_","gradientUnits":"userSpaceOnUse","x1":"1118.101","y1":"262.893","x2":"1338.461","y2":"425.24","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_390_\" d=\"M326.46 316.13l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_110_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_111_","gradientUnits":"userSpaceOnUse","x1":"1126.504","y1":"251.487","x2":"1346.864","y2":"413.834","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_389_\" d=\"M313.07 308.4l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_111_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_112_","gradientUnits":"userSpaceOnUse","x1":"1134.907","y1":"240.082","x2":"1355.267","y2":"402.429","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_388_\" d=\"M299.68 300.67l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_112_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_113_","gradientUnits":"userSpaceOnUse","x1":"1143.31","y1":"228.676","x2":"1363.67","y2":"391.024","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_387_\" d=\"M286.29 292.94l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_113_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_114_","gradientUnits":"userSpaceOnUse","x1":"1160.115","y1":"205.865","x2":"1380.476","y2":"368.213","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_386_\" d=\"M259.5 277.48l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_114_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_115_","gradientUnits":"userSpaceOnUse","x1":"1168.518","y1":"194.459","x2":"1388.879","y2":"356.807","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_385_\" d=\"M246.11 269.75l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.65.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_115_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_116_","gradientUnits":"userSpaceOnUse","x1":"1151.712","y1":"217.271","x2":"1372.073","y2":"379.618","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_384_\" d=\"M272.9 285.21l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_116_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_117_","gradientUnits":"userSpaceOnUse","x1":"1054.391","y1":"349.369","x2":"1274.751","y2":"511.716","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_383_\" d=\"M439.17 366.51l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_117_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_118_","gradientUnits":"userSpaceOnUse","x1":"1062.793","y1":"337.964","x2":"1283.154","y2":"500.311","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_382_\" d=\"M425.78 358.78l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_118_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_119_","gradientUnits":"userSpaceOnUse","x1":"1071.196","y1":"326.558","x2":"1291.557","y2":"488.906","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_381_\" d=\"M412.39 351.05l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_119_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_120_","gradientUnits":"userSpaceOnUse","x1":"1079.599","y1":"315.153","x2":"1299.959","y2":"477.5","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_380_\" d=\"M399 343.31l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_120_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_121_","gradientUnits":"userSpaceOnUse","x1":"1088.002","y1":"303.747","x2":"1308.362","y2":"466.094","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_379_\" d=\"M385.61 335.58l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_121_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_122_","gradientUnits":"userSpaceOnUse","x1":"1096.405","y1":"292.342","x2":"1316.765","y2":"454.689","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_378_\" d=\"M372.22 327.85l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_122_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_123_","gradientUnits":"userSpaceOnUse","x1":"1104.808","y1":"280.936","x2":"1325.168","y2":"443.284","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_377_\" d=\"M358.83 320.12l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_123_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_124_","gradientUnits":"userSpaceOnUse","x1":"1113.211","y1":"269.531","x2":"1333.571","y2":"431.878","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_376_\" d=\"M345.44 312.39l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_124_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_125_","gradientUnits":"userSpaceOnUse","x1":"1121.613","y1":"258.125","x2":"1341.974","y2":"420.472","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_375_\" d=\"M332.05 304.66l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_125_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_126_","gradientUnits":"userSpaceOnUse","x1":"1130.016","y1":"246.72","x2":"1350.377","y2":"409.067","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_374_\" d=\"M318.66 296.93l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_126_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_127_","gradientUnits":"userSpaceOnUse","x1":"1138.419","y1":"235.314","x2":"1358.78","y2":"397.661","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_373_\" d=\"M305.27 289.2l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_127_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_128_","gradientUnits":"userSpaceOnUse","x1":"1146.822","y1":"223.908","x2":"1367.183","y2":"386.256","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_372_\" d=\"M291.88 281.47l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_128_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_129_","gradientUnits":"userSpaceOnUse","x1":"1155.225","y1":"212.503","x2":"1375.585","y2":"374.85","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_371_\" d=\"M278.49 273.74l8.84 5.1c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-8.84-5.1c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_129_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_130_","gradientUnits":"userSpaceOnUse","x1":"1165.589","y1":"198.436","x2":"1385.949","y2":"360.784","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_370_\" d=\"M258.85 262.4l15.09 8.71c.52.3 1.42.26 2.02-.08l8.03-4.63c.6-.34.66-.87.14-1.16l-15.09-8.71c-.52-.3-1.42-.26-2.02.08l-8.03 4.63c-.6.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_130_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_131_","gradientUnits":"userSpaceOnUse","x1":"1054.055","y1":"349.824","x2":"1274.415","y2":"512.171","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_369_\" d=\"M450.5 358.35l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_131_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_132_","gradientUnits":"userSpaceOnUse","x1":"1063.412","y1":"337.124","x2":"1283.773","y2":"499.472","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_368_\" d=\"M435.59 349.74l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_132_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_133_","gradientUnits":"userSpaceOnUse","x1":"1072.768","y1":"324.424","x2":"1293.128","y2":"486.771","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_367_\" d=\"M420.68 341.13l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_133_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_134_","gradientUnits":"userSpaceOnUse","x1":"1082.133","y1":"311.73","x2":"1302.494","y2":"474.078","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_366_\" d=\"M405.77 332.52l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_134_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_135_","gradientUnits":"userSpaceOnUse","x1":"1091.482","y1":"299.024","x2":"1311.842","y2":"461.371","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_365_\" d=\"M390.86 323.91l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_135_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_136_","gradientUnits":"userSpaceOnUse","x1":"1100.838","y1":"286.324","x2":"1321.199","y2":"448.672","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_364_\" d=\"M375.95 315.3l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.35-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_136_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_137_","gradientUnits":"userSpaceOnUse","x1":"1110.195","y1":"273.624","x2":"1330.555","y2":"435.971","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_363_\" d=\"M361.04 306.7l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_137_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_138_","gradientUnits":"userSpaceOnUse","x1":"1119.551","y1":"260.924","x2":"1339.912","y2":"423.272","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_362_\" d=\"M346.13 298.09l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_138_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_139_","gradientUnits":"userSpaceOnUse","x1":"1128.907","y1":"248.224","x2":"1349.269","y2":"410.572","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_361_\" d=\"M331.22 289.48l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_139_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_140_","gradientUnits":"userSpaceOnUse","x1":"1138.264","y1":"235.524","x2":"1358.625","y2":"397.872","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_360_\" d=\"M316.31 280.87l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_140_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_141_","gradientUnits":"userSpaceOnUse","x1":"1147.62","y1":"222.824","x2":"1367.982","y2":"385.172","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_359_\" d=\"M301.4 272.26l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_141_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_142_","gradientUnits":"userSpaceOnUse","x1":"1156.977","y1":"210.124","x2":"1377.339","y2":"372.473","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_358_\" d=\"M286.49 263.65l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.87-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_142_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__XMLID_143_","gradientUnits":"userSpaceOnUse","x1":"1166.334","y1":"197.424","x2":"1386.694","y2":"359.772","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#821dc5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#320d7f"}})],1),_vm._ssrNode("<path id=\"bcg_svg__XMLID_357_\" d=\"M271.58 255.05l10.24 5.91c.52.3 1.42.26 2.02-.08l2.93-1.69c.6-.34.66-.87.14-1.16l-10.24-5.91c-.52-.3-1.42-.26-2.02.08l-2.93 1.69c-.59.34-.66.86-.14 1.16z\" fill=\"url(#bcg_svg__XMLID_143_)\"></path>")],2),_c('linearGradient',{attrs:{"id":"bcg_svg___x3C_Path_x3E__3_","gradientUnits":"userSpaceOnUse","x1":"1231.507","y1":"389.514","x2":"1264.585","y2":"332.221","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c93bde"}}),_c('stop',{attrs:{"offset":".497","stop-color":"#a22fcd"}}),_c('stop',{attrs:{"offset":".955","stop-color":"#8226bf"}}),_c('stop',{attrs:{"offset":".958","stop-color":"#7e25bd"}}),_c('stop',{attrs:{"offset":".985","stop-color":"#5e1caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#5219aa"}})],1),_vm._ssrNode("<path id=\"bcg_svg___x3C_Path_x3E__16_\" d=\"M225.65 354.24l64.46 37.22c.77.45 2.13.39 3.02-.13l36.96-21.34c.89-.52.99-1.3.22-1.75l-64.46-37.22c-.77-.45-2.13-.39-3.02.13l-36.96 21.34c-.89.52-.99 1.3-.22 1.75z\" fill=\"url(#bcg_svg___x3C_Path_x3E__3_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg___x3C_Path_x3E__4_","gradientUnits":"userSpaceOnUse","x1":"1103.601","y1":"157.289","x2":"1186.573","y2":"444.659","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#cd2eb9"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#2b0d99"}})],1),_vm._ssrNode("<path id=\"bcg_svg___x3C_Path_x3E__14_\" d=\"M305.5 261.03l146.06 84.33c.52.3 1.42.26 2.02-.08l1.95-1.13-29.35-19.3-91.26-51.69-27.32-14.42-1.95 1.13c-.6.34-.67.86-.15 1.16z\" fill=\"url(#bcg_svg___x3C_Path_x3E__4_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_170_","gradientUnits":"userSpaceOnUse","x1":"1051.05","y1":"331.876","x2":"1448.606","y2":"349.416","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c93bde"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4615a5"}})],1),_vm._ssrNode("<path d=\"M151.91 316.6l126.33-72.94c.49-.28 1.12-.43 1.71-.43.04 0 .09.01.13.01 0 0-1.66 1-1.92 1.15l-125.93 72.7 200.74 115.9c.1.06.32.12.64.12.38 0 .77-.09 1.04-.25 0 0 97.05-56.02 125.93-72.7 1.07-.62.82-1.09.82-1.09s.71.33.9.67c.26.46.04.96-.64 1.35l-126.33 72.94c-.49.28-1.12.43-1.71.43-.49 0-.96-.1-1.31-.3l-200.6-115.82c-.79-.45-.69-1.23.2-1.74z\" fill=\"url(#bcg_svg__SVGID_170_)\"></path>")],2),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_171_","gradientUnits":"userSpaceOnUse","x1":"1145.111","y1":"239.476","x2":"1145.111","y2":"187.422","gradientTransform":"matrix(-1 0 0 1 1525.81 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#48caff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#85e3ff"}})],1),_vm._ssrNode("<path d=\"M284.74 231.91c0 4.56 2.43 8.78 6.38 11.06l182.17 105.17c.7.4 1.55.4 2.25 0s1.13-1.15 1.13-1.95v-141.6c0-2.3-1.23-4.43-3.22-5.58L289.01 92.53a2.846 2.846 0 00-4.27 2.46v136.92z\" fill=\"url(#bcg_svg__SVGID_171_)\"></path>")],2),_vm._ssrNode("<path d=\"M379.75 141.19c0 .94.67 2.09 1.49 2.57.82.47 1.49.09 1.49-.85s-.67-2.09-1.49-2.57-1.49-.1-1.49.85z\" fill=\"#eb7fab\"></path><path d=\"M287.58 93.76c.21 0 .43.06.61.16L472.62 200.4c1.49.86 2.41 2.46 2.41 4.18v142.27c0 .23-.12.43-.32.55a.61.61 0 01-.32.08c-.11 0-.22-.03-.32-.08L290.65 241.5a8.647 8.647 0 01-4.32-7.48V94.98c0-.44.23-.84.61-1.06.22-.1.43-.16.64-.16zm0-1.61c-.49 0-.98.13-1.42.38-.88.51-1.42 1.45-1.42 2.46v139.52c0 3.37 1.8 6.47 4.71 8.16l183.84 106.14a2.276 2.276 0 002.26 0c.7-.4 1.13-1.15 1.13-1.95V204.59c0-2.3-1.23-4.43-3.22-5.58L289.01 92.53c-.44-.26-.94-.38-1.43-.38z\" fill=\"#43e8e1\"></path>")],2),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_172_","gradientUnits":"userSpaceOnUse","x1":"336.593","y1":"163.929","x2":"327.918","y2":"176.073"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M309.94 168.31c0-1.98.89-5.1.89-5.1s.72-1.18 1.12-1.68c2.82-3.56 8.32-3.91 14.65-.26 9.2 5.31 16.66 17.07 16.66 26.27 0 5.17-2.36 8.43-6.06 9.35l-2.97.35c-2.36-.08-4.75-1.01-7.63-2.67-9.21-5.3-16.66-17.06-16.66-26.26z\" fill=\"url(#bcg_svg__SVGID_172_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_173_","gradientUnits":"userSpaceOnUse","x1":"321.878","y1":"144.5","x2":"324.827","y2":"174.862"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M309.13 169.45c0-8.88 7.2-11.92 16.08-6.8s16.08 16.48 16.08 25.36c0 8.88-7.2 11.92-16.08 6.8-8.89-5.13-16.08-16.48-16.08-25.36z\" fill=\"url(#bcg_svg__SVGID_173_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_174_","gradientUnits":"userSpaceOnUse","x1":"330.573","y1":"169.939","x2":"319.99","y2":"181.564"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M303.57 172.65c0-8.88 7.2-11.92 16.08-6.8 8.88 5.13 16.08 16.48 16.08 25.36 0 8.88-7.2 11.92-16.08 6.8-8.88-5.12-16.08-16.48-16.08-25.36z\" fill=\"url(#bcg_svg__SVGID_174_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_175_","gradientUnits":"userSpaceOnUse","x1":"209.756","y1":"40.803","x2":"214.382","y2":"52.254"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17306d"}})],1),_vm._ssrNode("<path d=\"M208.63 47.56c-.45-2.93 1.13-4.78 3.52-4.14 2.39.65 4.69 3.54 5.14 6.48.45 2.93-1.13 4.78-3.52 4.14-2.39-.65-4.69-3.55-5.14-6.48z\" fill=\"url(#bcg_svg__SVGID_175_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_176_","gradientUnits":"userSpaceOnUse","x1":"149.089","y1":"147.315","x2":"256.699","y2":"147.315"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#422dc2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4f81ff"}})],1),_vm._ssrNode("<path d=\"M155.42 96.18s13.63 76.29 47.16 95.65c33.53 19.36 46.76-41.23 46.76-41.23l.12-.54 7.24.63-.92 3.45c-4.31 15.41-20.42 62.22-53.22 43.28-32.48-18.75-49.06-83.63-53.47-104.48l5.75-.15.58 3.39z\" fill=\"url(#bcg_svg__SVGID_176_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_177_","gradientUnits":"userSpaceOnUse","x1":"-2646.232","y1":"347.424","x2":"-2652.53","y2":"353.722","gradientTransform":"matrix(1 -.5774 1 .5774 2551.882 -1582.25)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0e1e75"}})],1),_vm._ssrNode("<path d=\"M255.65 148.78c-1.42-.85-3.72-.85-5.14 0-1.42.85-1.42 2.24 0 3.09 1.42.85 3.72.85 5.14 0 1.42-.85 1.42-2.23 0-3.09z\" fill=\"url(#bcg_svg__SVGID_177_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_178_","gradientUnits":"userSpaceOnUse","x1":"-2647.722","y1":"247.809","x2":"-2652.712","y2":"252.798","gradientTransform":"matrix(1 -.5774 1 .5774 2551.882 -1582.25)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0e1e75"}})],1),_vm._ssrNode("<path d=\"M154 91.61c-1.12-.68-2.95-.68-4.07 0s-1.12 1.77 0 2.45c1.12.68 2.95.68 4.07 0 1.13-.68 1.13-1.78 0-2.45z\" fill=\"url(#bcg_svg__SVGID_178_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_179_","gradientUnits":"userSpaceOnUse","x1":"195.357","y1":"-29.022","x2":"54.83","y2":"226.008"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#e0fefe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M159.82 9.3c-8.02-6.3-12.77-2.97-13.1 8.2-.31 10.2-1.73 34.8 3.29 74.71.24 2.11 4.43 1.52 4.24.13-5.34-40.35-3.15-66.92-2.96-73.25.2-6.55 1.29-10.15 8.82-4.32 4.73 3.66 16.08 12.81 16.08 12.81l.53-5.18c-6.15-4.74-13.05-10.07-16.9-13.1z\" fill=\"url(#bcg_svg__SVGID_179_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_180_","gradientUnits":"userSpaceOnUse","x1":"307.284","y1":"182.737","x2":"329.243","y2":"182.737"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M307.28 176.4c0-6.06 4.92-8.14 10.98-4.64 6.06 3.5 10.98 11.25 10.98 17.32 0 6.06-4.92 8.14-10.98 4.64-6.06-3.5-10.98-11.26-10.98-17.32z\" fill=\"url(#bcg_svg__SVGID_180_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_181_","gradientUnits":"userSpaceOnUse","x1":"251.209","y1":"172.682","x2":"298.401","y2":"348.957"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#422dc2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4f81ff"}})],1),_vm._ssrNode("<path d=\"M198.89 194.63l-.33 7.19c-.33 12.05 3.43 24.68 12.36 36.79s25.15 26.76 48.31 37.82c23.16 11.06 37.31.18 40.29-8.03 2.98-8.21 0-30.43 3.97-48.32s16.07-26.53 16.07-26.53l-9.91-2.27s-9.71 9.83-13.23 25.73c-3.53 15.9-.88 39.78-3.53 47.08-2.65 7.29-12.94 14.29-33.53 4.47-20.59-9.83-35-22.85-42.94-33.61-7.94-10.76-11.47-20.15-11.18-30.86l.29-5.85-6.64-3.61z\" fill=\"url(#bcg_svg__SVGID_181_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_182_","gradientUnits":"userSpaceOnUse","x1":"219.862","y1":"46.58","x2":"222.638","y2":"56.412"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17306d"}})],1),_vm._ssrNode("<path d=\"M228.65 51.27c-.25 4.53-3.78 5.81-3.78 5.81l-9.22-3.77c-3.03-1.41-3.38-8.12-.12-7.1l13.12 5.06z\" fill=\"url(#bcg_svg__SVGID_182_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_183_","gradientUnits":"userSpaceOnUse","x1":"183.613","y1":"26.385","x2":"181.773","y2":"33.58"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17306d"}})],1),_vm._ssrNode("<path d=\"M177.21 21.71c-1.25-.98-3.08 4.89-1.27 6.3 1.81 1.4 13.47 10.16 13.47 10.16l.12-6.96c-.01-.01-11.07-8.52-12.32-9.5z\" fill=\"url(#bcg_svg__SVGID_183_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_184_","gradientUnits":"userSpaceOnUse","x1":"194.837","y1":"26.391","x2":"189.316","y2":"40.779"}},[_c('stop',{attrs:{"offset":".232","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17306d"}})],1),_vm._ssrNode("<path d=\"M195.21 38.72c.73-2.33-.43-5.6-2.6-7.31-2.16-1.71-4.51-1.22-5.24 1.11-.73 2.33.43 5.6 2.6 7.31s4.51 1.22 5.24-1.11z\" fill=\"url(#bcg_svg__SVGID_184_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_185_","gradientUnits":"userSpaceOnUse","x1":"335.219","y1":"156.401","x2":"308.997","y2":"197.128"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M302.19 173.45c0-8.88 7.2-11.92 16.08-6.8 8.88 5.13 16.08 16.48 16.08 25.36 0 8.88-7.2 11.92-16.08 6.8-8.89-5.12-16.08-16.48-16.08-25.36z\" fill=\"url(#bcg_svg__SVGID_185_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_186_","gradientUnits":"userSpaceOnUse","x1":"309.943","y1":"182.851","x2":"326.438","y2":"182.851"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M309.94 178.02c0-1.2.83-3.55.83-3.55l.87-.48c1.51-1.09 3.88-.99 6.54.55 4.55 2.63 8.25 8.45 8.25 13.01 0 1.89-.63 3.26-1.7 4.04l-1.48.87s-3.56-.55-5.06-1.42c-4.55-2.64-8.25-8.47-8.25-13.02z\" fill=\"url(#bcg_svg__SVGID_186_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_187_","gradientUnits":"userSpaceOnUse","x1":"323.04","y1":"174.673","x2":"305.028","y2":"200.759"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M308.7 178.73c0-4.55 3.69-6.12 8.25-3.49 4.55 2.63 8.25 8.45 8.25 13.01 0 4.55-3.69 6.12-8.25 3.49-4.56-2.63-8.25-8.45-8.25-13.01z\" fill=\"url(#bcg_svg__SVGID_187_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_188_","gradientUnits":"userSpaceOnUse","x1":"224.103","y1":"633.938","x2":"229.35","y2":"633.938","gradientTransform":"matrix(1 -.5774 0 1 0 -448.857)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#093caf"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17306d"}})],1),_vm._ssrNode("<path d=\"M229.35 52.65c0-1.45-1.17-1.95-2.62-1.11-1.45.84-2.62 2.69-2.62 4.14s1.17 1.95 2.62 1.11c1.45-.83 2.62-2.69 2.62-4.14z\" fill=\"url(#bcg_svg__SVGID_188_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_189_","gradientUnits":"userSpaceOnUse","x1":"285.326","y1":"20.553","x2":"144.799","y2":"275.583"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#e0fefe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M245.23 58.61c8.02 2.96 12.77 11.77 13.1 23.32.3 10.25 1.65 35.29-2.87 67.97-.34 2.39-5.32 1.61-4.95-.04 5.7-34.95 3.44-64.95 3.24-71.62-.2-6.78-4.12-12.77-8.82-14.51-4.71-1.74-19.7-6.95-19.7-6.95-1.28-.4.6-5.46 3.1-4.59 6.15 2.37 13.05 5 16.9 6.42z\" fill=\"url(#bcg_svg__SVGID_189_)\"></path>")],2),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_190_","gradientUnits":"userSpaceOnUse","x1":"466.532","y1":"358.032","x2":"494.638","y2":"340.335"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#49dccc"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M479.59 342.39c-2.53-.86-4.55-2.78-6.21-5.08-.72 1.31-2.24 2.78-5.22 4.21 9.48 19.31 27.59 14.52 27.59 14.52l1.07-18.45s-9.88 7.28-17.23 4.8z\" fill=\"url(#bcg_svg__SVGID_190_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_191_","gradientUnits":"userSpaceOnUse","x1":"459.136","y1":"330.569","x2":"473.378","y2":"330.569"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M473.38 337.31c-3.16-4.37-5.01-10.11-6.5-12.64-2.28-3.86-7.74-5.05-7.74-5.05l7.12 17.36c.58 1.65 1.23 3.15 1.91 4.54 2.97-1.42 4.49-2.9 5.21-4.21z\" fill=\"url(#bcg_svg__SVGID_191_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_192_","gradientUnits":"userSpaceOnUse","x1":"-2240.434","y1":"944.896","x2":"-2220.99","y2":"981.087","gradientTransform":"matrix(.866 -.5 1 .5774 1473.505 -1194.924)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M518.44 459.29c6.23 3.6-.12 13.1-14.18 21.22-14.07 8.12-30.52 11.79-36.75 8.19-6.23-3.6.12-13.1 14.18-21.22s30.52-11.79 36.75-8.19z\" opacity=\".25\" fill=\"url(#bcg_svg__SVGID_192_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_193_","gradientUnits":"userSpaceOnUse","x1":"9193.276","y1":"458.54","x2":"9193.111","y2":"472.105","gradientTransform":"matrix(-1 0 0 1 9691.92 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M505.6 467.87s.71 2.35.92 3.22c.13.54-.14 1.98-.36 3.02a1.86 1.86 0 01-1.37 1.41c-1.24.3-2.55.06-3.61-.65l-9.65-6.52c-.51-.35-.68-1.02-.39-1.57l.26-.49c.41-.77 1.29-1.16 2.14-.95 2.18.55 6.24 1.48 7.68 1.1 2-.5 4.38 1.43 4.38 1.43z\" fill=\"url(#bcg_svg__SVGID_193_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_194_","gradientUnits":"userSpaceOnUse","x1":"9186.017","y1":"464.737","x2":"9191.659","y2":"464.737","gradientTransform":"matrix(-1 0 0 1 9691.92 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M505.9 460.88s-.03 6.9-.29 7.87c-.26.97-3.4.93-4.25-1.14-.71-1.76-1.1-7.5-1.1-7.5l5.64.77z\" fill=\"url(#bcg_svg__SVGID_194_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_195_","gradientUnits":"userSpaceOnUse","x1":"9262.662","y1":"-670.726","x2":"9262.496","y2":"-657.16","gradientTransform":"scale(-1 1) rotate(6.621 -5413.534 -84364.192)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M493.35 471.73s.97 2.25 1.28 3.1c.19.52.09 1.99-.01 3.04-.07.71-.54 1.31-1.2 1.56-1.2.44-2.52.36-3.66-.23l-10.34-5.36a1.21 1.21 0 01-.57-1.51l.2-.52c.32-.81 1.15-1.3 2.01-1.19 2.23.3 6.37.75 7.75.21 1.95-.74 4.54.9 4.54.9z\" fill=\"url(#bcg_svg__SVGID_195_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_196_","gradientUnits":"userSpaceOnUse","x1":"9197.928","y1":"469.365","x2":"9203.57","y2":"469.365","gradientTransform":"matrix(-1 0 0 1 9691.92 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M493.99 465.51s-.03 6.9-.29 7.87c-.26.97-3.4.93-4.25-1.14-.71-1.76-1.11-7.5-1.11-7.5l5.65.77z\" fill=\"url(#bcg_svg__SVGID_196_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_197_","gradientUnits":"userSpaceOnUse","x1":"9173.762","y1":"449.875","x2":"9218.468","y2":"362.099","gradientTransform":"matrix(-1 0 0 1 9691.92 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#cd2eb9"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#2b0d99"}})],1),_vm._ssrNode("<path d=\"M509.39 391.8s-3.29 27.09-2.15 34.24c2.15 13.57-.51 34.84-.51 34.84-2.43 1.51-4.97 1.5-6.97 0 0 0-3.14-45.22-8.77-54.81v-15.22l7.49-8.18 8.06-1.42c2.46 1.08 3.3 7.91 2.85 10.55z\" fill=\"url(#bcg_svg__SVGID_197_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_198_","gradientUnits":"userSpaceOnUse","x1":"9175.614","y1":"467.158","x2":"9222.376","y2":"378.045","gradientTransform":"matrix(-1 0 0 1 9691.92 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#cd2eb9"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#2b0d99"}})],1),_vm._ssrNode("<path d=\"M477.29 388.66s1.29 18.48 3.97 37.06c2.52 17.49 6.44 34.97 7 40.1.08.77.5 1.45 1.14 1.88.85.57 2.23 1.11 4.13.72.72-.15 1.25-.77 1.33-1.5.58-5.7.89-31.71.87-36.4-.02-5.3 4.53-36.56 4.53-36.56l-1.48-12.7-21.49 7.4z\" fill=\"url(#bcg_svg__SVGID_198_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_199_","gradientUnits":"userSpaceOnUse","x1":"525.525","y1":"336.424","x2":"495.533","y2":"358.97"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M488.78 336.98s-6.03 2.92-8.48 8.04c-2.45 5.12-3.01 43.65-3.01 43.65s7.9 4.45 12.45 2.12c4.56-2.34-.96-53.81-.96-53.81z\" fill=\"url(#bcg_svg__SVGID_199_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_200_","gradientUnits":"userSpaceOnUse","x1":"468.561","y1":"395.735","x2":"515.928","y2":"352.919"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#49dccc"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M488.78 336.98s-5.64 2.56-8.48 11.86c-2.61 8.57 2.84 50.31 2.9 46.91 0 0-.4 6.84 3.69 8.38s16.4-.03 22.62-4.63c0 0 2.89.24 2.33-15.21-.56-15.45-2.63-43.58-6.46-46.9-3.84-3.34-7.92-4.74-16.6-.41z\" fill=\"url(#bcg_svg__SVGID_200_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_201_","gradientUnits":"userSpaceOnUse","x1":"9190.153","y1":"346.972","x2":"9220.924","y2":"303.628","gradientTransform":"matrix(-1 0 0 1 9691.92 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M486.89 328.4l.88 8.58c.07.67.58 1.2 1.24 1.31 3.01.51 5.3-.54 6.67-1.48.92-.63 1.32-1.79 1.05-2.88l-1.58-6.32-8.26.79z\" fill=\"url(#bcg_svg__SVGID_201_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_202_","gradientUnits":"userSpaceOnUse","x1":"8042.091","y1":"2048.201","x2":"8072.862","y2":"2004.857","gradientTransform":"scale(-1 1) rotate(-38.426 1339.258 13437.873)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M485.86 312.48s-5.15 9.64-5.08 12.69c.07 3.05 6.04 6.54 7.97 6.32 1.92-.22 8.72-4.07 9.84-6.42 1.12-2.36-5.96-15.45-12.73-12.59z\" fill=\"url(#bcg_svg__SVGID_202_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_203_","gradientUnits":"userSpaceOnUse","x1":"8046.728","y1":"2021.73","x2":"8070.537","y2":"2021.73","gradientTransform":"scale(-1 1) rotate(-38.426 1339.258 13437.873)"}},[_c('stop',{attrs:{"offset":".005","stop-color":"#860048"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#370041"}})],1),_vm._ssrNode("<path d=\"M501.42 313.84c.84 1.38.32 4.42 2.22 6.42 1.34 1.41-.8 3.53-4.45 7.29-3.65 3.76-6.52 2.98-8.36 2.35-1.83-.62-1.31-5.7-1.44-8.46-.13-2.77-.73-4.74-3.53-6.46-2.8-1.72-3.91-5.77-.8-6.12 3.11-.36 3.85 1.23 6.01 1.44 2.18.21 7.13-1.75 10.35 3.54z\" fill=\"url(#bcg_svg__SVGID_203_)\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_204_","gradientUnits":"userSpaceOnUse","x1":"1083.747","y1":"-758.494","x2":"1044.671","y2":"-678.824","gradientTransform":"rotate(-33.018 2544.254 835.584)"}},[_c('stop',{attrs:{"offset":".005","stop-color":"#3a80f8"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0e1e75"}})],1),_vm._ssrNode("<path d=\"M470.29 335.27l-21.68-30.43c-.74-1.13-3.61-.57-6.42 1.26s-4.49 4.22-3.75 5.36l19 32.17c0 .01.01.01.01.02.61.97 1.86 1.52 3.6 1.43 3.45-.18 7.52-2.83 9.09-5.9.79-1.56.79-2.92.16-3.88 0-.01-.01-.02-.01-.03z\" fill=\"url(#bcg_svg__SVGID_204_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_205_","gradientUnits":"userSpaceOnUse","x1":"1065.612","y1":"-742.196","x2":"1071.539","y2":"-754.228","gradientTransform":"rotate(-33.018 2544.254 835.584)"}},[_c('stop',{attrs:{"offset":".005","stop-color":"#3a80f8"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0e1e75"}})],1),_vm._ssrNode("<path d=\"M445.7 303.62c2.73-.14 3.94 1.71 2.7 4.15-1.24 2.44-4.46 4.53-7.19 4.67-2.73.14-3.94-1.71-2.7-4.15 1.24-2.44 4.46-4.53 7.19-4.67z\" fill=\"url(#bcg_svg__SVGID_205_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_206_","gradientUnits":"userSpaceOnUse","x1":"414.652","y1":"246.887","x2":"322.432","y2":"177.56"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4a48f0"}})],1),_vm._ssrNode("<path d=\"M355.16 210.03c0-24.89 20.25-33.45 45.14-19.08 24.89 14.37 45.14 46.31 45.14 71.21 0 24.89-20.25 33.45-45.14 19.08-24.89-14.37-45.14-46.31-45.14-71.21zm7.06 4.08c0 21 17.08 47.95 38.08 60.07 21 12.12 38.08 4.9 38.08-16.1s-17.08-47.95-38.08-60.07c-21-12.12-38.08-4.9-38.08 16.1z\" fill=\"url(#bcg_svg__SVGID_206_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_207_","gradientUnits":"userSpaceOnUse","x1":"440.866","y1":"283.111","x2":"434.967","y2":"299.42"}},[_c('stop',{attrs:{"offset":".005","stop-color":"#3a80f8"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0e1e75"}})],1),_vm._ssrNode("<path d=\"M440.88 298.57l-10.87-16.23-4.06 3.98L439.62 308c.23.35.45.61.66.8.48.5 1.05.89 1.68 1.12 1.88.68 3.52-.39 3.67-2.38.21-2.82-1.87-4.55-4.75-8.97z\" fill=\"url(#bcg_svg__SVGID_207_)\"></path><path d=\"M352.95 213.39c0-24.21 19.69-32.53 43.9-18.55 24.21 13.97 43.9 45.04 43.9 69.24s-19.69 32.53-43.9 18.55c-24.2-13.97-43.9-45.04-43.9-69.24z\" opacity=\".47\" fill=\"#fff\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_208_","gradientUnits":"userSpaceOnUse","x1":"404.353","y1":"176.622","x2":"374.511","y2":"423.684"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#56abff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#2e54ff"}})],1),_vm._ssrNode("<path d=\"M351.71 212.67c0-24.89 20.25-33.45 45.14-19.08s45.14 46.31 45.14 71.21c0 24.89-20.25 33.45-45.14 19.08-24.89-14.38-45.14-46.32-45.14-71.21zm7.06 4.08c0 21 17.08 47.95 38.08 60.07 21 12.12 38.08 4.9 38.08-16.1s-17.08-47.95-38.08-60.07c-21-12.12-38.08-4.9-38.08 16.1z\" fill=\"url(#bcg_svg__SVGID_208_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_209_","gradientUnits":"userSpaceOnUse","x1":"4755.355","y1":"1490.023","x2":"4696.033","y2":"1565.165","gradientTransform":"matrix(-1 -.5774 0 1 5112.276 1420.819)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#422fc3"}})],1),_vm._ssrNode("<path d=\"M354.18 214.1c0-23.53 19.14-31.62 42.67-18.03 23.53 13.58 42.67 43.78 42.67 67.3 0 23.53-19.14 31.62-42.67 18.03-23.53-13.58-42.67-43.77-42.67-67.3zm6.67 3.85c0 19.85 16.15 45.32 36 56.78s36 4.63 36-15.21c0-19.85-16.15-45.32-36-56.78s-36-4.64-36 15.21z\" fill=\"url(#bcg_svg__SVGID_209_)\"></path>")],2),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_210_","gradientUnits":"userSpaceOnUse","x1":"458.579","y1":"326.253","x2":"465.01","y2":"326.253"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M462.74 324.67s-3.72-.27-4.14.97 5.31.67 6.23 1.98c.93 1.3-2.09-2.95-2.09-2.95z\" fill=\"url(#bcg_svg__SVGID_210_)\"></path>"),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_211_","gradientUnits":"userSpaceOnUse","x1":"445.441","y1":"337.317","x2":"467.545","y2":"337.317"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fbd860"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f79d53"}})],1),_vm._ssrNode("<path d=\"M467.25 345.97c-8.97-3.14-12.01-13.84-12.01-13.84s.46-3.59.9-5.07c.6-2.02.72-5.92-.3-5.46-1.02.46 1.83 1.15-2.25 2.7-4.09 1.55-7.65-5.45-7.65-5.45-2 4.69 2.66 9.46 4.02 10.85 1.36 1.39 1.39 5.4 1.39 5.4 2.81 11.24 7.91 17.44 13.56 20.68 3.26-4.6 2.74-7.84 2.34-9.81z\" fill=\"url(#bcg_svg__SVGID_211_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_212_","gradientUnits":"userSpaceOnUse","x1":"467.028","y1":"358.82","x2":"495.135","y2":"341.123"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#49dccc"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M487.25 341.69c-8.68 5.48-15.19 5.96-20.01 4.28.4 1.96.92 5.2-2.35 9.81 12.1 6.94 26.72.26 26.72.26 4.13-11.05-4.36-14.35-4.36-14.35z\" fill=\"url(#bcg_svg__SVGID_212_)\"></path>")],2)],2),_vm._ssrNode("<g>","</g>",[_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_213_","gradientUnits":"userSpaceOnUse","x1":"-2399.906","y1":"532.268","x2":"-2381.178","y2":"567.127","gradientTransform":"matrix(.866 -.5 1 .5774 1638.698 -1194.924)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M131.61 300.3c6.05 3.69-.11 13.42-13.76 21.73-13.65 8.32-29.62 12.07-35.67 8.39-6.05-3.69.11-13.42 13.76-21.73 13.65-8.32 29.62-12.07 35.67-8.39z\" opacity=\".25\" fill=\"url(#bcg_svg__SVGID_213_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_214_","gradientUnits":"userSpaceOnUse","x1":"107.106","y1":"309.135","x2":"120.053","y2":"309.135"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M109.04 303.67s-1.18 1.14-1.58 2.6c-.39 1.46-.79 2.91.79 3.22 1.58.31 3.06 1.66 4.04 3.12.99 1.46 3.32 1.9 5.82 1.98 2.02.06 2.07-1.46 1.87-2.18-.2-.73-2.37-2.6-3.94-3.95-1.58-1.35-3.65-4.78-3.65-4.78h-3.35z\" fill=\"url(#bcg_svg__SVGID_214_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_215_","gradientUnits":"userSpaceOnUse","x1":"93.221","y1":"321.349","x2":"100.446","y2":"321.349"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M94.61 315.36l-1.04 2.69c-.35.9-.44 1.89-.25 2.84.3 1.55.8 3.87 1.3 4.87.79 1.56 3.94 1.85 5.12 1.34s.67-3.6 0-6.85c-.31-1.5-1.48-4.89-1.48-4.89h-3.65z\" fill=\"url(#bcg_svg__SVGID_215_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_216_","gradientUnits":"userSpaceOnUse","x1":"67.541","y1":"278.283","x2":"115.946","y2":"296.325"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M94.64 316c-2.43-10.68-1.37-30.21 0-50.5l10.6-1.16c-1.71 19.07-3.99 36.73-7.22 52 0 .01-1.97 1.4-3.38-.34z\" fill=\"url(#bcg_svg__SVGID_216_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_217_","gradientUnits":"userSpaceOnUse","x1":"137.18","y1":"258.67","x2":"111.107","y2":"281.443"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M108.96 304.13c.12-21.31-1.18-28.86-1.85-43.45l10.56-1.95c1.34 12.91-1.54 29.51-5.08 45.27-.16.72-.8 1.23-1.54 1.22-.35-.01-.78-.06-1.32-.2-.42-.1-.77-.46-.77-.89z\" fill=\"url(#bcg_svg__SVGID_217_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_218_","gradientUnits":"userSpaceOnUse","x1":"122.571","y1":"243.501","x2":"89.782","y2":"256.062"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#49dccc"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M105.41 263.81c1.9.83 3.76 1.68 5.94 1.69 2.01.01 3.98-.46 5.77-1.31 1.01-.48 2.86-2.4 2.94-3.51 1.19-17.93.1-33.15.1-33.15l-16.83 4.69s-.57 14.55.69 19.42c.37 1.45.87 6.2 1.39 12.17z\" fill=\"url(#bcg_svg__SVGID_218_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_219_","gradientUnits":"userSpaceOnUse","x1":"-1893.68","y1":"179.634","x2":"-1875.464","y2":"233.946","gradientTransform":"matrix(-1 0 0 1 -1757.385 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M112.29 197.28c2.02 1.66 12.51 8.98 13.2 9.27 3.26 1.37 13.73 5.6 16.9 4.67 3.77-1.11-1.68 6.86-1.68 7.52 0 .51-11.3-2.78-16.49-4.33-1.81-.54-12.58-4.98-12.4-6.96.16-1.51-.67-11.11.47-10.17z\" fill=\"url(#bcg_svg__SVGID_219_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_220_","gradientUnits":"userSpaceOnUse","x1":"111.965","y1":"251.008","x2":"75.62","y2":"249.095"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#49dccc"}}),_c('stop',{attrs:{"offset":".996","stop-color":"#3ca3ba"}})],1),_vm._ssrNode("<path d=\"M100.52 268.66c1.32-.21 3.16-.46 4.77-.83 1.1-.25 1.93-1.15 2.09-2.27 1.63-10.97 4.3-33.16 4.3-33.16l-21 2.39s1.59 16.19 1.17 30.28c-.05 1.69 1.15 3.19 2.82 3.47 1.92.33 3.86.43 5.85.12z\" fill=\"url(#bcg_svg__SVGID_220_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_221_","gradientUnits":"userSpaceOnUse","x1":"190.396","y1":"155.273","x2":"19.628","y2":"268.432"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#f518a5"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#b514be"}})],1),_vm._ssrNode("<path d=\"M122.46 206.3c-2.1-14.6-2.56-28.31-8.38-30.53-2.17-.83-18.04 5.63-18.5 6.05l-.58.25c-6.45 2.7-6.15 13.55-5.63 19.88-1.73 16.87-.14 38.02 1.31 39.73 2.5 2.97-1.49-5.01 4.77-7.43 4.11-1.59 18.56 7.61 24.44 4.3 5.89-3.32 4.67-17.65 2.57-32.25z\" fill=\"url(#bcg_svg__SVGID_221_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_222_","gradientUnits":"userSpaceOnUse","x1":"102.852","y1":"200.531","x2":"107.485","y2":"174.925"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M103.2 170.69l-1.78 8.87-1.73.68c-.79.31-.99 1.34-.36 1.91 2.66 2.42 8.73 7.26 12.35 4.71 2.43-1.72 1.89-5.79-.37-10.43l-3.24-.72.18-5.01h-5.05z\" fill=\"url(#bcg_svg__SVGID_222_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_223_","gradientUnits":"userSpaceOnUse","x1":"301.439","y1":"754.019","x2":"262.233","y2":"768.54","gradientTransform":"rotate(8.494 4185.733 -688.9)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M117.4 163.33s-.05 6.33-.51 9.32-1.03 5.9-4.25 5.83c-3.22-.08-6.43-2.14-8.74-7.32-2.31-5.19-1.26-9.28.93-11.16 2.19-1.89 11.94-1.31 12.57 3.33z\" fill=\"url(#bcg_svg__SVGID_223_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_224_","gradientUnits":"userSpaceOnUse","x1":"269.547","y1":"759.35","x2":"290.067","y2":"759.35","gradientTransform":"rotate(8.494 4185.733 -688.9)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M103.92 170.08s-.61.84-.93 1.33c-.32.49-1.05-1.14-2.64-3.92-1.59-2.78-1.99-7.64.42-8.7 2.41-1.06 1.91-1.52 3.2-3 1.29-1.47 2.65-1.76 6.94-1.02 4.29.74 5.97 1.67 5.09 2.62-.88.95.95.83 2.55 1.26 1.6.43 1.92 3.52.22 4.78-1.71 1.26-7.42 1.19-9.85.44s-2.1.96-2.05 3.27c.05 2.31-.45 5.66 1.84 7.32 2.3 1.66 7.98-.33 7.98-.33s.95 3.49-2.45 4.64c-3.4 1.15-6.9-.99-8.64-3.45-1.76-2.46-1.68-5.24-1.68-5.24z\" fill=\"url(#bcg_svg__SVGID_224_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_225_","gradientUnits":"userSpaceOnUse","x1":"112.752","y1":"164.77","x2":"100.375","y2":"172.195"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M105.74 169.96s-.11-2.56-1.82-2.57c-1.71-.01-1.22 2.95.68 4.26 1.92 1.31 1.14-1.69 1.14-1.69z\" fill=\"url(#bcg_svg__SVGID_225_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_226_","gradientUnits":"userSpaceOnUse","x1":"126.695","y1":"185.597","x2":"104.94","y2":"221.164"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M126.13 224.22c-1.14-.85-5.95-2.85-8.11-3.5-1.8-.54-11.47-4.96-14.66-6.42-.29-.13-.6-.2-.9-.24l-3.05-14c-.4-1.82-2.4-2.83-4.06-2-4.69 2.33-4.66 8.64-4.66 8.64s3.71 11.31 4.65 12.98c.93 1.67 4.18 2.44 4.18 2.44v-.01c.39.17.82.28 1.27.28 3.96 0 10.96.11 12.71.95 2.48 1.19 5.1 4.84 6.66 4.2 1.56-.64 2.06-2 2.06-2s1.51-.7 3.44.4c1.94 1.1 1.61-.88.47-1.72z\" fill=\"url(#bcg_svg__SVGID_226_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_227_","gradientUnits":"userSpaceOnUse","x1":"-1907.222","y1":"217.864","x2":"-1877.282","y2":"217.864","gradientTransform":"matrix(-1 0 0 1 -1757.385 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#2d1b84"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#190f4a"}})],1),_vm._ssrNode("<path d=\"M137.77 223.72c.28-.22.52-.5.68-.82l11.38-22.4-.84-.88-19.38 15.02c-.42.32-.75.75-.97 1.25l-8.55 17.55c-.31.63-.25 1.39.15 1.96l.42.6c.39.21.86.17 1.21-.1l15.9-12.18z\" fill=\"url(#bcg_svg__SVGID_227_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_228_","gradientUnits":"userSpaceOnUse","x1":"-1903.91","y1":"213.826","x2":"-1897.477","y2":"213.826","gradientTransform":"matrix(-1 0 0 1 -1757.385 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path d=\"M140.09 219.67s1.82-.93 3.63-2.7c1.81-1.77 3.05-5.67 2.76-6.97-.29-1.29-3.14-3.52-3.67-.55-.52 2.99-1.08 7-2.72 10.22z\" fill=\"url(#bcg_svg__SVGID_228_)\"></path>")],2),_vm._ssrNode("<g>","</g>",[_vm._ssrNode("<path d=\"M328.5 479.06l-23.65 13.66c-1.57.91-1.57 3.17 0 4.08l61.44 35.71c8.03 4.64 21.06 4.64 29.09 0 5.86-5.86 4.78-14.04-2.39-18.18l-60.68-35.27a3.813 3.813 0 00-3.81 0zm52.04 43.25c2.12-1.23 5.57-1.23 7.69 0s2.12 3.21 0 4.44c-2.12 1.23-5.57 1.23-7.69 0s-2.12-3.21 0-4.44z\" class=\"bcg_svg__st377\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_229_","gradientUnits":"userSpaceOnUse","x1":"-1414.336","y1":"476.111","x2":"-1370.797","y2":"476.111","gradientTransform":"matrix(-1 0 0 1 -1088.3 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#3ca3ba"}}),_c('stop',{attrs:{"offset":".215","stop-color":"#2f779a"}}),_c('stop',{attrs:{"offset":".464","stop-color":"#214a7a"}}),_c('stop',{attrs:{"offset":".687","stop-color":"#172a62"}}),_c('stop',{attrs:{"offset":".873","stop-color":"#111654"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0f0f4f"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_229_)\" d=\"M289.44 474.02l25.38 14.66 18.16-10.48-25.39-14.66-18.15 4.93z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_230_","gradientUnits":"userSpaceOnUse","x1":"331.967","y1":"470.559","x2":"414.541","y2":"470.559","gradientTransform":"translate(-57.31)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#3ca3ba"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0f0f4f"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_230_)\" d=\"M289.44 468.47l25.38 14.66 18.16-10.48-25.39-14.66z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_231_","gradientUnits":"userSpaceOnUse","x1":"-1405.419","y1":"464.93","x2":"-1392.273","y2":"464.93","gradientTransform":"matrix(-1 0 0 1 -1088.3 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_231_)\" d=\"M303.97 463.01l9.9 5.71 3.25-1.87-9.9-5.72z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_232_","gradientUnits":"userSpaceOnUse","x1":"-1396.582","y1":"470.032","x2":"-1383.436","y2":"470.032","gradientTransform":"matrix(-1 0 0 1 -1088.3 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fdef67"}}),_c('stop',{attrs:{"offset":".538","stop-color":"#f8ae52"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#f67554"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_232_)\" d=\"M295.14 468.11l9.9 5.72 3.24-1.88-9.9-5.71z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_233_","gradientUnits":"userSpaceOnUse","x1":"346.439","y1":"495.681","x2":"431.106","y2":"500.539","gradientTransform":"translate(-57.31)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#42b2f1"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#2a54d3"}})],1),_vm._ssrNode("<path d=\"M303.66 489.2l60.37 35.1c8.03 4.64 21.06 4.64 29.09 0 4.14-2.39 6.15-5.55 6.02-8.69l.01-8.73-68.75-35.86-26.73 7.85v10.33z\" fill=\"url(#bcg_svg__SVGID_233_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_234_","gradientUnits":"userSpaceOnUse","x1":"373.159","y1":"449.145","x2":"438.738","y2":"528.256","gradientTransform":"translate(-57.31)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#56abff"}})],1),_vm._ssrNode("<path d=\"M328.5 463.1l-23.65 13.66c-1.57.91-1.57 3.17 0 4.08l61.44 35.71c8.03 4.64 21.06 4.64 29.09 0 5.86-5.86 4.78-14.04-2.39-18.18L332.3 463.1a3.794 3.794 0 00-3.8 0zm52.04 43.25c2.12-1.23 5.57-1.23 7.69 0s2.12 3.21 0 4.44c-2.12 1.23-5.57 1.23-7.69 0s-2.12-3.22 0-4.44z\" fill=\"url(#bcg_svg__SVGID_234_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_235_","gradientUnits":"userSpaceOnUse","x1":"-1430.447","y1":"477.625","x2":"-1390.213","y2":"477.625","gradientTransform":"matrix(-1 0 0 1 -1088.3 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#56abff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#3a80f8"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_235_)\" d=\"M311.94 485l3.55 2.05 29.09-16.8-3.55-2.05z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_236_","gradientUnits":"userSpaceOnUse","x1":"-1404.468","y1":"513.57","x2":"-1401.336","y2":"489.736","gradientTransform":"matrix(-1 0 0 1 -1088.3 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#422fc3"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_236_)\" d=\"M311.14 484.86v9.02l4.32 2.25-.34-9.08z\"></path>")],2),_vm._ssrNode("<g>","</g>",[_vm._ssrNode("<path d=\"M228.98 477.64l-115.04-66.23c6.92-8.8 4.2-19.55-8.31-26.77-12.6-7.28-31.58-8.72-46.46-4.86l30.11 17.38-3.37 9.73-16.85 1.95-30.11-17.38c-7.36 8.98-4.43 19.68 8.17 26.96 12.65 7.3 31.44 8.9 46.74 4.75l114.9 66.15c3.42 1.97 9.26 2.25 12.67.28l7.61-4.39c3.42-1.98 3.36-5.59-.06-7.57zm-11.87 5.02c-1.64.95-4.31.95-5.95 0-1.64-.95-1.64-2.49 0-3.44 1.64-.95 4.31-.95 5.95 0 1.64.95 1.64 2.49 0 3.44z\" class=\"bcg_svg__st377\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_237_","gradientUnits":"userSpaceOnUse","x1":"-1871.862","y1":"416.109","x2":"-1772.973","y2":"423.395","gradientTransform":"matrix(-1 0 0 1 -1602.384 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#422fc3"}})],1),_vm._ssrNode("<path d=\"M232.25 466.84l-118.98-60.52c2.71-3.44 3.96-7.18 3.75-10.89l.02-6.41s-5.33-5.88-12.2-9.85c-11.32-6.53-47.43-14.23-47.43-14.23v9.1l30.85 17.83-3.42 9.87-17.09 1.97-30.54-17.63c-1.42 1.73-2.87 1.44-2.87 1.44l-.15 10.19c-.05 3.56 1.24 7.01 3.61 9.66 1.95 2.18 4.52 4.23 7.7 6.06 12.83 7.41 31.89 9.02 47.4 4.82l116.19 66.9c3.47 2 9.39 2.29 12.85.28l7.72-4.45c1.73-1 2.58-2.41 2.57-3.83.01-1.42.02-10.31.02-10.31z\" fill=\"url(#bcg_svg__SVGID_237_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_238_","gradientUnits":"userSpaceOnUse","x1":"-1596.999","y1":"369.604","x2":"-1888.462","y2":"462.247","gradientTransform":"matrix(-1 0 0 1 -1602.384 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#422fc3"}})],1),_vm._ssrNode("<path d=\"M228.98 462.35l-115.04-66.23c6.92-8.8 4.2-19.55-8.31-26.77-12.6-7.28-31.58-8.72-46.46-4.86l30.11 17.38-3.37 9.73-16.85 1.95-30.11-17.38c-7.36 8.98-4.43 19.68 8.17 26.96 12.65 7.3 31.44 8.89 46.74 4.75l114.9 66.15c3.42 1.97 9.26 2.25 12.67.28l7.61-4.39c3.42-1.98 3.36-5.59-.06-7.57zm-11.87 5.01c-1.64.95-4.31.95-5.95 0-1.64-.95-1.64-2.49 0-3.44 1.64-.95 4.31-.95 5.95 0s1.64 2.49 0 3.44z\" fill=\"url(#bcg_svg__SVGID_238_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_239_","gradientUnits":"userSpaceOnUse","x1":"-1739.6","y1":"420.197","x2":"-1699.003","y2":"468.08","gradientTransform":"matrix(-1 0 0 1 -1602.384 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4a48f0"}})],1),_vm._ssrNode("<path d=\"M229.32 462.44l-114.39-65.85c2.87-3.94 3.95-8.26 3.13-12.55-1.08-5.61-5.26-10.66-12.09-14.6-11.11-6.41-27.69-8.62-42.53-5.89-.1.02-.19.03-.29.05-1.4.26-2.79.56-4.15.91l-1.59.41 31.05 17.92-3.05 8.81-16.21 1.87-30.4-17.55-.36.44c-3.37 4.11-4.72 8.67-3.9 13.18 1.03 5.64 5.26 10.75 12.25 14.79 12.35 7.13 31.2 9.09 46.98 4.89l114.66 66.01c1.97 1.13 4.58 1.71 7.13 1.71 2.31 0 4.56-.47 6.22-1.43l7.61-4.39c1.82-1.05 2.87-2.63 2.87-4.33-.01-1.72-1.08-3.32-2.94-4.4zm-192.8-73.88c-.65-3.59.31-7.25 2.78-10.64l29.09 16.8.38.22.44-.05 16.85-1.95.84-.1.28-.8 3.37-9.73.36-1.05-.96-.55-27.15-15.67c4.26-.85 8.84-1.29 13.43-1.29 10.98 0 21.18 2.4 28.73 6.76 6.22 3.59 10.17 8.29 11.12 13.24.76 3.92-.35 7.91-3.2 11.54l-.96 1.22 1.34.77 115.04 66.23c1.22.71 1.92 1.67 1.92 2.66 0 .96-.68 1.9-1.86 2.58l-7.61 4.39c-1.3.75-3.14 1.17-5.18 1.17-2.28 0-4.59-.54-6.16-1.45l-114.9-66.15-.48-.28-.54.15c-5.32 1.44-11.25 2.2-17.16 2.2-10.8 0-20.94-2.42-28.55-6.82-6.35-3.67-10.36-8.43-11.26-13.4zm48.24 21.06c-.07.01-.13.01-.2.02.07 0 .14-.01.2-.02zm-2.87.28l-.44.03c.15 0 .29-.02.44-.03zm-6.48.21h.06-.06z\" fill=\"url(#bcg_svg__SVGID_239_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_240_","gradientUnits":"userSpaceOnUse","x1":"-1816.353","y1":"466.329","x2":"-1814.502","y2":"474.194","gradientTransform":"matrix(-1 0 0 1 -1602.384 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#4f7ffe"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#4a48f0"}})],1),_vm._ssrNode("<path d=\"M210.48 468.52c.77.44 1.71.73 2.72.84a7.26 7.26 0 001.86 0c1.01-.11 1.95-.4 2.72-.84 1.21-.7 1.9-1.75 1.9-2.88s-.69-2.18-1.9-2.88c-1-.57-2.29-.89-3.65-.89-1.36 0-2.65.32-3.65.89-1.21.7-1.9 1.75-1.9 2.88 0 1.14.69 2.19 1.9 2.88zm6.29-3.34c.57.33.9.74.9 1.14 0 .39-.33.81-.9 1.14-1.43.83-3.85.83-5.28 0-.57-.33-.9-.74-.9-1.14 0-.39.33-.81.9-1.14.72-.41 1.68-.62 2.64-.62.96 0 1.92.21 2.64.62z\" fill=\"url(#bcg_svg__SVGID_240_)\"></path>"),_vm._ssrNode("<g>","</g>",[_vm._ssrNode("<path d=\"M208.33 389.26l-6.15-3.55-18.11 7.44 2.22 1.29-98.55 56.44 7.15 4.13 98.54-56.45 2 1.16z\" class=\"bcg_svg__st377\"></path><path d=\"M9.2 478.71l57.9-33.8c5.06-2.92 14.21-8.2 16.8-9.7 2.6-2.43 7.05-2.46 12.12.47 8.02 4.63 14.52 14.89 14.52 22.91 0 4.06-1.67 6.76-4.36 7.85l-74.55 43.49c-2.65 1.76-6.71 1.52-11.26-1.11C12.38 504.22 5.9 494 5.9 486.01c0-3.5 1.24-5.99 3.3-7.3z\" class=\"bcg_svg__st377\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_241_","gradientUnits":"userSpaceOnUse","x1":"-3838.432","y1":"387.123","x2":"-3851.653","y2":"387.123","gradientTransform":"matrix(-1 0 0 1 -3647.404 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#48caff"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_241_)\" d=\"M184.07 387.57l11.36 6.56 12.9-10.46v-3.13l-6.15-.42-18.11 4.31z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_242_","gradientUnits":"userSpaceOnUse","x1":"-3787.549","y1":"406.884","x2":"-3795.325","y2":"428.546","gradientTransform":"matrix(-1 0 0 1 -3647.404 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#48caff"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_242_)\" d=\"M87.74 443.62l7.15 4.12 104.1-59.63-7.14-4.12z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_243_","gradientUnits":"userSpaceOnUse","x1":"-3827.513","y1":"396.445","x2":"-3859.99","y2":"368.273","gradientTransform":"matrix(-1 0 0 1 -3647.404 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c1ffff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#48caff"}})],1),_vm._ssrNode("<path fill=\"url(#bcg_svg__SVGID_243_)\" d=\"M184.07 384.43l11.36 6.57 12.9-10.46-6.15-3.55z\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_244_","gradientUnits":"userSpaceOnUse","x1":"-2305.657","y1":"435.395","x2":"-2336.29","y2":"481.861","gradientTransform":"matrix(-1 0 0 1 -2266.97 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#56abff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#2e54ff"}})],1),_vm._ssrNode("<path d=\"M9.2 471.45l57.9-33.8c5.06-2.92 14.21-8.2 16.8-9.7 2.6-2.43 7.05-2.46 12.12.47 8.02 4.63 14.52 14.89 14.52 22.91 0 4.06-1.67 6.76-4.36 7.85l-74.55 43.49c-2.65 1.76-6.71 1.52-11.26-1.11-7.99-4.61-14.47-14.83-14.47-22.82 0-3.49 1.24-5.98 3.3-7.29z\" fill=\"url(#bcg_svg__SVGID_244_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_245_","gradientUnits":"userSpaceOnUse","x1":"-1679.465","y1":"484.063","x2":"-1666.973","y2":"463.938","gradientTransform":"matrix(-1 0 0 1 -1602.384 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#b8e7ff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#61a1ff"}})],1),_vm._ssrNode("<path d=\"M37.16 491.98l65.08-39.18c1.89-1.09 2.44-3.58 1.17-5.36a3.711 3.711 0 00-4.89-1.07l-65.09 39.17c-1.9 1.09-2.44 3.58-1.17 5.37l.01.01a3.73 3.73 0 004.89 1.06z\" fill=\"url(#bcg_svg__SVGID_245_)\"></path>"),_c('linearGradient',{attrs:{"id":"bcg_svg__SVGID_246_","gradientUnits":"userSpaceOnUse","x1":"-1666.304","y1":"465.181","x2":"-1655.2","y2":"445.055","gradientTransform":"matrix(-1 0 0 1 -1602.384 0)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#b8e7ff"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#61a1ff"}})],1),_vm._ssrNode("<path d=\"M27.82 478.16l65.08-39.18c1.89-1.09 2.44-3.58 1.17-5.36a3.711 3.711 0 00-4.89-1.07L24.1 471.72a3.718 3.718 0 00-1.17 5.37l.01.01a3.704 3.704 0 004.88 1.06z\" fill=\"url(#bcg_svg__SVGID_246_)\"></path>")],2)],2)],2)],1)}
var bcgvue_type_template_id_2f69be30_staticRenderFns = []


// CONCATENATED MODULE: ./assets/svg/bcg.svg?vue&type=template&id=2f69be30&

// CONCATENATED MODULE: ./assets/svg/bcg.svg

var bcg_script = {}


/* normalize component */

var bcg_component = Object(componentNormalizer["a" /* default */])(
  bcg_script,
  bcgvue_type_template_id_2f69be30_render,
  bcgvue_type_template_id_2f69be30_staticRenderFns,
  false,
  null,
  null,
  "57b14582"
  
)

/* harmony default export */ var bcg = (bcg_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  components: {
    Bcg: bcg
  }
});
// CONCATENATED MODULE: ./components/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Title.vue



function Title_injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Title_component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js_,
  Titlevue_type_template_id_6680eec4_render,
  Titlevue_type_template_id_6680eec4_staticRenderFns,
  false,
  Title_injectStyles,
  null,
  "0f64c918"
  
)

/* harmony default export */ var Title = (Title_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Advantages.vue?vue&type=template&id=471fce0e&
var Advantagesvue_type_template_id_471fce0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",class:_vm.$style.wrap},[_vm._ssrNode("<div class=\"title\">Почему стоит выбрать меня?</div> "),_vm._ssrNode("<div class=\"columns is-mobile is-multiline is-centered\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("column",_vm.$style.column))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.item))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.iconWrap))+">","</div>",[_c('IconO',{class:_vm.$style.img}),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.$style.subTitle))+">Не компания</div>")],2),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.$style.desc))+">Я частный мастер и лично отвечаю перед вами за качество проделанной работы.</div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("column",_vm.$style.column))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.item))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.iconWrap))+">","</div>",[_c('IconT',{class:_vm.$style.img}),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.$style.subTitle))+">Бесплатная диагностика</div>")],2),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.$style.desc))+">Я проведу у вас бесплатную диагностику и составлю план решения проблемы.</div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("column",_vm.$style.column))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.item))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.iconWrap))+">","</div>",[_c('IconTH',{class:_vm.$style.img}),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.$style.subTitle))+">Приятные цены</div>")],2),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.$style.desc))+">\n          Я работаю с вами на прямую и не плачу процент компании, поэтому мои\n          цены ниже рыночных.\n        </div>")],2)])],2)],2)}
var Advantagesvue_type_template_id_471fce0e_staticRenderFns = []


// CONCATENATED MODULE: ./components/Advantages.vue?vue&type=template&id=471fce0e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/svg/iconT.svg?vue&type=template&id=f04b5fe2&
var iconTvue_type_template_id_f04b5fe2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"version":"1.1","id":"iconT_svg__Слой_1","xmlns":"http://www.w3.org/2000/svg","x":"0","y":"0","viewBox":"0 0 327.4 319.77","xml:space":"preserve"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".iconT_svg__st0{fill:#5479f7}")]),_vm._ssrNode("<path d=\"M271.33 155.28h-29.44l-14.72-25.5 14.72-25.5h29.44l14.72 25.5-14.72 25.5zm-27.71-3h25.98l12.99-22.5-12.99-22.5h-25.98l-12.99 22.5 12.99 22.5zM8.76 276.3l-2.99-.15.6-11.87 11.08-.03-7.47-21.51 23.3 10.18-1.2 2.75-17.02-7.43 6.61 19-12.45.03zM312.4 196.28c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.25-5-5-5zM13.55 81.22L5.4 63.08l21.56 2.72-13.41 15.42zm-3.23-14.5l4.04 8.99 6.65-7.65-10.69-1.34zM40.02 214.33c-16.55-6.05-26.83-18.95-30.48-24.21-12.4-17.86-12.95-44.27-1.4-67.29l3.38-6.74 7.62 1.48c4.04.79 8.31.79 12.35 0 3.28-.64 13.8-5.56 17.58-7.4l.74-.36.7.42c3.01 1.83 11.53 6.7 14.75 7.33 4.04.79 8.31.79 12.35 0l7.62-1.48 3.38 6.74c8.09 16.13 10.39 34.44 6.31 50.22l-2.9-.75c3.91-15.09 1.69-32.63-6.08-48.13l-2.36-4.71-5.38 1.05c-4.41.86-9.08.86-13.5 0-3.84-.75-12.37-5.71-15.03-7.29-2.95 1.42-13.78 6.55-17.59 7.29-4.41.86-9.08.86-13.5 0l-5.38-1.05-2.36 4.71c-11.06 22.05-10.6 47.26 1.18 64.23 3.49 5.03 13.3 17.35 29.05 23.1l-1.05 2.84z\" class=\"iconT_svg__st0\"></path><path d=\"M43.88 200.16c-12.09-4.41-19.7-13.96-22.4-17.86-9.11-13.12-9.38-32.78-.71-50.08l.51-1.02 1.12.22c4.37.85 8.79.85 13.15 0 6.33-1.23 12.23-4.94 13.35-5.67l.82-.53.82.53c.58.38 1.16.82 1.78 1.3 2.06 1.58 4.63 3.54 8.86 4.37 4.36.85 8.79.85 13.15 0l1.12-.22.51 1.02c5.65 11.25 7.62 23.57 5.55 34.69l-2.95-.55c1.89-10.15.19-21.4-4.79-31.79-4.37.71-8.8.65-13.16-.2-4.92-.96-7.92-3.25-10.11-4.93-.29-.22-.56-.43-.82-.62-2.39 1.47-7.72 4.42-13.56 5.55-4.37.85-8.79.92-13.16.2-7.69 16.08-7.34 34.04.98 46.02 2.54 3.67 9.68 12.64 20.97 16.75l-1.03 2.82z\" class=\"iconT_svg__st0\"></path><path d=\"M48.4 111.28h3v16h-3zM54.34 168.76l-3-.15 1.07-21.98c.04-.78-.24-1.51-.77-2.07-1.07-1.12-3-1.12-4.07 0-.54.56-.81 1.3-.77 2.07l1.07 21.98-3 .15-1.07-21.98c-.08-1.6.49-3.13 1.6-4.29 1.11-1.16 2.6-1.8 4.21-1.8s3.1.64 4.21 1.8a5.785 5.785 0 011.6 4.29l-1.08 21.98zM49.9 182.28a5.51 5.51 0 01-5.5-5.5c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm0-8a2.5 2.5 0 000 5 2.5 2.5 0 002.5-2.5c0-1.38-1.13-2.5-2.5-2.5z\" class=\"iconT_svg__st0\"></path><g><path d=\"M208.4 190.93v88.34h-17.95c-2.23 0-4.05-1.82-4.05-4.05v-21.87c0-3.05-2.19-5.78-5.22-6.14-3.61-.43-6.66 2.41-6.66 5.98 0 0-6.9 25.08-13.48 25.08l-59.57 1c-1.15 0-2.08-.93-2.08-2.08v-88.67c5.27-3.84 16-4.38 16-4.38v27.55c0 2.81 3.53 15.17 13.49 22.21 9.97 7.04 26.37 8.77 26.37 8.77 19.41 0 35.14-15.73 35.14-35.14v-21.86c.01.01 14.41.6 18.01 5.26z\" class=\"iconT_svg__st0\"></path><path d=\"M150.9 242.2l-1.53-.03c-20.15 0-35.97-16.02-35.97-36.47v-25.42h3v25.42c0 18.77 14.5 33.47 33 33.47l1.53.03c18.44 0 33.47-15.03 33.47-33.5v-26.42h3v26.42c0 20.12-16.38 36.5-36.5 36.5z\" class=\"iconT_svg__st0\"></path><path d=\"M161.4 279.28h-60.71c-4.57 0-8.29-3.72-8.29-8.29v-84.71h3v84.71c0 2.92 2.37 5.29 5.29 5.29h60.71v3zM205.4 181.28h3v97h-3zM77.15 181.09l-1.7-2.47c1.64-1.13 3.35-2.21 5.08-3.2l1.5 2.6c-1.66.95-3.3 1.98-4.88 3.07zM46.4 283.28h-3v-44.21c0-22.06 9.82-42.75 26.95-56.78l1.9 2.32c-16.43 13.45-25.85 33.3-25.85 54.46v44.21zM257.4 294.28h-3v-59.14c0-12.8-3.47-25.35-10.02-36.3l2.57-1.54a73.586 73.586 0 0110.45 37.84v59.14zM198.4 318.28h-20.43c-6.87 0-14.53-4.94-16.71-6.45l1.71-2.47c2 1.39 9 5.92 15 5.92h20.43v3z\" class=\"iconT_svg__st0\"></path><path d=\"M202.76 318.28H186.4v-3h16.36c1.92 0 3.69-.89 4.74-2.37l3.08-4.32c1.85-2.59 2.82-5.65 2.82-8.83v-17.68c0-1.54-1.37-2.79-3.06-2.79h-20.22c-3.16 0-5.73-2.46-5.73-5.48v-21.37c0-2.4-2.11-4.35-4.71-4.35s-4.71 1.95-4.71 4.35l-.03.32c-.97 4.43-6.2 26.53-13.89 26.53v-3c3.49 0 8.38-12.44 10.93-24.02.1-3.97 3.52-7.18 7.71-7.18 4.25 0 7.71 3.3 7.71 7.35v21.37c0 1.34 1.25 2.48 2.73 2.48h20.22c3.34 0 6.06 2.6 6.06 5.79v17.68c0 3.81-1.17 7.47-3.38 10.57l-3.07 4.32c-1.63 2.27-4.31 3.63-7.2 3.63z\" class=\"iconT_svg__st0\"></path><path d=\"M206.4 289.28h8v3h-8zM206.4 300.28h8v3h-8zM215.4 77.28h27v3h-27zM299.4 164.28h-87v-52h3v49h81v-81h-27v-3h30z\" class=\"iconT_svg__st0\"></path><path d=\"M278.4 163.28h3v19h-3zM254.4 154.28h3v28h-3zM231.4 163.28h3v19h-3zM298.4 143.28h21v3h-21zM298.4 117.28h21v3h-21zM298.4 93.28h21v3h-21zM265.4 97.28h-3V64.91l5.36-1.49c10.74-4.37 17.41-14.18 17.41-25.64 0-8.8-3.4-17.27-9.1-22.66-1.28-1.22-3.31-2.11-4.77-2.64l-.94 20-14.58 9.64-14.38-9.67v-19.9c-2.34.28-4.47 1.2-6.1 2.67-5.48 4.93-8.76 13.13-8.76 21.92 0 10.42 6.46 20.04 16.47 24.52l6.39 2.21v33.41h-3V66l-4.55-1.58c-11.12-4.96-18.31-15.67-18.31-27.29 0-9.77 3.55-18.58 9.75-24.15 2.53-2.27 5.94-3.52 9.61-3.52v.37h1.5V30.84l11.4 7.66 11.64-7.69 1.05-22.27 1.78.46c.21.05 5.11 1.34 7.86 3.94 6.28 5.95 10.04 15.24 10.04 24.84 0 12.73-7.42 23.64-19.36 28.45l-.16.05-3.25.9v30.1zM256.4 141.28c-6.62 0-12-5.38-12-12s5.38-12 12-12 12 5.38 12 12c0 6.61-5.39 12-12 12zm0-21c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9c0-4.97-4.04-9-9-9zM163.4 318.28H84.35c-17.07 0-30.96-13.89-30.96-30.96v-48.95c0-33.77 27.48-61.25 61.25-61.25h.6l.44.42c10.64 10.21 23.61 16.31 34.7 16.31v3c-11.68 0-25.23-6.24-36.33-16.72-31.84.32-57.65 26.33-57.65 58.24v48.95c0 15.41 12.54 27.96 27.96 27.96h76.04v-37h3v40z\" class=\"iconT_svg__st0\"></path><path d=\"M247.4 314.28h-3v-79.85c0-29.86-24.29-54.15-54.15-54.15H186c-6.76 6.38-20 16.57-35.62 16.57v-3c10.89 0 23.27-5.89 33.98-16.16l.44-.42h5.45c31.51 0 57.15 25.64 57.15 57.15v79.86zM254.4 301.28h3v6h-3zM107.52 96.5l-2.93-.63c2.17-10.11 7.34-23.55 13.56-29.15l1.53-1.38.84 1.87c2.15 4.76 6.96 10.52 11.99 14.33 6.32 4.79 20.01 7.29 31.98 3.18 6.48-2.23 14.87-7.34 17.99-19.03l2.9.77c-3.46 12.97-12.74 18.63-19.91 21.1-12.91 4.44-27.82 1.64-34.77-3.63-4.73-3.59-9.31-8.82-11.94-13.56-4.92 5.65-9.29 17.02-11.24 26.13z\" class=\"iconT_svg__st0\"></path><path d=\"M200.03 96.07l-2.93-.65c.03-.12 2.6-11.86 2.74-24.18.11-9.83.35-30.29-31.61-41.75-.23-.07-29.84-8.86-46.56 13.99l-.5.68-.84-.07c-4.04-.34-7.88 1.1-11.41 4.26-5.87 5.26-9.09 13.74-9.24 19.39-.33 3.91.64 17.54 2.86 26.92l-2.92.69c-2.38-10.03-3.26-23.88-2.93-27.78.16-6.02 3.43-15.36 10.23-21.46 3.87-3.47 8.29-5.21 12.82-5.06 18.07-23.77 49.12-14.51 49.44-14.41 30 10.76 33.85 28.6 33.66 44.63-.14 12.65-2.7 24.31-2.81 24.8z\" class=\"iconT_svg__st0\"></path><path d=\"M191.45 97.11c-.42-4.73-1.14-11.57-2.63-16.38-.75-2.44-1.81-5.27-2.9-7.77l2.75-1.2c1.14 2.6 2.24 5.54 3.02 8.09 1.57 5.09 2.32 12.14 2.75 17l-2.99.26z\" class=\"iconT_svg__st0\"></path><path d=\"M149.75 166.34c-8.28 0-16.07-3.22-21.92-9.08l-10.98-10.98c-8.03-8.03-12.45-18.71-12.45-30.06V94.28h3v21.94c0 10.55 4.11 20.48 11.57 27.94l10.98 10.98c5.29 5.29 12.32 8.2 19.8 8.2 7.54 0 14.87-3.1 20.11-8.52l10.4-10.73c7.18-7.41 11.13-17.17 11.13-27.49V95.28h3v21.32c0 11.1-4.25 21.61-11.98 29.58l-10.4 10.73c-5.8 6-13.91 9.43-22.26 9.43z\" class=\"iconT_svg__st0\"></path><path d=\"M149.96 142.34c-5.15 0-12.03-3.75-12.32-3.91l1.45-2.63c.06.04 6.49 3.54 10.87 3.54 4.87 0 10.77-3.48 10.83-3.52l1.54 2.58c-.27.16-6.68 3.94-12.37 3.94zM150.03 128.4c-4.29 0-6.98-2.16-7.09-2.26l-.55-.45-.02-24.99a4.44 4.44 0 00-4.44-4.43H123.4v-3h14.54c4.1 0 7.43 3.33 7.44 7.43l.02 23.48c.8.46 2.43 1.22 4.64 1.22 3.18 0 5.16-1.56 5.18-1.57l1.91 2.32c-.12.09-2.81 2.25-7.1 2.25zM160.4 93.28h16v3h-16zM122.12 175.51l-1.66-2.5c8.19-5.43 7.74-16.89 7.73-17.01l3-.15c.03.55.56 13.28-9.07 19.66zM178.56 175.95c-9.62-6.38-9.16-19.71-9.14-20.27l3 .13c0 .12-.39 12.21 7.8 17.64l-1.66 2.5zM155.74 151.42c-.03-.01-2.92-1.51-6.05-1.51-3.04 0-5.35 1.43-5.38 1.45l-1.62-2.52c.12-.08 3.04-1.93 7-1.93 3.89 0 7.31 1.79 7.45 1.86l-1.4 2.65z\" class=\"iconT_svg__st0\"></path><circle cx=\"129.9\" cy=\"105.78\" r=\"3.5\" class=\"iconT_svg__st0\"></circle><circle cx=\"167.9\" cy=\"105.78\" r=\"3.5\" class=\"iconT_svg__st0\"></circle><g><path d=\"M194.6 120.73l-2.94-.58c.39-1.97 1.78-3.22 3.26-4.55 2.03-1.83 4.33-3.9 5.49-8.64 1.15-4.74.66-8.07-1.39-9.38-1.67-1.07-4.15-.59-5.48.48l-1.87-2.35c2.15-1.72 6.03-2.53 8.96-.66 1.86 1.19 4.69 4.41 2.69 12.62-1.38 5.65-4.28 8.26-6.39 10.16-1.37 1.22-2.14 1.96-2.33 2.9z\" class=\"iconT_svg__st0\"></path></g><g><path d=\"M105.08 120.56c-.19-.95-.92-1.67-2.21-2.85-2.02-1.86-4.79-4.4-6.16-10.04-1.8-7.4.31-10.79 2.41-12.33 2.79-2.05 6.5-1.53 8.76-.17l-1.54 2.57c-1.49-.89-3.83-1.17-5.44.01-1.92 1.42-2.37 4.68-1.27 9.2 1.16 4.75 3.35 6.77 5.27 8.54 1.41 1.29 2.74 2.52 3.12 4.48l-2.94.59z\" class=\"iconT_svg__st0\"></path></g></g><g><path d=\"M327.4 287.28h-64v-3h61v-47h-61v-3h64z\" class=\"iconT_svg__st0\"></path><path transform=\"rotate(-45.001 309.75 272.623)\" d=\"M308.26 260.03h3v25.17h-3z\" class=\"iconT_svg__st0\"></path><path transform=\"rotate(-44.101 273.443 269.9)\" d=\"M263.9 268.39h19.05v3H263.9z\" class=\"iconT_svg__st0\"></path><path d=\"M290.47 270.14h-.06a4.192 4.192 0 01-2.96-1.28l-19.71-20.41 2.16-2.08 19.7 20.4c.22.23.52.36.85.36.3 0 .63-.12.86-.34l26.42-25.72 2.09 2.15-26.42 25.72c-.79.77-1.83 1.2-2.93 1.2z\" class=\"iconT_svg__st0\"></path><g><path d=\"M290.4 214.28h3v8h-3z\" class=\"iconT_svg__st0\"></path><path transform=\"rotate(-39.034 274.932 223.529)\" d=\"M273.46 219.65h3v7.79h-3z\" class=\"iconT_svg__st0\"></path><path transform=\"rotate(-50.966 309.89 223.531)\" d=\"M306.02 222.04h7.79v3h-7.79z\" class=\"iconT_svg__st0\"></path></g></g><g><path d=\"M90.32 90.57l-12.66-.26-3.54-10.66a35.44 35.44 0 01-5.85-2.57L58.03 81.7l-9.5-9.89 5.03-10.05a34.8 34.8 0 01-2.33-5.95l-10.5-3.98.27-13.7 10.66-3.54c.67-2.01 1.53-3.97 2.57-5.85L49.62 18.5 59.51 9l10.05 5.02c1.91-.95 3.9-1.73 5.95-2.33l3.98-10.5 13.72.28 3.55 10.65c2.03.68 3.99 1.54 5.85 2.57l10.24-4.61 9.5 9.89-5.03 10.05c1.07 2.14 1.92 4.39 2.54 6.7l-2.9.77a32.15 32.15 0 00-2.64-6.76l-.36-.68 4.77-9.53-6.57-6.84-9.7 4.37-.67-.39a32.661 32.661 0 00-6.65-2.92l-.73-.23-3.4-10.09-9.49-.19-3.77 9.95-.74.2a33.04 33.04 0 00-6.77 2.65l-.68.36-9.52-4.76-6.84 6.57 4.37 9.71-.39.67a31.372 31.372 0 00-2.91 6.65l-.23.74-10.1 3.36-.19 9.48 9.95 3.77.2.74c.62 2.33 1.51 4.6 2.64 6.76l.36.68-4.77 9.52 6.57 6.84 9.71-4.38.67.39c2.09 1.22 4.33 2.2 6.65 2.92l.74.23 3.36 10.1 10.54.21-.05 2.98zm-5.25-27.39c-4.62-.09-8.92-1.98-12.12-5.31-3.2-3.33-4.91-7.71-4.82-12.33.19-9.53 8.08-17.14 17.64-16.94 6.88.14 13.02 4.34 15.64 10.69l-2.77 1.15a14.322 14.322 0 00-12.93-8.84c-7.86-.16-14.43 6.12-14.59 14-.08 3.82 1.34 7.44 3.98 10.19 2.64 2.75 6.2 4.31 10.02 4.39l-.05 3z\" id=\"iconT_svg__gear-5-icon_8_\" class=\"iconT_svg__st0\"></path></g>")],2)}
var iconTvue_type_template_id_f04b5fe2_staticRenderFns = []


// CONCATENATED MODULE: ./assets/svg/iconT.svg?vue&type=template&id=f04b5fe2&

// CONCATENATED MODULE: ./assets/svg/iconT.svg

var iconT_script = {}


/* normalize component */

var iconT_component = Object(componentNormalizer["a" /* default */])(
  iconT_script,
  iconTvue_type_template_id_f04b5fe2_render,
  iconTvue_type_template_id_f04b5fe2_staticRenderFns,
  false,
  null,
  null,
  "50e7a037"
  
)

/* harmony default export */ var iconT = (iconT_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/svg/iconTH.svg?vue&type=template&id=5c99c366&
var iconTHvue_type_template_id_5c99c366_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"version":"1.1","id":"iconTH_svg__Слой_1","xmlns":"http://www.w3.org/2000/svg","x":"0","y":"0","viewBox":"0 0 330.31 335.15","xml:space":"preserve"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".iconTH_svg__st0{fill:#5479f7}")]),_vm._ssrNode("<path d=\"M285.49 225.31l-2.52-1.62 6.4-10.02 9.64 5.47 4.17-22.39 15.19 20.39-2.4 1.79-11.1-14.89-3.68 19.79-10.83-6.14zM277.31 280.12c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM144.4 30.41l-8.15-18.15 21.56 2.72-13.41 15.43zm-3.23-14.5l4.04 8.99 6.65-7.65-10.69-1.34zM46.02 80.08c-2.56 0-4.89-.6-6.43-1.99-3.66-3.3-2.34-11.42.77-17.38l2.66 1.39c-2.84 5.46-3.51 11.89-1.42 13.77 2.3 2.08 9.15 1.36 13.56-1.42l1.6 2.54c-3 1.88-7.11 3.09-10.74 3.09zM72.56 50.67c-2.15 0-4.31-.76-6.03-2.31a8.962 8.962 0 01-2.97-6.23c-.13-2.4.69-4.71 2.31-6.5a8.962 8.962 0 016.23-2.97c2.4-.13 4.71.69 6.5 2.31a8.962 8.962 0 012.97 6.23c.12 2.4-.69 4.71-2.31 6.5a8.993 8.993 0 01-6.7 2.97zm.01-15.02c-.11 0-.21 0-.32.01-1.6.08-3.08.79-4.16 1.98a5.961 5.961 0 00-1.54 4.34c.08 1.6.79 3.08 1.98 4.16 2.46 2.22 6.27 2.02 8.49-.44a5.961 5.961 0 001.54-4.34c-.08-1.6-.79-3.08-1.98-4.16a5.893 5.893 0 00-4.01-1.55zM57.28 47.18l-3.4-14.4 9.73-9.6 2.11 2.13-8.53 8.42 3.01 12.76z\" class=\"iconTH_svg__st0\"></path><path d=\"M17.46 69.39l-1.31-2.7 13.5-6.57 14.66-.04v3l-13.96.04z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-5.941 23.703 51.289)\" d=\"M16.3 49.77h14.79v3H16.3z\" class=\"iconTH_svg__st0\"></path><path d=\"M82.67 58.71l-12.65-1.62.38-2.98 10.98 1.41 7.48-9.36 2.35 1.88z\" class=\"iconTH_svg__st0\"></path><path d=\"M81.87 70.1l-16.39-6.49.74-1.47c2.27-4.48 1.77-8.98-1.29-11.75-2.95-2.66-7.32-2.78-11.42-.32l-1.29.77-9.6-16.06 3.06-12.84 2.92.7-2.78 11.65 7.46 12.48c4.89-2.38 10.01-1.9 13.65 1.38 3.7 3.33 4.67 8.64 2.63 13.84l12.37 4.9 11.34-3.99 1 2.83-12.4 4.37zM52.07 98.39l-2.82-1.03 4.93-13.57.36-10.45 3 .1-.37 10.93z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-3.767 66.776 90.248)\" d=\"M65.25 82.5h3v15.44h-3z\" class=\"iconTH_svg__st0\"></path><path d=\"M54.43 112.52c-12.71 0-24.89-4.45-34.7-12.76C8.76 90.48 2.06 77.47.87 63.14-.32 48.81 4.14 34.86 13.43 23.88 32.61 1.23 66.64-1.6 89.29 17.58c10.98 9.29 17.69 22.3 18.88 36.64 1.19 14.33-3.27 28.27-12.56 39.24-9.29 10.98-22.3 17.68-36.63 18.87-1.52.13-3.04.19-4.55.19zm-38.71-86.7C6.94 36.19 2.73 49.36 3.86 62.89c1.13 13.53 7.45 25.81 17.81 34.58 10.37 8.78 23.53 12.99 37.06 11.87 13.53-1.12 25.82-7.45 34.59-17.82 8.77-10.36 12.99-23.52 11.86-37.05-1.13-13.53-7.46-25.82-17.83-34.6C65.97 1.76 33.83 4.43 15.72 25.82z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-47.606 52.219 60.99)\" d=\"M50.72 8.89h3v104.19h-3z\" class=\"iconTH_svg__st0\"></path><g><path d=\"M164.31 153.36v-51.24h-60.59c-8.81 10.03-20.81 17.14-34.41 19.75v106.25h95v-11.48c-3.17-1.68-4.45-5.53-4.6-8.93-.08-1.79 4.6-9.7 4.6-9.7-5.82.44-12.21-7.15-11.11-11.59.56-2.25 1.92-3.96 3.68-5.1.06-.05.11-.1.17-.15.74-.58 1.56-.97 2.4-1.23.37-.83.88-1.59 1.47-2.17.9-.91 5.9-2.2 7.17-2.52 0 0-7.65-3.89-8.96-8.66-.77-1.59-1-3.42-.5-5.23.44-1.64 4.42-7.72 5.68-8zM260.18 255.25l.86-11.3-10.27-4.29c-.54-2.45-1.37-4.81-2.46-7.04l5.54-9.29-7.79-8.57-10.46 3.88a35.2 35.2 0 00-6.97-3.33l-2.99-10.29-11.87-.82-4.51 9.78c-2.58.52-5.06 1.31-7.4 2.34l-6.55-4.87v10.04c0 4.21-3.42 7.63-7.63 7.63h-7.37v23l1.94 1.36c.55 2.45 1.38 4.81 2.46 7.04l-5.53 9.29 7.79 8.57 10.46-3.88c2.16 1.34 4.49 2.46 6.97 3.33l2.98 10.29 11.87.82 4.52-9.77c2.57-.52 5.05-1.31 7.4-2.34l9.76 5.27 9-7.42-4.08-9.95a31.56 31.56 0 003.5-6.63l10.83-2.85zm-30.29-8.93c-.62 8.5-8 14.89-16.5 14.28-8.5-.61-14.89-8-14.27-16.5.62-8.5 8-14.89 16.5-14.27 8.49.61 14.89 8 14.27 16.49zM114.87 280.12H84.5c-17.91 0-26.07-12.17-24.22-28.67.4-3.59 1.54-6.41 2.44-8.22.6 5.73-.17 16.44 7.49 21.96 6.96 5.01 17.9 3.11 25.4 2.49 11.05-.92 26.65-1.41 46.8.5 7.77.27 3.52 6.67-.19 10.91 0 0-18.8 17.68-27.46 16.51 11.59-3.25 6.48-15.48.11-15.48z\" class=\"iconTH_svg__st0\"></path><path d=\"M171.31 152.12h-3V94.51c0-8.49-6.9-15.39-15.39-15.39h-38.61v-3h38.61c10.14 0 18.39 8.25 18.39 18.39v57.61zM152.92 270.12H80.7c-10.14 0-18.39-8.25-18.39-18.39V133.12h3v118.61c0 8.49 6.9 15.39 15.39 15.39h72.22c8.49 0 15.39-6.9 15.39-15.39v-29.61h3v29.61c0 10.14-8.25 18.39-18.39 18.39zM100.74 305.4l-1.76-2.43c3.43-2.48 7.89-4.31 13.05-6.44 11-4.53 24.68-10.16 33.65-25.12l2.57 1.54c-9.48 15.81-23.68 21.65-35.08 26.35-4.98 2.06-9.29 3.83-12.43 6.1z\" class=\"iconTH_svg__st0\"></path><path d=\"M34.82 252.22l-2.94-.58c1.55-7.91-3.93-25.01-6.87-34.2-.57-1.79-1.08-3.36-1.45-4.61-2.8-9.34 1.73-20.58 6.97-33.59 5.38-13.34 11.48-28.47 11.65-45.65.08-7.83 5.37-12.22 10.55-12.52 5.19-.3 10.91 3.39 12.03 12.29l-2.98.37c-.93-7.45-5.36-9.87-8.88-9.66-3.67.21-7.66 3.29-7.72 9.56-.18 17.75-6.39 33.15-11.87 46.74-5.03 12.49-9.38 23.27-6.88 31.61.37 1.24.87 2.79 1.44 4.56 3.23 10.09 8.65 27.01 6.95 35.68zM168.92 176.09c-3.92 0-7.75-1.94-10.01-5.49-3.5-5.51-1.86-12.83 3.65-16.33l11.33-7.19c5.51-3.5 12.83-1.86 16.33 3.65 3.5 5.51 1.86 12.83-3.65 16.33l-11.33 7.19a11.706 11.706 0 01-6.32 1.84zm11.29-27.84c-1.62 0-3.25.44-4.72 1.37l-11.33 7.19c-4.11 2.61-5.33 8.08-2.72 12.19 2.61 4.11 8.08 5.33 12.19 2.72l11.33-7.19c4.11-2.61 5.33-8.08 2.72-12.19a8.849 8.849 0 00-7.47-4.09z\" class=\"iconTH_svg__st0\"></path><path d=\"M163.88 199.64c-1.86 0-3.72-.45-5.42-1.34-2.79-1.45-4.85-3.89-5.79-6.87-1.95-6.18 1.49-12.79 7.67-14.74l12.95-4.09c6.18-1.95 12.79 1.49 14.74 7.67 1.95 6.18-1.49 12.79-7.67 14.74l-12.95 4.09c-1.16.35-2.35.54-3.53.54zm12.93-24.59c-.87 0-1.75.13-2.63.41l-12.95 4.09c-4.6 1.45-7.16 6.37-5.71 10.97.7 2.22 2.23 4.03 4.31 5.12a8.68 8.68 0 006.66.59l12.95-4.09c4.6-1.45 7.16-6.37 5.71-10.97-1.17-3.73-4.62-6.12-8.34-6.12z\" class=\"iconTH_svg__st0\"></path><path d=\"M169.27 218.95c-2.95 0-5.75-1.12-7.9-3.18a11.353 11.353 0 01-3.54-8.01 11.34 11.34 0 013.18-8.16c2.12-2.22 4.96-3.47 8.01-3.54l4.97-.11c3.06-.07 5.95 1.06 8.16 3.18 2.22 2.12 3.47 4.96 3.54 8.01.14 6.31-4.88 11.56-11.19 11.7l-4.97.11h-.26zm4.97-20.01h-.19l-4.97.11c-2.25.05-4.35.98-5.91 2.62a8.383 8.383 0 00-2.35 6.02c.05 2.25.98 4.35 2.62 5.91a8.4 8.4 0 006.02 2.35l4.97-.11c4.66-.1 8.37-3.98 8.26-8.64a8.363 8.363 0 00-2.62-5.91 8.384 8.384 0 00-5.83-2.35zM168.31 135.92v-28.59l6.19-3.93c4.78-3.03 11.08-2.49 14.99 1.28 2.72 2.62 4.07 6.26 3.69 9.96-.38 3.72-2.39 7-5.53 8.99l-19.34 12.29zm3-26.94v21.48l14.74-9.36c2.36-1.49 3.87-3.96 4.15-6.76.28-2.79-.73-5.52-2.79-7.5-2.93-2.82-7.68-3.21-11.3-.91 0 .01-4.8 3.05-4.8 3.05zM85.64 330.91l-2.04-2.2 10.46-9.69-60.82-65.63-22.41 19.92-1.99-2.25 24.61-21.86 64.85 69.98z\" class=\"iconTH_svg__st0\"></path><path d=\"M34.27 275.76a5.857 5.857 0 11-8.04-1.99c2.77-1.67 6.37-.77 8.04 1.99zM133.31 205.12h-3v-35.35l.68-.44c8.92-5.86 14.47-15.87 14.47-26.12 0-11.19-6.4-21.81-16.14-27.14v23.6l-14 10.86-14-10.86v-23.65c-9.61 5.08-16.14 15.92-16.14 27.18 0 10.25 5.54 20.26 14.47 26.12l.68.44v24.35h-3v-22.75c-9.36-6.46-15.14-17.18-15.14-28.17 0-13.23 8.25-25.95 20.06-30.93l2.08-.88v26.81l11 8.54 11-8.54v-26.86l2.11.94c11.98 5.36 20.03 17.78 20.03 30.92 0 10.99-5.78 21.71-15.14 28.17v33.76zM130.31 210.12h3v6h-3z\" class=\"iconTH_svg__st0\"></path><path d=\"M219.05 291.84l-14.02-.93-3.14-11.12c-2.06-.79-4.04-1.77-5.93-2.93l-10.73 4.26-9.26-10.58 5.64-10.08c-1-2.25-1.76-4.61-2.28-7.02l2.93-.63c.53 2.45 1.33 4.83 2.39 7.08l.33.7-5.35 9.57 6.47 7.39 10.19-4.04.65.42c2.11 1.35 4.36 2.47 6.71 3.31l.73.26 2.98 10.55 9.8.65 4.35-10.07.75-.16c2.46-.53 4.84-1.34 7.09-2.4l.7-.33 9.57 5.35 7.39-6.47-4.04-10.19.42-.65c1.34-2.08 2.46-4.34 3.31-6.71l.26-.72 10.55-2.98.65-9.8-10.06-4.35-.16-.75c-.53-2.44-1.34-4.83-2.39-7.09l-.32-.7 5.35-9.56-6.47-7.39-10.18 4.04-.65-.41a34.013 34.013 0 00-6.71-3.31l-.73-.26-2.98-10.55-9.8-.65-4.35 10.07-.75.16c-2.44.53-4.82 1.33-7.08 2.39l-.74.35-6.5-4.03 1.58-2.55 5.12 3.18c2-.89 4.09-1.59 6.22-2.1l4.59-10.6 14.02.93 3.14 11.11c2.05.79 4.04 1.77 5.93 2.93l10.73-4.25 9.26 10.58-5.64 10.08c.89 2.02 1.6 4.12 2.11 6.26l10.6 4.59-.93 14.02-11.12 3.14c-.8 2.07-1.78 4.06-2.93 5.93l4.26 10.73-10.58 9.25-10.08-5.63c-2.01.89-4.11 1.6-6.26 2.12l-4.61 10.59zm-3.95-32.05c-.32 0-.64-.01-.96-.03-3.77-.25-7.22-1.95-9.7-4.8a14.056 14.056 0 01-3.47-10.26c.25-3.77 1.95-7.22 4.8-9.7 2.84-2.49 6.48-3.72 10.25-3.47 3.77.25 7.21 1.95 9.7 4.8 5.14 5.87 4.54 14.83-1.33 19.96-2.59 2.27-5.86 3.5-9.29 3.5zm-.04-25.29c-2.7 0-5.27.97-7.32 2.76a11.089 11.089 0 00-3.78 7.65c-.2 2.97.77 5.84 2.74 8.08 1.96 2.24 4.67 3.58 7.64 3.78 2.96.2 5.84-.77 8.08-2.73 4.62-4.05 5.09-11.1 1.04-15.73a11.086 11.086 0 00-7.64-3.78c-.25-.03-.5-.03-.76-.03z\" id=\"iconTH_svg__gear-5-icon_10_\" class=\"iconTH_svg__st0\"></path><path d=\"M190.59 335.15l-4.81-6.28c-1.35 0-2.71-.11-4.06-.33l-5.76 5.42-9.06-4.65 1.05-7.84c-.96-.96-1.84-2-2.64-3.1l-7.9-.24-3.12-9.7 6.28-4.81c0-1.36.11-2.71.34-4.06l-5.5-5.84 4.87-7.54 10.14 1.52-.44 2.97-8.22-1.23-2.54 3.94 4.94 5.25-.15.76c-.32 1.63-.46 3.28-.41 4.93l.02.77-5.81 4.45 1.82 5.67 7.31.22.43.64c.92 1.37 2 2.64 3.2 3.77l.56.53-.97 7.26 5.3 2.72 5.33-5.02.76.15c1.63.32 3.29.46 4.93.41l.77-.02 4.45 5.81 5.67-1.82.22-7.32.64-.43c1.36-.91 2.63-1.99 3.77-3.2l.53-.56 7.26.97 2.72-5.3-4.48-4.77 2.19-2.05 5.93 6.31-4.65 9.06-7.84-1.05c-.97.97-2 1.85-3.1 2.64l-.24 7.9-9.73 3.09zm-4.8-21.46c-1.57 0-3.14-.37-4.58-1.11a10.03 10.03 0 01-4.98-5.86c-.82-2.56-.6-5.28.63-7.67a9.995 9.995 0 015.86-4.98c2.55-.82 5.28-.6 7.67.63a10.03 10.03 0 014.98 5.86c.82 2.56.6 5.28-.63 7.67a9.985 9.985 0 01-5.87 4.98c-1 .32-2.04.48-3.08.48zm.03-17.1c-.73 0-1.46.11-2.17.34a7.032 7.032 0 00-4.11 3.49 6.996 6.996 0 00-.44 5.38 7.032 7.032 0 003.49 4.11c1.67.86 3.58 1.02 5.38.44a7.032 7.032 0 004.11-3.49c.86-1.67 1.02-3.58.44-5.38a7.032 7.032 0 00-3.49-4.11 7.007 7.007 0 00-3.21-.78z\" id=\"iconTH_svg__gear-5-icon_9_\" class=\"iconTH_svg__st0\"></path><path d=\"M125.54 251.12h-14.68c-1.96 0-3.82-1.11-4.55-2.93-1.47-3.62 1.15-7.07 4.58-7.07h14.68c1.96 0 3.82 1.11 4.55 2.93 1.48 3.62-1.15 7.07-4.58 7.07z\" class=\"iconTH_svg__st0\"></path></g><g><path d=\"M184.31 131.12h60v3h-60zM312.31 68.12h-3v-14h-37v-3h40zM312.31 150.12h-121v-3h118v-8h3zM257.31 169.12h-31v-14h3v11h25v-11h3z\" class=\"iconTH_svg__st0\"></path><path d=\"M271.31 180.12h-60v-14h16v3h-13v8h54v-8h-5v-3h8z\" class=\"iconTH_svg__st0\"></path></g><g><path d=\"M273.54 42.21l-5.02-5.02c-2.5-2.5-1.98-7.08 1.17-10.22l19.48-19.48 14.07 14.07-19.48 19.48c-3.15 3.14-7.72 3.67-10.22 1.17z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-45.001 214.322 87.678)\" d=\"M200.4 86.18h27.88v3H200.4z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-44.996 219.06 92.175)\" d=\"M204.97 90.68h28.21v3h-28.21z\" class=\"iconTH_svg__st0\"></path><path d=\"M277.18 44.78c-2.52 0-5.04-.96-6.95-2.88l-6.54-6.54c-3.83-3.83-3.83-10.07 0-13.91L284.9.24l20.44 20.44-21.21 21.22a9.831 9.831 0 01-6.95 2.88zm7.72-40.3l-19.1 19.1c-2.66 2.66-2.66 7 0 9.66l6.54 6.54c2.66 2.66 7 2.66 9.66 0l19.1-19.1-16.2-16.2z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-44.602 247.242 53.105)\" d=\"M221.71 51.61h51.1v3h-51.1z\" class=\"iconTH_svg__st0\"></path><path transform=\"rotate(-44.676 253.3 59.424)\" d=\"M227.53 57.93h51.52v3h-51.52z\" class=\"iconTH_svg__st0\"></path><path d=\"M237.18 91.67l-22.11-22.11 7.32-7.32 22.11 22.11-7.32 7.32zm-17.86-22.1l17.87 17.87 3.08-3.08-17.87-17.87-3.08 3.08zM213.73 109.27l-16.09-16.1 17.76-17.78 2.12 2.12-15.64 15.66 11.85 11.86 15.64-15.66 2.12 2.12z\" class=\"iconTH_svg__st0\"></path></g><g><path d=\"M174.31 77.12h-3v-27h65v3h-62z\" class=\"iconTH_svg__st0\"></path></g><g><path d=\"M320.69 135.12h-63.38c-.74.04-1.5-.04-2.24-.29-2.25-.75-3.76-2.95-3.76-5.46V93.12h3v36.25c0 1.2.71 2.28 1.72 2.62.95.32 1.67.01 2.1-.3.74-.53 1.18-1.44 1.18-2.44V82.12h37.51l8.77-10 24.72.04v53.38c0 5.28-4.31 9.58-9.62 9.58zm-59.08-3h59.08c3.65 0 6.62-2.95 6.62-6.58V75.16l-20.37-.03-8.77 10h-35.86v44.13c0 1.01-.25 2-.7 2.86z\" class=\"iconTH_svg__st0\"></path><path d=\"M277.31 100.12h37v3h-37zM282.31 113.12h27v3h-27z\" class=\"iconTH_svg__st0\"></path></g><path d=\"M309.94 297.12h-17.32l-8.66 15 8.66 15h17.32l8.66-15-8.66-15zm-8.66 21.6c-3.61 0-6.53-2.92-6.53-6.53 0-3.61 2.92-6.53 6.53-6.53s6.53 2.92 6.53 6.53c.01 3.61-2.92 6.53-6.53 6.53z\" class=\"iconTH_svg__st0\"></path>")],2)}
var iconTHvue_type_template_id_5c99c366_staticRenderFns = []


// CONCATENATED MODULE: ./assets/svg/iconTH.svg?vue&type=template&id=5c99c366&

// CONCATENATED MODULE: ./assets/svg/iconTH.svg

var iconTH_script = {}


/* normalize component */

var iconTH_component = Object(componentNormalizer["a" /* default */])(
  iconTH_script,
  iconTHvue_type_template_id_5c99c366_render,
  iconTHvue_type_template_id_5c99c366_staticRenderFns,
  false,
  null,
  null,
  "654939c6"
  
)

/* harmony default export */ var iconTH = (iconTH_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/svg/iconO.svg?vue&type=template&id=76bbf510&
var iconOvue_type_template_id_76bbf510_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"version":"1.1","id":"iconO_svg__Слой_1","xmlns":"http://www.w3.org/2000/svg","x":"0","y":"0","viewBox":"0 0 322.71 319.77","xml:space":"preserve"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".iconO_svg__st0{fill:#5479f7}")]),_vm._ssrNode("<path d=\"M11 300.77c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM8.58 19.15L.42 1.01l21.56 2.72-13.4 15.42zM5.35 4.65l4.04 8.99L16.04 6 5.35 4.65zM229.85 84.77H5.15C2.86 84.77 1 86.63 1 88.92v168.71c0 2.29 1.86 4.15 4.15 4.15H151v-14H15v-149h205v67.68l14-19.85V88.92c0-2.29-1.86-4.15-4.15-4.15z\" class=\"iconO_svg__st0\"></path><path d=\"M166.29 230.27l16.57-16.56-8.87-9.67-16.72 15.66z\" class=\"iconO_svg__st0\"></path><path transform=\"rotate(-45.001 177.953 208.01)\" d=\"M176.45 201.43h3v13.16h-3z\" class=\"iconO_svg__st0\"></path><path d=\"M223.64 277.82c-1.82-1.75-4.27-2-6.18-3.39-2.93-2.14-1.13-.79-1.52-4.58-.48-4.7-3.72-7.95-8.25-9.07-3.25-.81-3.21-.36-4.68-3.53-.88-1.91-1.8-4.77-3.33-6.3-3.57-3.57-12.58-.44-12.58-.44l-3.82-8.47 9.04-9.15s8.89 5.15 11.65 5.9c2.01.55 3.97.75 5.89.69l30.46 30.46c4.67 4.67 4.67 12.3 0 16.97-2.99 2.99-7.2 4.06-11.06 3.21-.87-.18-1.71-.48-2.53-.86.64-4.12.16-8.31-3.09-11.44z\" class=\"iconO_svg__st0\"></path><path d=\"M231.11 291.6c-2.08 0-4.18-.48-6.13-1.47l1.35-2.68c4.07 2.06 8.97 1.28 12.18-1.93 4.09-4.09 4.09-10.75 0-14.84l-28.92-28.92 2.12-2.12 28.92 28.92c5.26 5.26 5.26 13.82 0 19.09a13.449 13.449 0 01-9.52 3.95z\" class=\"iconO_svg__st0\"></path><path d=\"M243.74 280.15l-1.41-2.65c2.06-1.09 5.76-4.58 7.01-5.83 2.32-2.31 8.76-9.38 10.38-11.56 2.47-3.31 4.46-6.73 6.25-10.75.97-2.18 2.04-5.01 2.99-7.51.58-1.52 1.11-2.94 1.57-4.07l2.78 1.13c-.45 1.11-.98 2.5-1.54 4-.96 2.54-2.05 5.41-3.05 7.67-1.89 4.23-3.98 7.83-6.59 11.32-1.73 2.31-8.24 9.47-10.67 11.89-.19.2-4.84 4.83-7.72 6.36zM68.76 171.94h-3c0-.9.02-1.8.06-2.69l3 .13c-.04.86-.06 1.71-.06 2.56zm.36-6.43l-2.98-.34c.16-1.36.36-2.72.61-4.06l2.95.55a54.08 54.08 0 00-.58 3.85zm1.42-7.66l-2.91-.75c.34-1.32.73-2.64 1.16-3.93l2.85.95c-.41 1.23-.78 2.49-1.1 3.73zm2.47-7.38l-2.77-1.15a56.89 56.89 0 011.7-3.73l2.69 1.34c-.59 1.16-1.13 2.35-1.62 3.54zm3.46-6.96l-2.59-1.52c.69-1.17 1.43-2.33 2.2-3.46l2.47 1.7c-.72 1.07-1.42 2.17-2.08 3.28zm4.4-6.41l-2.35-1.86a56.8 56.8 0 012.66-3.12l2.22 2.02c-.88.94-1.73 1.94-2.53 2.96zm5.24-5.76l-2.07-2.17c.98-.94 2.01-1.86 3.06-2.73l1.92 2.31c-1 .83-1.97 1.7-2.91 2.59zm5.99-4.98l-1.76-2.43c1.11-.8 2.25-1.57 3.41-2.28l1.58 2.55c-1.09.67-2.18 1.4-3.23 2.16zm6.62-4.11l-1.4-2.65c1.2-.64 2.45-1.24 3.7-1.79l1.21 2.74c-1.19.53-2.37 1.1-3.51 1.7zm7.12-3.15l-1.02-2.82c1.28-.46 2.6-.89 3.9-1.26l.82 2.89c-1.24.35-2.48.75-3.7 1.19zm7.49-2.13l-.62-2.94c1.33-.28 2.69-.52 4.04-.7l.41 2.97c-1.28.18-2.57.41-3.83.67zm7.7-1.06l-.21-2.99c1.36-.09 2.73-.14 4.1-.14v3c-1.29-.01-2.6.04-3.89.13z\" class=\"iconO_svg__st0\"></path><path d=\"M124.93 231.12c-32.63 0-59.17-26.54-59.17-59.17h3c0 30.97 25.2 56.17 56.17 56.17 30.97 0 56.17-25.2 56.17-56.17 0-30.97-25.2-56.17-56.17-56.17v-3c32.63 0 59.17 26.54 59.17 59.17s-26.55 59.17-59.17 59.17zM168.24 268.16c-2.81 0-5.45-1.09-7.42-3.06-1.98-1.98-3.06-4.61-3.06-7.42 0-2.81 1.09-5.45 3.06-7.42l5.69-5.69 2.12 2.12-5.69 5.69a7.432 7.432 0 00-2.18 5.3c0 2.01.78 3.89 2.18 5.3a7.441 7.441 0 005.3 2.19c2.01 0 3.89-.78 5.3-2.19l8.48-8.48c2.92-2.92 2.92-7.68 0-10.6l2.12-2.12c4.09 4.09 4.09 10.75 0 14.85l-8.48 8.48a10.479 10.479 0 01-7.42 3.05z\" class=\"iconO_svg__st0\"></path><path d=\"M180.52 281.32c-2.81 0-5.45-1.09-7.42-3.06-4.09-4.09-4.09-10.75 0-14.85l13.16-13.16c4.09-4.09 10.75-4.09 14.85 0 1.98 1.98 3.06 4.61 3.06 7.42 0 2.81-1.09 5.45-3.06 7.42l-13.16 13.16a10.42 10.42 0 01-7.43 3.07zm13.17-31.14c-1.92 0-3.84.73-5.3 2.19l-13.16 13.16c-2.92 2.92-2.92 7.68 0 10.6a7.441 7.441 0 005.3 2.19c2.01 0 3.89-.78 5.3-2.19l13.16-13.16a7.441 7.441 0 002.19-5.3c0-2.01-.78-3.89-2.19-5.3a7.472 7.472 0 00-5.3-2.19z\" class=\"iconO_svg__st0\"></path><path d=\"M193.69 293.61c-2.81 0-5.45-1.09-7.42-3.06-4.09-4.09-4.09-10.75 0-14.85l13.16-13.16c4.09-4.09 10.75-4.09 14.85 0 1.98 1.98 3.06 4.61 3.06 7.42 0 2.81-1.09 5.45-3.06 7.42l-13.16 13.16a10.454 10.454 0 01-7.43 3.07zm13.16-31.15c-1.92 0-3.84.73-5.3 2.19l-13.16 13.16c-2.92 2.92-2.92 7.68 0 10.6a7.441 7.441 0 005.3 2.19c2.01 0 3.89-.78 5.3-2.19l13.16-13.16a7.441 7.441 0 002.19-5.3c0-2.01-.78-3.89-2.19-5.3a7.472 7.472 0 00-5.3-2.19z\" class=\"iconO_svg__st0\"></path><path d=\"M211.59 301.16c-2.81 0-5.45-1.09-7.42-3.06-1.98-1.98-3.06-4.61-3.06-7.42 0-2.81 1.09-5.45 3.06-7.42l6.18-6.18c1.98-1.98 4.61-3.06 7.42-3.06 2.81 0 5.45 1.09 7.42 3.06 1.98 1.98 3.06 4.61 3.06 7.42s-1.09 5.45-3.06 7.42l-6.18 6.18a10.446 10.446 0 01-7.42 3.06zm6.17-24.16c-2.01 0-3.89.78-5.3 2.19l-6.18 6.18c-1.41 1.41-2.19 3.29-2.19 5.3s.78 3.89 2.19 5.3a7.441 7.441 0 005.3 2.19c2.01 0 3.89-.78 5.3-2.19l6.18-6.18c1.41-1.41 2.19-3.29 2.19-5.3s-.78-3.89-2.19-5.3a7.424 7.424 0 00-5.3-2.19zM172.75 246.88c-5.78 0-14.06-2.71-14.84-7.91-.5-3.35 2.4-5.74 6.42-9.03 1.4-1.15 2.98-2.45 4.66-3.97 5.95-5.39 11.21-11.87 15.62-19.27l.17-.29.28-.19c5.06-3.39 10.4-6.37 15.85-8.87 8.98-4.11 17.31-6.36 24.75-6.7l.14 3c-7.05.32-15 2.48-23.63 6.43a109.87 109.87 0 00-15.15 8.44c-4.53 7.54-9.92 14.15-16.01 19.67-1.73 1.57-3.35 2.89-4.77 4.06-3.38 2.77-5.6 4.6-5.35 6.27.41 2.71 6.52 5.4 12.02 5.35 10.19-.1 16.63-10.01 17.81-11.99l.88-1.46 1.34 1.06c4.46 3.52 9.74 5.98 15.28 7.13 7.69 1.59 14.27.37 18.43-.93l.9 2.86c-4.5 1.41-11.61 2.73-19.93 1a39.964 39.964 0 01-15.22-6.72c-2.54 3.72-9.32 11.95-19.46 12.05-.07.01-.13.01-.19.01z\" class=\"iconO_svg__st0\"></path><path d=\"M276.4 244.95l-57.27-57.26 27.21-27.21 2.12 2.12-25.08 25.09 53.02 53.01 27.26-27.26 2.12 2.12z\" class=\"iconO_svg__st0\"></path><path transform=\"rotate(-45.001 161.654 224.66)\" d=\"M160.16 217.64h3v14.03h-3z\" class=\"iconO_svg__st0\"></path><circle transform=\"rotate(-76.714 124.94 171.954)\" cx=\"124.93\" cy=\"171.94\" r=\"43.57\" class=\"iconO_svg__st0\"></circle><path d=\"M119.58 183.77c0-1.89.1-3.59.31-5.08.21-1.49.56-2.86 1.06-4.12.5-1.25 1.16-2.42 1.97-3.49.81-1.07 1.81-2.15 3.01-3.24.95-.84 1.82-1.65 2.64-2.45.81-.79 1.5-1.59 2.09-2.38.58-.79 1.04-1.63 1.36-2.51.32-.88.48-1.82.48-2.82 0-2.37-.55-4.14-1.65-5.31-1.1-1.17-2.73-1.76-4.87-1.76-.86 0-1.71.13-2.53.4-.82.27-1.55.69-2.19 1.27-.64.59-1.16 1.33-1.55 2.24-.39.91-.6 1.98-.63 3.24h-12.12c.03-2.93.54-5.45 1.54-7.59 1-2.13 2.36-3.89 4.06-5.29 1.7-1.39 3.7-2.43 6-3.11 2.3-.68 4.77-1.03 7.42-1.03 2.93 0 5.54.36 7.86 1.09 2.31.73 4.26 1.78 5.85 3.16 1.59 1.38 2.81 3.09 3.66 5.14.85 2.05 1.27 4.38 1.27 7 0 1.84-.28 3.5-.84 4.97-.56 1.48-1.31 2.87-2.26 4.18a29.99 29.99 0 01-3.26 3.78 142.29 142.29 0 01-3.89 3.7c-.78.72-1.43 1.45-1.94 2.17-.52.73-.94 1.49-1.25 2.28-.32.79-.54 1.64-.67 2.55-.12.91-.2 1.9-.23 2.99h-10.7zm-1.11 12.94c0-.91.16-1.74.47-2.51.32-.77.76-1.44 1.34-2 .58-.56 1.28-1.01 2.1-1.34.82-.33 1.74-.5 2.76-.5 1.02 0 1.94.17 2.76.5.82.33 1.52.78 2.1 1.34.58.56 1.02 1.23 1.34 2 .32.77.48 1.61.48 2.51 0 .88-.16 1.7-.48 2.47-.31.77-.76 1.44-1.34 2-.58.56-1.28 1-2.1 1.32-.82.32-1.74.47-2.76.47-1.02 0-1.93-.16-2.76-.47-.82-.32-1.53-.76-2.1-1.32a5.865 5.865 0 01-1.34-2 6.58 6.58 0 01-.47-2.47z\" class=\"iconO_svg__st0\"></path><g><path d=\"M34 316.77h28v3H34z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M172 316.77h39v3h-39z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M229 316.77h14v3h-14z\" class=\"iconO_svg__st0\"></path></g><path d=\"M126 262.77v14.16c0 3.75-2.44 7.2-6.08 8.1-5.21 1.28-9.92-2.86-9.92-8.07v-14.19h16z\" class=\"iconO_svg__st0\"></path><g><path d=\"M175 319.77H60v-17h115v17zm-112-3h109v-11H63v11z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M84.9 304.17l-2.5-1.67a33.18 33.18 0 005.59-18.48v-22.25h3v22.25a36.08 36.08 0 01-6.09 20.15z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M153.1 304.17a36.193 36.193 0 01-6.1-20.15v-22.25h3v22.25c0 6.61 1.93 13 5.59 18.48l-2.49 1.67z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M155 262.77H5.65c-3.11 0-5.65-2.53-5.65-5.65V88.42c0-3.11 2.53-5.65 5.65-5.65h224.71c3.11 0 5.65 2.53 5.65 5.65v65.35h-3V88.42c0-1.46-1.19-2.65-2.65-2.65H5.65C4.19 85.77 3 86.96 3 88.42v168.71c0 1.46 1.19 2.65 2.65 2.65H155v2.99z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M154 248.77H14v-152h208v74h-3v-71H17v146h137z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M289.66 230.9l-.36-.36 2.12-2.12.36.36-2.12 2.12zm-3.19-3.19l-2.83-2.83 2.12-2.12 2.83 2.83-2.12 2.12zm-5.66-5.66l-2.83-2.83 2.12-2.12 2.83 2.83-2.12 2.12zm-5.66-5.65l-2.83-2.83 2.12-2.12 2.83 2.83-2.12 2.12zm-5.65-5.66l-2.83-2.83 2.12-2.12 2.83 2.83-2.12 2.12zm-5.66-5.66l-2.83-2.83 2.12-2.12 2.83 2.83-2.12 2.12z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M192 75.77h-3V28.64c0-4.89 4.15-8.87 9.25-8.87H223v3h-24.75c-3.45 0-6.25 2.63-6.25 5.87v47.13zM306.76 178.77H263v-3h43.76c3.44 0 6.24-2.63 6.24-5.86V28.63c0-3.23-2.8-5.86-6.24-5.86H292v-3h14.76c5.09 0 9.24 3.97 9.24 8.86v141.28c0 4.89-4.14 8.86-9.24 8.86z\" class=\"iconO_svg__st0\"></path><path d=\"M303 165.77h-41v-3h38v-121h-95v33h-3v-36h101z\" class=\"iconO_svg__st0\"></path><path d=\"M283 41.77h-62V23.74c0-5.49 4.47-9.97 9.97-9.97h42.07c5.5 0 9.97 4.47 9.97 9.97v18.03zm-59-3h56V23.74c0-3.84-3.12-6.97-6.97-6.97h-42.07c-3.84 0-6.97 3.12-6.97 6.97v15.03z\" class=\"iconO_svg__st0\"></path><path d=\"M270 16.77h-36V8.11c0-4.04 3.29-7.33 7.33-7.33h21.34c4.04 0 7.33 3.29 7.33 7.33v8.66zm-33-3h30V8.11c0-2.39-1.94-4.33-4.33-4.33h-21.34c-2.39 0-4.33 1.94-4.33 4.33v5.66zM280.85 76.06l-8-7.48 2.05-2.19 5.46 5.11 7.57-10.9 2.46 1.72zM280.85 110l-8-7.48 2.05-2.19 5.46 5.11 7.57-10.9 2.46 1.72zM280.85 143.94l-8-7.48 2.05-2.19 5.46 5.11 7.57-10.9 2.46 1.71zM218 63.77h46v3h-46zM248 72.77h16v3h-16z\" class=\"iconO_svg__st0\"></path><g><path d=\"M248 97.77h16v3h-16z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M248 106.77h16v3h-16z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M248 131.77h16v3h-16z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M248 139.77h16v3h-16z\" class=\"iconO_svg__st0\"></path></g></g><g><path d=\"M28.58 228.96l-2.66-1.37 17.18-33.55 13.96 21.7 11.05-9.98 2.02 2.23-13.69 12.35-13.04-20.3z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M210 130.77h-3v-16h-15v-3h18z\" class=\"iconO_svg__st0\"></path></g><g><path transform=\"rotate(-44.996 196.36 125.203)\" d=\"M179.36 123.71h34.02v3h-34.02z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M288.51 318.4l-12.34-.25-3.14-9.42c-1.74-.59-3.42-1.33-5.02-2.2l-9.05 4.08-8.55-8.9 4.44-8.89c-.93-1.87-1.67-3.84-2.21-5.86l2.9-.77c.54 2.05 1.32 4.04 2.31 5.92l.36.68-4.18 8.36 5.61 5.85 8.52-3.84.67.39c1.83 1.06 3.79 1.92 5.82 2.56l.73.23 2.95 8.86 8.11.17 3.31-8.73.74-.2a28.44 28.44 0 005.92-2.32l.68-.36 8.36 4.18 5.85-5.61-3.84-8.52.39-.67a28.34 28.34 0 002.55-5.82l.23-.74 8.87-2.95.16-8.1-8.74-3.31-.2-.74c-.54-2.04-1.32-4.03-2.31-5.92l-.36-.68 4.18-8.36-5.61-5.84-8.52 3.84-.67-.39a28.475 28.475 0 00-5.82-2.55l-.74-.23-3.28-9.87 2.85-.95 2.8 8.42c1.74.59 3.42 1.33 5.02 2.2l9.06-4.09 8.55 8.9-4.45 8.89c.81 1.65 1.48 3.36 2 5.11l9.29 3.52-.25 12.33-9.42 3.14c-.58 1.73-1.32 3.41-2.2 5.02l4.08 9.06-8.9 8.55-8.88-4.44c-1.64.81-3.35 1.48-5.11 2l-3.52 9.26zm-5.37-24.15h-.32c-6.13-.12-11.6-3.86-13.94-9.53l2.77-1.15c1.89 4.56 6.29 7.58 11.23 7.68 3.32.07 6.46-1.16 8.86-3.46 2.39-2.3 3.75-5.39 3.81-8.71a12.3 12.3 0 00-3.46-8.85c-2.3-2.39-5.39-3.75-8.7-3.81l.06-3c4.12.08 7.95 1.76 10.81 4.74s4.38 6.87 4.29 10.99c-.08 4.12-1.76 7.96-4.74 10.81a15.315 15.315 0 01-10.67 4.29z\" id=\"iconO_svg__gear-5-icon_6_\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M139.81 68.77H106v-3h31.11c.13-3.06-.12-11.05-5.16-18.83-6.33-9.76-22.49-11.65-22.65-11.67l-1.48-.16.15-1.48c.01-.12 1.13-12.26-6.87-21.11C95.39 6.2 86.44 3 74.5 3c-11.44 0-20.21 3.2-26.06 9.51-9.01 9.71-8.09 23.69-8.08 23.83l.1 1.38-1.37.21c-.11.02-10.79 1.78-17.84 10.33-4.29 5.21-4.71 12.89-4.29 18.41l-2.99.22c-.45-6.07.04-14.55 4.97-20.54 6.34-7.7 15.08-10.36 18.38-11.13-.04-3.95.6-15.78 8.9-24.74C52.67 3.53 62.18 0 74.5 0c12.84 0 22.55 3.54 28.85 10.53 7.27 8.06 7.77 18.22 7.68 21.96 4.34.71 17.43 3.57 23.43 12.82 7.01 10.81 5.59 21.71 5.52 22.17l-.17 1.29z\" class=\"iconO_svg__st0\"></path><path d=\"M56.05 48.78l-2.34-1.87 20.62-25.78 20.62 25.78-2.34 1.87-18.28-22.85z\" class=\"iconO_svg__st0\"></path><path d=\"M73 23.77h3v52h-3zM84 65.77h10v3H84z\" class=\"iconO_svg__st0\"></path></g><g><path d=\"M148.55 34.8l-3-.15.6-11.87 11.09-.03-7.47-21.51 23.3 10.18-1.2 2.75-17.02-7.44 6.6 19.01-12.44.03z\" class=\"iconO_svg__st0\"></path></g>")],2)}
var iconOvue_type_template_id_76bbf510_staticRenderFns = []


// CONCATENATED MODULE: ./assets/svg/iconO.svg?vue&type=template&id=76bbf510&

// CONCATENATED MODULE: ./assets/svg/iconO.svg

var iconO_script = {}


/* normalize component */

var iconO_component = Object(componentNormalizer["a" /* default */])(
  iconO_script,
  iconOvue_type_template_id_76bbf510_render,
  iconOvue_type_template_id_76bbf510_staticRenderFns,
  false,
  null,
  null,
  "50a12ab2"
  
)

/* harmony default export */ var iconO = (iconO_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Advantages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Advantagesvue_type_script_lang_js_ = ({
  components: {
    IconT: iconT,
    IconTH: iconTH,
    IconO: iconO
  }
});
// CONCATENATED MODULE: ./components/Advantages.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Advantagesvue_type_script_lang_js_ = (Advantagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Advantages.vue



function Advantages_injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Advantages_component = Object(componentNormalizer["a" /* default */])(
  components_Advantagesvue_type_script_lang_js_,
  Advantagesvue_type_template_id_471fce0e_render,
  Advantagesvue_type_template_id_471fce0e_staticRenderFns,
  false,
  Advantages_injectStyles,
  null,
  "11565518"
  
)

/* harmony default export */ var Advantages = (Advantages_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Contacts.vue?vue&type=template&id=7ab0d476&
var Contactsvue_type_template_id_7ab0d476_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.send)?("<div"+(_vm._ssrClass(null,_vm.$style.fWrap))+" style=\"margin: 0 auto\">Отлично! Я свяжусь с вами в ближайшее время.\n    </div>"):("<div"+(_vm._ssrClass(null,_vm.$style.fWrap))+"><div class=\"title\">У вас остались вопросы?</div> <div"+(_vm._ssrClass(null,_vm.$style.form))+"><div"+(_vm._ssrClass(null,_vm.$style.fSubTitle))+">Оставьте свой телефон и мы вам перезвоним.</div> <div class=\"field\" style=\"max-width: 400px\"><div class=\"control\"><input type=\"text\" placeholder=\"Введите имя\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"input\"></div></div> <div class=\"field\" style=\"max-width: 400px\"><div class=\"control\"><input type=\"email\" placeholder=\"Введите номер телефона\""+(_vm._ssrAttr("value",(_vm.phone)))+" class=\"input\"></div></div> <button class=\"button is-primary\">Отправить</button></div></div>"))+" <div"+(_vm._ssrClass("columns is-mobile is-multiline",_vm.$style.wrap))+"><div class=\"column is-full title\" style=\"color: #fff !important\">Немного обо мне</div> <div"+(_vm._ssrClass("column is-half-desktop is-full-mobile",_vm.$style.info))+"><figure class=\"image is-128x128\"><img src=\"https://i.ibb.co/DQ4MQLh/Whats-App-Image-2021-01-23-at-00-59-35.jpg\""+(_vm._ssrClass(null,_vm.$style.img))+"></figure> <div"+(_vm._ssrClass(null,_vm.$style.id))+"><p"+(_vm._ssrClass(null,_vm.$style.id__name))+">Поляков Никита</p><p"+(_vm._ssrClass(null,_vm.$style.id__subName))+">Ваш Мастер</p></div></div> <div class=\"column is-half-desktop is-full-mobile\"><div"+(_vm._ssrClass(null,_vm.$style.desc))+">\n          &quot;Работаю с электроникой с детства и постоянно повышаю уровень квалификации. Знаю как решить любые проблемы с компьютерами и гаджетами недорого. \nЧерез мои руки прошли несколько тысяч устройств, которые до сих пор радуют своих хозяев.&quot;\n        </div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.icons))+">","</div>",[_c('fa',{staticStyle:{"color":"#00d1b2"},attrs:{"icon":['fab', 'instagram']}}),_vm._ssrNode(" "),_c('fa',{staticStyle:{"color":"#00d1b2","margin":"0 10px"},attrs:{"icon":['fab', 'youtube']}}),_vm._ssrNode(" "),_c('fa',{class:_vm.$style.icon,staticStyle:{"color":"#00d1b2"},attrs:{"icon":['fab', 'vk']}})],2)],2)}
var Contactsvue_type_template_id_7ab0d476_staticRenderFns = []


// CONCATENATED MODULE: ./components/Contacts.vue?vue&type=template&id=7ab0d476&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(15);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contacts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Contactsvue_type_script_lang_js_ = ({
  data() {
    return {
      send: false,
      name: '',
      phone: ''
    };
  },

  // updated() {
  //   // this.send = true;
  //   // console.log(this.send)
  // },
  methods: {
    sendForm() {
      //       this.$mail.send({
      //         from: this.name,
      //         subject: this.name,
      //         text: this.phone,
      //   to: 'bettercallnik@gmail.com',
      // })
      this.$axios.$post('/mail/send', {
        from: this.name,
        subject: this.name,
        text: this.phone,
        to: 'bettercallnik@gmail.com'
      });
      this.send = true; // console.log(this.send)
    }

  }
});
// CONCATENATED MODULE: ./components/Contacts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contactsvue_type_script_lang_js_ = (Contactsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Contacts.vue



function Contacts_injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Contacts_component = Object(componentNormalizer["a" /* default */])(
  components_Contactsvue_type_script_lang_js_,
  Contactsvue_type_template_id_7ab0d476_render,
  Contactsvue_type_template_id_7ab0d476_staticRenderFns,
  false,
  Contacts_injectStyles,
  null,
  "d5edff7a"
  
)

/* harmony default export */ var Contacts = (Contacts_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=6f2ebf2c&
var Footervue_type_template_id_6f2ebf2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.wrap},[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#top'),expression:"'#top'"}],class:_vm.$style.logoWrap},[_vm._ssrNode("<div style=\"display: flex\"><div style=\"height: 35px;  width: 12px; background: #fff; margin: 0 15px 0 0\"></div> <div style=\"height: 35px;  width: 12px; background: #fff;\"></div></div> <div"+(_vm._ssrClass(null,_vm.$style.logoText))+">Polyakov</div>")])])}
var Footervue_type_template_id_6f2ebf2c_staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=6f2ebf2c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/svg/logoWhite.svg?vue&type=template&id=0e593eb9&
var logoWhitevue_type_template_id_0e593eb9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"version":"1.1","id":"logoWhite_svg__Слой_1","xmlns":"http://www.w3.org/2000/svg","x":"0","y":"0","viewBox":"0 0 105 302","xml:space":"preserve"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".logoWhite_svg__st0{fill:#fff}")]),_vm._ssrNode("<path d=\"M0 0h35v302H0zM70 0h35v302H70z\" class=\"logoWhite_svg__st0\"></path>")],2)}
var logoWhitevue_type_template_id_0e593eb9_staticRenderFns = []


// CONCATENATED MODULE: ./assets/svg/logoWhite.svg?vue&type=template&id=0e593eb9&

// CONCATENATED MODULE: ./assets/svg/logoWhite.svg

var logoWhite_script = {}


/* normalize component */

var logoWhite_component = Object(componentNormalizer["a" /* default */])(
  logoWhite_script,
  logoWhitevue_type_template_id_0e593eb9_render,
  logoWhitevue_type_template_id_0e593eb9_staticRenderFns,
  false,
  null,
  null,
  "04f96c0c"
  
)

/* harmony default export */ var logoWhite = (logoWhite_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  components: {
    LogoWhite: logoWhite
  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  Footervue_type_template_id_6f2ebf2c_render,
  Footervue_type_template_id_6f2ebf2c_staticRenderFns,
  false,
  Footer_injectStyles,
  null,
  "c39770ea"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    Header: Header,
    Title: Title,
    Footer: Footer,
    Advantages: Advantages,
    Contacts: Contacts,
    Logo: logo
  } // computed: {
  //   ...mapState({
  //     modal: "modal",
  //   }),
  // },
  // methods: {
  //   closeM() {
  //     console.log(this.modal);
  //   },
  // },

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_b67f1eda_render,
  defaultvue_type_template_id_b67f1eda_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "2dd7e1b2"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(148), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(80);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "x-forwarded-host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(149);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(55);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(35);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(22);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(36);

// CONCATENATED MODULE: ./.nuxt/fontawesome.js





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faSearch"], free_solid_svg_icons_["faRubleSign"], free_solid_svg_icons_["faPhone"], free_solid_svg_icons_["faArrowRight"], free_brands_svg_icons_["faVk"], free_brands_svg_icons_["faInstagram"], free_brands_svg_icons_["faYoutube"]);
fontawesome_svg_core_["config"].autoAddCss = false;
external_vue_default.a.component('fa', vue_fontawesome_["FontAwesomeIcon"]);
external_vue_default.a.component('faLayers', vue_fontawesome_["FontAwesomeLayers"]);
external_vue_default.a.component('faLayersText', vue_fontawesome_["FontAwesomeLayersText"]);
// EXTERNAL MODULE: ./.nuxt/dist.plugin.6a6953be.js
var dist_plugin_6a6953be = __webpack_require__(56);
var dist_plugin_6a6953be_default = /*#__PURE__*/__webpack_require__.n(dist_plugin_6a6953be);

// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: ./axios.js (mode: 'all')

 // Source: ./vue-scrollto.js (mode: 'client')

 // Source: ./fontawesome.js (mode: 'all')

 // Source: ./dist.plugin.6a6953be.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "htmlAttrs": {
        "lang": "ru"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof dist_plugin_6a6953be_default.a === 'function') {
    await dist_plugin_6a6953be_default()(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js










 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("vue2-perfect-scrollbar");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map