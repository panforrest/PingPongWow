/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([604,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Example = exports.Input = exports.Account = exports.Nav = exports.Results = exports.Search = undefined;

var _Search = __webpack_require__(390);

var _Search2 = _interopRequireDefault(_Search);

var _Results = __webpack_require__(369);

var _Results2 = _interopRequireDefault(_Results);

var _Nav = __webpack_require__(334);

var _Nav2 = _interopRequireDefault(_Nav);

var _Account = __webpack_require__(333);

var _Account2 = _interopRequireDefault(_Account);

var _Input = __webpack_require__(332);

var _Input2 = _interopRequireDefault(_Input);

var _Example = __webpack_require__(331);

var _Example2 = _interopRequireDefault(_Example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your container components here. The Users
	container is just an example and you will likely
	remove it in favor of your own containers. 
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// import Users from './Users'
exports.Search = _Search2.default;
exports.Results = _Results2.default;
exports.Nav = _Nav2.default;
exports.Account = _Account2.default;
exports.Input = _Input2.default;
exports.Example = _Example2.default;
// import MyApp from './MyApp'

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 254,
	"./af.js": 254,
	"./ar": 253,
	"./ar-dz": 252,
	"./ar-dz.js": 252,
	"./ar-kw": 251,
	"./ar-kw.js": 251,
	"./ar-ly": 250,
	"./ar-ly.js": 250,
	"./ar-ma": 249,
	"./ar-ma.js": 249,
	"./ar-sa": 248,
	"./ar-sa.js": 248,
	"./ar-tn": 247,
	"./ar-tn.js": 247,
	"./ar.js": 253,
	"./az": 246,
	"./az.js": 246,
	"./be": 245,
	"./be.js": 245,
	"./bg": 244,
	"./bg.js": 244,
	"./bm": 243,
	"./bm.js": 243,
	"./bn": 242,
	"./bn.js": 242,
	"./bo": 241,
	"./bo.js": 241,
	"./br": 240,
	"./br.js": 240,
	"./bs": 239,
	"./bs.js": 239,
	"./ca": 238,
	"./ca.js": 238,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 236,
	"./cv.js": 236,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 234,
	"./da.js": 234,
	"./de": 233,
	"./de-at": 232,
	"./de-at.js": 232,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 233,
	"./dv": 230,
	"./dv.js": 230,
	"./el": 229,
	"./el.js": 229,
	"./en-au": 228,
	"./en-au.js": 228,
	"./en-ca": 227,
	"./en-ca.js": 227,
	"./en-gb": 226,
	"./en-gb.js": 226,
	"./en-ie": 225,
	"./en-ie.js": 225,
	"./en-il": 224,
	"./en-il.js": 224,
	"./en-nz": 223,
	"./en-nz.js": 223,
	"./eo": 222,
	"./eo.js": 222,
	"./es": 221,
	"./es-do": 220,
	"./es-do.js": 220,
	"./es-us": 219,
	"./es-us.js": 219,
	"./es.js": 221,
	"./et": 218,
	"./et.js": 218,
	"./eu": 217,
	"./eu.js": 217,
	"./fa": 216,
	"./fa.js": 216,
	"./fi": 215,
	"./fi.js": 215,
	"./fo": 214,
	"./fo.js": 214,
	"./fr": 213,
	"./fr-ca": 212,
	"./fr-ca.js": 212,
	"./fr-ch": 211,
	"./fr-ch.js": 211,
	"./fr.js": 213,
	"./fy": 210,
	"./fy.js": 210,
	"./gd": 209,
	"./gd.js": 209,
	"./gl": 208,
	"./gl.js": 208,
	"./gom-latn": 207,
	"./gom-latn.js": 207,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 205,
	"./he.js": 205,
	"./hi": 204,
	"./hi.js": 204,
	"./hr": 203,
	"./hr.js": 203,
	"./hu": 202,
	"./hu.js": 202,
	"./hy-am": 201,
	"./hy-am.js": 201,
	"./id": 200,
	"./id.js": 200,
	"./is": 199,
	"./is.js": 199,
	"./it": 198,
	"./it.js": 198,
	"./ja": 197,
	"./ja.js": 197,
	"./jv": 196,
	"./jv.js": 196,
	"./ka": 195,
	"./ka.js": 195,
	"./kk": 194,
	"./kk.js": 194,
	"./km": 193,
	"./km.js": 193,
	"./kn": 192,
	"./kn.js": 192,
	"./ko": 191,
	"./ko.js": 191,
	"./ky": 190,
	"./ky.js": 190,
	"./lb": 189,
	"./lb.js": 189,
	"./lo": 188,
	"./lo.js": 188,
	"./lt": 187,
	"./lt.js": 187,
	"./lv": 186,
	"./lv.js": 186,
	"./me": 185,
	"./me.js": 185,
	"./mi": 184,
	"./mi.js": 184,
	"./mk": 183,
	"./mk.js": 183,
	"./ml": 182,
	"./ml.js": 182,
	"./mn": 181,
	"./mn.js": 181,
	"./mr": 180,
	"./mr.js": 180,
	"./ms": 179,
	"./ms-my": 178,
	"./ms-my.js": 178,
	"./ms.js": 179,
	"./mt": 177,
	"./mt.js": 177,
	"./my": 176,
	"./my.js": 176,
	"./nb": 175,
	"./nb.js": 175,
	"./ne": 174,
	"./ne.js": 174,
	"./nl": 173,
	"./nl-be": 172,
	"./nl-be.js": 172,
	"./nl.js": 173,
	"./nn": 171,
	"./nn.js": 171,
	"./pa-in": 170,
	"./pa-in.js": 170,
	"./pl": 169,
	"./pl.js": 169,
	"./pt": 168,
	"./pt-br": 167,
	"./pt-br.js": 167,
	"./pt.js": 168,
	"./ro": 166,
	"./ro.js": 166,
	"./ru": 165,
	"./ru.js": 165,
	"./sd": 164,
	"./sd.js": 164,
	"./se": 163,
	"./se.js": 163,
	"./si": 162,
	"./si.js": 162,
	"./sk": 161,
	"./sk.js": 161,
	"./sl": 160,
	"./sl.js": 160,
	"./sq": 159,
	"./sq.js": 159,
	"./sr": 158,
	"./sr-cyrl": 157,
	"./sr-cyrl.js": 157,
	"./sr.js": 158,
	"./ss": 156,
	"./ss.js": 156,
	"./sv": 155,
	"./sv.js": 155,
	"./sw": 154,
	"./sw.js": 154,
	"./ta": 153,
	"./ta.js": 153,
	"./te": 152,
	"./te.js": 152,
	"./tet": 151,
	"./tet.js": 151,
	"./tg": 150,
	"./tg.js": 150,
	"./th": 149,
	"./th.js": 149,
	"./tl-ph": 148,
	"./tl-ph.js": 148,
	"./tlh": 147,
	"./tlh.js": 147,
	"./tr": 146,
	"./tr.js": 146,
	"./tzl": 145,
	"./tzl.js": 145,
	"./tzm": 144,
	"./tzm-latn": 143,
	"./tzm-latn.js": 143,
	"./tzm.js": 144,
	"./ug-cn": 142,
	"./ug-cn.js": 142,
	"./uk": 141,
	"./uk.js": 141,
	"./ur": 140,
	"./ur.js": 140,
	"./uz": 139,
	"./uz-latn": 138,
	"./uz-latn.js": 138,
	"./uz.js": 139,
	"./vi": 137,
	"./vi.js": 137,
	"./x-pseudo": 136,
	"./x-pseudo.js": 136,
	"./yo": 135,
	"./yo.js": 135,
	"./zh-cn": 134,
	"./zh-cn.js": 134,
	"./zh-hk": 133,
	"./zh-hk.js": 133,
	"./zh-tw": 132,
	"./zh-tw.js": 132
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 330;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = __webpack_require__(323);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(329);

__webpack_require__(326);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// CSS Modules, react-datepicker-cssmodules.css


var Example = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.state = {
      startDate: (0, _moment2.default)()
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Example, [{
    key: 'handleChange',
    value: function handleChange(date) {
      this.setState({
        startDate: date
      });
      console.log('handleChange: ' + this.state.startDate);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactDatepicker2.default, {
        selected: this.state.startDate,
        onChange: this.handleChange,
        showTimeSelect: true,
        timeFormat: 'HH:mm',
        timeIntervals: 60,
        dateFormat: 'LLL',
        timeCaption: 'time'

      });
    }
  }]);

  return Example;
}(_react2.default.Component);

exports.default = Example;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(46);

var _actions = __webpack_require__(67);

var _actions2 = _interopRequireDefault(_actions);

var _reactDropzone = __webpack_require__(322);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _turbo = __webpack_require__(265);

var _turbo2 = _interopRequireDefault(_turbo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));

        _this.state = {
            invite: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
        };
        return _this;
    }

    // componentDidMount(){

    //     console.log('componentDidMount: ')
    //     this.props.fetchInvites()
    // }

    _createClass(Input, [{
        key: 'updateInvite',
        value: function updateInvite(attr, event) {
            event.preventDefault();
            console.log(attr + ' == ' + event.target.value);
            var updated = Object.assign({}, this.state.invite);
            updated[attr] = event.target.value;
            this.setState({
                invite: updated
            });
        }
    }, {
        key: 'addInvite',
        value: function addInvite() {
            if (this.props.account.currentUser == null) {
                alert('Please log in or register to send invites');
                return;
            }

            var currentUser = this.props.account.currentUser;
            var updated = Object.assign({}, this.state.invite);
            updated['position'] = this.props.map.currentLocation;
            updated['host'] = {
                id: currentUser.id,
                username: currentUser.username,
                image: currentUser.image || ''
            };

            console.log('ADD INVITE: ' + JSON.stringify(updated));
            this.props.addInvite(updated).then(function (data) {
                console.log('INVITE ADDED: ' + JSON.stringify(data));
            }).catch(function (err) {
                console.log('ERR: ' + err.message);
            });
        }
    }, {
        key: 'uploadImage',
        value: function uploadImage(files) {
            var _this2 = this;

            var image = files[0];
            console.log('uploadImage: ' + image.name);
            var turboClient = (0, _turbo2.default)({
                site_id: '5ae5315e0d44f900146683d0'
            });

            turboClient.uploadFile(image).then(function (data) {
                // console.log('FILE UPLOADED: ' + JSON.stringify(data))
                // console.log('FILE UPLOADED: ' + data.result.url)
                var updated = Object.assign({}, _this2.state.invite);
                updated['image'] = data.result.url;
                _this2.setState({
                    invite: updated
                });
            }).catch(function (err) {
                console.log('UPLOAD ERROR: ' + err.message);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement('hr', null),
                _react2.default.createElement('input', { onChange: this.updateInvite.bind(this, 'label'), className: 'formControl', type: 'text', placeholder: 'Match Invite Detail' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { onChange: this.updateInvite.bind(this, 'date'), className: 'formControl', type: 'text', placeholder: 'Date/Time' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                this.state.invite.image == null ? null : _react2.default.createElement('img', { src: this.state.invite.image + '=s120-c' }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactDropzone2.default,
                        { onDrop: this.uploadImage.bind(this), className: 'btn btn-info btn-fill', style: { marginRight: 16 } },
                        'Add Image'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.addInvite.bind(this), className: 'btn btn-success' },
                        'Add Invite'
                    )
                )
            );
        }
    }]);

    return Input;
}(_react.Component);

var localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
};

