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
/******/ 	deferredModules.push([466,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Register = exports.Map = exports.Invite = undefined;

var _Map = __webpack_require__(447);

var _Map2 = _interopRequireDefault(_Map);

var _Invite = __webpack_require__(254);

var _Invite2 = _interopRequireDefault(_Invite);

var _Register = __webpack_require__(469);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Invite = _Invite2.default;
exports.Map = _Map2.default;
exports.Register = _Register2.default; // import Nav from './Nav'
// import Footer from './Footer'
// import Item from './Item'

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(251);

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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(62);

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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(113);

var _reactRedux = __webpack_require__(62);

var _actions = __webpack_require__(137);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Dropzone from 'react-dropzone'
// import turbo from 'turbo360'
// import { Modal } from 'react-bootstrap'

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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(22);

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(20);

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

/***/ 233:
/***/ (function(module) {

module.exports = {"name":"PingPongWow","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"webpack --mode development -w","build":"npm run clean && NODE_ENV=production webpack -p && gulp prod","clean":"rm -rf ./public/dist","postinstall":"npm run build"},"dependencies":{"accepts":"^1.3.5","array-flatten":"1.1.1","bluebird":"^3.5.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","debug":"2.6.9","depd":"^1.1.2","dotenv":"^5.0.1","encodeurl":"^1.0.2","escape-html":"^1.0.3","etag":"^1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"^1.1.2","moment":"^2.20.1","nodemon":"^1.17.1","on-finished":"^2.3.0","parseurl":"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3","qs":"6.5.1","range-parser":"^1.2.0","react":"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0","redux":"^3.7.2","redux-thunk":"^2.2.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"^1.4.0","superagent":"^3.8.2","turbo360":"latest","type-is":"^1.6.16","utils-merge":"1.0.1","vary":"^1.1.2","vertex360":"latest"},"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","chai":"^4.1.2","chai-http":"^3.0.0","cross-env":"^5.1.4","gulp":"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7","mocha":"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1","rimraf":"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2","webpack":"^4.1.1","webpack-cli":"^2.0.10"},"deploy":["."],"format":"vertex","app":""};

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(136);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(233);

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

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HTTPAsync = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(250);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _HTTPAsync = __webpack_require__(232);

var _HTTPAsync2 = _interopRequireDefault(_HTTPAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.HTTPAsync = _HTTPAsync2.default;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(113);

var _reactRedux = __webpack_require__(62);

var _actions = __webpack_require__(137);

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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Input = exports.Account = exports.Nav = exports.Results = exports.Search = undefined;

var _Search = __webpack_require__(252);

var _Search2 = _interopRequireDefault(_Search);

var _Results = __webpack_require__(231);

var _Results2 = _interopRequireDefault(_Results);

var _Nav = __webpack_require__(196);

var _Nav2 = _interopRequireDefault(_Nav);

var _Account = __webpack_require__(468);

var _Account2 = _interopRequireDefault(_Account);

var _Input = __webpack_require__(7);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Search = _Search2.default;
exports.Results = _Results2.default;
exports.Nav = _Nav2.default;
exports.Account = _Account2.default;
exports.Input = _Input2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                 	Export your container components here. The Users
                                 	container is just an example and you will likely
                                 	remove it in favor of your own containers. 
                                 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                 */

// import Users from './Users'

/***/ }),

/***/ 254:
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
        width: 100 + '%',
        padding: 3,
        // border:'1px solid #ddd',
        background: '#ffffa'
    }
};

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(446);

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

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(113);

var _containers = __webpack_require__(253);

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

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

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

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

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

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(60);

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

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

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

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.accountReducer = exports.mapReducer = exports.inviteReducer = exports.userReducer = undefined;

var _userReducer = __webpack_require__(454);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _inviteReducer = __webpack_require__(453);

var _inviteReducer2 = _interopRequireDefault(_inviteReducer);

var _mapReducer = __webpack_require__(452);

var _mapReducer2 = _interopRequireDefault(_mapReducer);

var _accountReducer = __webpack_require__(451);

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

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(116);

var _reduxThunk = __webpack_require__(456);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(455);

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

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(458);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(62);

var _Home = __webpack_require__(448);

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

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(113);

var _reactRedux = __webpack_require__(62);

var _actions = __webpack_require__(137);

var _actions2 = _interopRequireDefault(_actions);

var _containers = __webpack_require__(253);

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

/***/ 469:
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

/***/ 60:
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(62);

var _actions = __webpack_require__(137);

var _actions2 = _interopRequireDefault(_actions);

var _reactDropzone = __webpack_require__(194);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _turbo = __webpack_require__(136);

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

/***/ })

/******/ });
//# sourceMappingURL=app.map