var stateToProps = function stateToProps(state) {
    return {
        invite: state.invite,
        map: state.map,
        account: state.account
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        addInvite: function addInvite(invite) {
            return dispatch(_actions2.default.addInvite(invite));
        },
        fetchInvites: function fetchInvites(params) {
            return dispatch(_actions2.default.fetchInvites(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Input);

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(86);

var _reactRedux = __webpack_require__(46);

var _actions = __webpack_require__(67);

var _actions2 = _interopRequireDefault(_actions);

var _containers = __webpack_require__(266);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_Component) {
    _inherits(Account, _Component);

    function Account() {
        _classCallCheck(this, Account);

        return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
    }

    _createClass(Account, [{
        key: 'register',


        // componentDidMount(){
        //     this.props.checkCurrentUser()
        // }

        value: function register(registration) {
            this.props.signup(registration);
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            this.props.login(credentials);
        }
    }, {
        key: 'render',
        value: function render() {
            var currentUser = this.props.account.currentUser;

            return _react2.default.createElement(
                'div',
                null,
                currentUser == null ? _react2.default.createElement(_presentation.Register, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Welcome!'
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        currentUser.username
                    ),
                    _react2.default.createElement(_containers.Input, null)
                )
            );
        }
    }]);

    return Account;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        account: state.account
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        signup: function signup(params) {
            return dispatch(_actions2.default.signup(params));
        },
        login: function login(params) {
            return dispatch(_actions2.default.login(params));
        }
        // checkCurrentUser: () => dispatch(actions.checkCurrentUser())
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Account);

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
	_inherits(Nav, _Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			// const currentUser = (this.props.user.currentUser==null) ? null: <p>Welcome, {this.props.user.currentUser}</p>
			var currentUser = this.props.user.currentUser;

			return _react2.default.createElement(
				'nav',
				null,
				_react2.default.createElement(
					'span',
					{ 'class': 'navbar-brand mb-0 h1' },
					'PingPongWow'
				),
				_react2.default.createElement(
					'a',
					{ 'class': 'nav-tab', href: '/auth/logout' },
					' ',
					currentUser == null ? null : _react2.default.createElement(
						'p',
						null,
						'Log out'
					),
					' '
				)
			);
		}
	}]);

	return Nav;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		user: state.account
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps)(Nav);

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(86);

var _reactRedux = __webpack_require__(46);

var _actions = __webpack_require__(67);

var _actions2 = _interopRequireDefault(_actions);

var _reactBootstrap = __webpack_require__(324);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Dropzone from 'react-dropzone'
// import turbo from 'turbo360'


var Results = function (_Component) {
    _inherits(Results, _Component);

    function Results() {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

        _this.state = {
            showModal: false,
            invite: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
        };
        return _this;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount: ');
            this.props.fetchInvites();
        }

        // updateInvite(attr, event){
        //     event.preventDefault()
        //     console.log(attr + ' == ' + event.target.value)
        //     let updated = Object.assign({}, this.state.invite)
        //     updated[attr] = event.target.value
        //     this.setState({
        //         invite: updated
        //     })
        // }

        // addInvite(){
        //     // // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
        //     // let newInvite = Object.assign({}, this.state.invite)
        //     // const len = this.props.invite.all.length+1
        //     // newInvite['id'] = len.toString()
        //     // // newInvite['id'] = 100
        //     // // newInvite['key'] = '100'
        //     // // newInvite['defaultAnimation'] = 2
        //     // newInvite['position'] = this.props.map.currentLocation
        //     // this.props.addInvite(newInvite)
        //     if (this.props.account.currentUser == null) {
        //         alert('Please log in or register to send invite')
        //         return
        //     }

        //     const currentUser = this.props.account.currentUser
        //     let updated = Object.assign({}, this.state.invite)
        //     updated['position'] = this.props.map.currentLocation
        //     updated['host'] = {
        //         id: currentUser.id,
        //         username: currentUser.username,
        //         image: currentUser.image || ''
        //     }

        //     console.log('ADD INVITE: ' + JSON.stringify(updated))
        //     this.props.addInvite(updated)
        //     .then(data => {
        //         console.log('INVITE ADDED: ' + JSON.stringify(data))
        //     })
        //     .catch(err => {
        //         console.log('ERR: ' + err.message)
        //     })
        // }

        // uploadImage(files){
        //     const image = files[0]
        //     console.log('uploadImage: ' + image.name)
        //     const turboClient = turbo({
        //         site_id: '5b0983c0de0dea0014f1ad5a'
        //     })

        //     turboClient.uploadFile(image)
        //     .then(data => {
        //         // console.log('FILE UPLOADED: ' + JSON.stringify(data))
        //         // console.log('FILE UPLOADED: ' + data.result.url)
        //         let updated = Object.assign({}, this.state.invite)
        //         updated['image'] = data.result.url
        //         this.setState({
        //             invite: updated
        //         })
        //     })
        //     .catch(err => {
        //         console.log('UPLOAD ERROR: ' + err.message)
        //     })
        // }

    }, {
        key: 'onPurchase',
        value: function onPurchase(invite, event) {
            event.preventDefault();
            this.setState({
                showModal: true
            });
            console.log('onPurchase: ' + JSON.stringify(invite));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // const invites = [
            //     {id:1, key:'1', date:'Sat, May 26, 2018', defaultAnimation:2, label:'Match 1', position:{lat:40.7224017, lng:-73.9896719}},
            //     {id:2, key:'2', date:'Sun, May 27, 2018', defaultAnimation:2, label:'Ping Pong 2', position:{lat:40.7124017, lng:-73.9896719}}
            // ]
            var invites = this.props.invite.all || [];

            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    invites.map(function (invite, i) {
                        return _react2.default.createElement(_presentation.Invite, { key: invite.id, onPurchase: _this2.onPurchase.bind(_this2, invite), invite: invite });
                    })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { bsSize: 'sm', show: this.state.showModal, onHide: function onHide() {
                            _this2.setState({ showModal: false });
                        } },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        { style: localStyle.modal },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'This is a modal'
                        )
                    )
                )
            );
        }
    }]);

    return Results;
}(_react.Component);

var localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
};

var stateToProps = function stateToProps(state) {
    return {
        invite: state.invite,
        map: state.map
        // account: state.account
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        // addInvite: (invite) => dispatch(actions.addInvite(invite)),
        fetchInvites: function fetchInvites(params) {
            return dispatch(_actions2.default.fetchInvites(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Results);

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(23);

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(21);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// standard superagent get request:
var getRequst = function getRequst(url, params) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.get(url).query(params).set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

var postRequst = function postRequst(url, body) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.post(url).send(body).set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

exports.default = {
	post: function post(url, body, actionType) {
		return function (dispatch) {
			return postRequst(url, body).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	get: function get(url, params, actionType) {
		return function (dispatch) {
			return getRequst(url, params).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			}).catch(function (err) {
				throw err;
			});
		};
	}

};

/***/ }),

/***/ 371:
/***/ (function(module) {

module.exports = {"name":"PingPongWow","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"webpack --mode development -w","build":"npm run clean && NODE_ENV=production webpack -p && gulp prod","clean":"rm -rf ./public/dist","postinstall":"npm run build"},"dependencies":{"accepts":"^1.3.5","array-flatten":"1.1.1","bluebird":"^3.5.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","css-loader":"^0.28.11","debug":"2.6.9","depd":"^1.1.2","dotenv":"^5.0.1","encodeurl":"^1.0.2","escape-html":"^1.0.3","etag":"^1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"^1.1.2","moment":"^2.22.1","nodemon":"^1.17.1","on-finished":"^2.3.0","parseurl":"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3","qs":"6.5.1","range-parser":"^1.2.0","react":"^16.2.0","react-bootstrap":"^0.32.1","react-date-picker":"^6.10.1","react-datepicker":"^1.5.0","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0","redux":"^3.7.2","redux-thunk":"^2.2.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"^1.4.0","style-loader":"^0.21.0","superagent":"^3.8.2","turbo360":"latest","type-is":"^1.6.16","utils-merge":"1.0.1","vary":"^1.1.2","vertex360":"latest"},"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","chai":"^4.1.2","chai-http":"^3.0.0","cross-env":"^5.1.4","extract-text-webpack-plugin":"^3.0.2","gulp":"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7","mocha":"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1","rimraf":"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2","webpack":"^4.1.1","webpack-cli":"^2.0.10"},"deploy":["."],"format":"vertex","app":""};

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(265);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(371);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var getRequest = function getRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var putRequest = function putRequest(resource, entity, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var createUser = function createUser(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var login = function login(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var currentUser = function currentUser(actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var uploadFile = function uploadFile(file) {
	return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

exports.default = {

	getRequest: getRequest,
	postRequest: postRequest,
	putRequest: putRequest,
	deleteRequest: deleteRequest,
	createUser: createUser,
	login: login,
	currentUser: currentUser,
	uploadFile: uploadFile

};

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HTTPAsync = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(388);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _HTTPAsync = __webpack_require__(370);

var _HTTPAsync2 = _interopRequireDefault(_HTTPAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.HTTPAsync = _HTTPAsync2.default;

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(86);

var _reactRedux = __webpack_require__(46);

var _actions = __webpack_require__(67);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
	_inherits(Search, _Component);

	function Search() {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

		_this.state = {
			map: null,
			center: null
		};
		return _this;
	}

	_createClass(Search, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.currentUser(); //MISSING () CAN CAUSE THE accountReducer NOT CONSOLE LOG
		}
	}, {
		key: 'centerChanged',
		value: function centerChanged(center) {
			console.log('centerChanged: ' + JSON.stringify(center));
			this.props.locationChanged(center);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			// const markers = [
			//        {id:1,key:'1', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7224017, lng:-73.9896719}},
			//        {id:2,key:'2', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7024017, lng:-73.9896719}}
			//    ] 
			var invites = this.props.invite.all || [];

			var markers = [];
			invites.forEach(function (invite, i) {
				var marker = {
					key: invite.id,
					label: invite.name,
					position: invite.position,
					defaultAnimation: 2
				};

				markers.push(marker);
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_presentation.Map, {
					onMapReady: function onMapReady(map) {
						if (_this2.state.map != null) return;

						console.log('OnMapReady: ' + JSON.stringify(map.getCenter()));
						_this2.setState({
							map: map
						});
					},

					locationChanged: this.centerChanged.bind(this),
					markers: markers,
					zoom: 12,
					center: { lat: 40.7224017, lng: -73.9896719 },
					containerElement: _react2.default.createElement('div', { style: { height: 100 + '%' } }),
					mapElement: _react2.default.createElement('div', { style: { height: 100 + 'vh' } }) })
			);
		}
	}]);

	return Search;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		invite: state.invite
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		locationChanged: function locationChanged(location) {
			return dispatch(_actions2.default.locationChanged(location));
		},
		currentUser: function currentUser() {
			return dispatch(_actions2.default.currentUser());
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Search);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

        _this.state = {
            registration: {
                username: '',
                password: ''
            }
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'updateRegistration',
        value: function updateRegistration(event) {
            var updated = Object.assign({}, this.state.registration);
            updated[event.target.id] = event.target.value;
            this.setState({
                registration: updated
            });
        }
    }, {
        key: 'submitRegistration',
        value: function submitRegistration(event) {
            event.preventDefault();

            if (this.state.registration.username.length == 0) {
                alert('Please add your username.');
                return;
            }

            if (this.state.registration.password.length == 0) {
                alert('Please set your password.');
                return;
            }

            this.props.onRegister(this.state.registration);
        }
    }, {
        key: 'submitLoginCredentials',
        value: function submitLoginCredentials(event) {
            event.preventDefault();
            if (this.state.registration.username.length == 0) {
                alert('Please add your username.');
                return;
            }

            if (this.state.registration.password.length == 0) {
                alert('Please set your password.');
                return;
            }

            this.props.onLogin(this.state.registration);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Sign Up'
                ),
                _react2.default.createElement('input', { onChange: this.updateRegistration.bind(this), id: 'username', className: 'formControl', type: 'text', placeholder: 'Username' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { onChange: this.updateRegistration.bind(this), id: 'password', className: 'formControl', type: 'password', placeholder: 'Password' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.submitRegistration.bind(this), className: 'btn btn-info btn-fill', style: { marginRight: 16 } },
                    'Join'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.submitLoginCredentials.bind(this), className: 'btn btn-success' },
                    'Sign In'
                )
            );
        }
    }]);

    return Register;
}(_react.Component);

var localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
};

exports.default = Register;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    var invite = props.invite;

    return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
            "div",
            { id: "reservations" },
            _react2.default.createElement(
                "div",
                { "class": "reservation" },
                _react2.default.createElement(
                    "div",
                    { style: localStyle.inviteImage },
                    _react2.default.createElement(
                        "a",
                        { onClick: props.onPurchase.bind(undefined), herf: "#" },
                        _react2.default.createElement("img", { style: localStyle.inviteImage, src: invite.image + '=s200-c' })
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    invite.label
                ),
                _react2.default.createElement(
                    "span",
                    { "class": "reservation-date" },
                    invite.date,
                    " "
                ),
                _react2.default.createElement("img", { style: localStyle.icon, src: invite.host.image }),
                _react2.default.createElement(
                    "p",
                    null,
                    "by: ",
                    invite.host.username,
                    " "
                ),
                _react2.default.createElement("div", null)
            )
        )
    );
};

var localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: 'right'
    },
    inviteImage: {
        // width:100+'%',
        width: 125,
        padding: 3,
        // border:'1px solid #ddd',
        background: '#ffffa'
    }
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(584);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // don't forget google maps import:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC44mPpaMNvENXryYjHBHzjST1UMnYlARk"></script>

var Map = function (_Component) {
	_inherits(Map, _Component);

	function Map() {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

		_this.state = {
			map: null
		};
		return _this;
	}

	_createClass(Map, [{
		key: 'mapMoved',
		value: function mapMoved() {
			// console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
			if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
		}
	}, {
		key: 'zoomChanged',
		value: function zoomChanged() {
			// console.log('zoomChanged: '+this.state.map.getZoom())

		}
	}, {
		key: 'mapLoaded',
		value: function mapLoaded(map) {
			if (this.state.map != null) return;

			this.props.onMapReady(map);
			this.setState({
				map: map
			});
		}
	}, {
		key: 'handleMarkerClick',
		value: function handleMarkerClick(marker) {
			if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var markers = this.props.markers || [];

			return _react2.default.createElement(
				_reactGoogleMaps.GoogleMap,
				{
					ref: this.mapLoaded.bind(this),
					onDragEnd: this.mapMoved.bind(this),
					onZoomChanged: this.zoomChanged.bind(this),
					defaultZoom: this.props.zoom,
					defaultCenter: this.props.center },
				markers.map(function (marker, index) {
					return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({
						key: index,
						clickable: true,
						icon: marker.icon,
						label: marker.label,
						title: marker.key,
						onClick: _this2.handleMarkerClick.bind(_this2, marker)
					}, marker));
				})
			);
		}
	}]);

	return Map;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(Map);

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(86);

var _containers = __webpack_require__(266);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // <div className="col-md-3">
//     <Account />
// </div>


var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      map: null
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      // const markers = [
      //        {id:1,key:'1', defaultAnimation:2,label:"Match 1", position:{lat:40.7224017, lng:-73.9896719}},
      //        {id:2,key:'2', defaultAnimation:2,label:"Ping Pong 2", position:{lat:40.7024017, lng:-73.9896719}}
      //    ] 

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_containers.Search, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8' },
            _react2.default.createElement(_containers.Nav, null),
            _react2.default.createElement(_containers.Account, null),
            _react2.default.createElement(_containers.Example, null),
            _react2.default.createElement(_containers.Results, null)
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(62);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	// all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updated = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			console.log('CURRENT_USER_RECEIVED: ' + JSON.stringify(action.data));
			updated['currentUser'] = action.data.user;
			return updated;

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		default:
			return state;
	}
};

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(62);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	currentLocation: { lat: 40.72, lng: -73.98 }
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updated = Object.assign({}, state);
	switch (action.type) {

		case _constants2.default.LOCATION_CHANGED:
			console.log('LOCATION_CHANGED: ' + JSON.stringify(action.data));
			updated['currentLocation'] = action.data;
			return updated;

		default:
			return updated;
	}
};

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(62);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  // all: [
  //     {id:'1', date:'Sat, May 26, 2018', label:'Match 1', image: 'https://hoodrhetoric.com/wp-content/uploads/2016/08/Air-Jordan-1-Retro-High-OG-Banned-Black-White-555088-001.jpg', position:{lat:40.7224017, lng:-73.9896719}, host:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
  //      {id:'2', date:'Sun, May 27, 2018', label:'Ping Pong 2', image: 'https://smhttp-ssl-18667.nexcesscdn.net/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/s/i/sig-7970018-sofa-chise-3.jpg', position:{lat:40.7124017, lng:-73.9996719}, host:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
  //      {id:'3', date:'Sat, May 26, 2018', label:'Match 3', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7174017, lng:-73.9896719}, host:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
  //      {id:'4', date:'Sun, May 27, 2018', label:'Ping Pong 4', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7274017, lng:-73.9896719}, host:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
  // ]
  all: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var updated = Object.assign({}, state);

  switch (action.type) {
    case _constants2.default.INVITE_ADDED:
      var payload = action.data;
      console.log('INVITE_ADDED: ' + JSON.stringify(action.data));
      // let all = (updated.all) ? Object.assign([], updated.all) : []
      var all = Object.assign([], updated.all);
      all.push(payload.data);
      updated['all'] = all;
      return updated;

    case _constants2.default.INVITES_RECEIVED:
      updated['all'] = action.data.data;
      return updated;

    default:
      return updated;
  }
};

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(62);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.data;
			return newState;

		case _constants2.default.USERS_RECEIVED:
			newState['all'] = action.data;
			return newState;

		case _constants2.default.USER_CREATED:
			var array = newState.all ? Object.assign([], newState.all) : [];
			array.unshift(action.data);
			newState['all'] = array;
			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.accountReducer = exports.mapReducer = exports.inviteReducer = exports.userReducer = undefined;

var _userReducer = __webpack_require__(592);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _inviteReducer = __webpack_require__(591);

var _inviteReducer2 = _interopRequireDefault(_inviteReducer);

var _mapReducer = __webpack_require__(590);

var _mapReducer2 = _interopRequireDefault(_mapReducer);

var _accountReducer = __webpack_require__(589);

var _accountReducer2 = _interopRequireDefault(_accountReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.userReducer = _userReducer2.default;
exports.inviteReducer = _inviteReducer2.default;
exports.mapReducer = _mapReducer2.default;
exports.accountReducer = _accountReducer2.default;

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(119);

var _reduxThunk = __webpack_require__(594);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(593);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer,
			invite: _reducers.inviteReducer,
			map: _reducers.mapReducer,
			account: _reducers.accountReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(596);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(46);

var _Home = __webpack_require__(586);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_Home2.default, null)
);
// import Intro from './components/Intro'


_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {
	INVITE_ADDED: 'INVITE_ADDED',
	LOCATION_CHANGED: 'LOCATION_CHANGED',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
	INVITES_RECEIVED: 'INVITES_RECEIVED'
	// USERS_RECEIVED: 		'USERS_RECEIVED',
	// USER_CREATED: 			'USER_CREATED',
	// USER_LOGGED_IN: 		'USER_LOGGED_IN',
	// CURRENT_USER_RECEIVED: 	'CURRENT_USER_RECEIVED'

};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(62);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	addInvite: function addInvite(invite) {
		//    return {
		// 	type: 'INVITE_ADDED',
		// 	data: invite
		// }
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/api/invite', invite, _constants2.default.INVITE_ADDED));
		};
	},

	fetchInvites: function fetchInvites(params) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.get('/api/invite', params, _constants2.default.INVITES_RECEIVED));
		};
	},

	locationChanged: function locationChanged(location) {
		return {
			type: _constants2.default.LOCATION_CHANGED,
			data: location
		};
	},

	signup: function signup(params) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/auth/register', params, _constants2.default.CURRENT_USER_RECEIVED));
		};
	},

	login: function login(params) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/auth/login', params, _constants2.default.CURRENT_USER_RECEIVED));
		};
	},

	currentUser: function currentUser() {
		console.log('GET CURRENT USER');
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.get('/auth/currentuser', null, _constants2.default.CURRENT_USER_RECEIVED));
		};
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// Unlike addUser, register() also maintains a session for login state. After calling 
	// TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }

};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Register = exports.Map = exports.Invite = undefined;

var _Map = __webpack_require__(585);

var _Map2 = _interopRequireDefault(_Map);

var _Invite = __webpack_require__(392);

var _Invite2 = _interopRequireDefault(_Invite);

var _Register = __webpack_require__(391);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Invite = _Invite2.default;
exports.Map = _Map2.default;
exports.Register = _Register2.default; // import Nav from './Nav'
// import Footer from './Footer'
// import Item from './Item'

/***/ })

/******/ });
//# sourceMappingURL=app.map