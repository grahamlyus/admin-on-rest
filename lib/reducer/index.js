'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _reactRouterRedux = require('react-router-redux');

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (resources, customReducers, locale) {
    return (0, _redux.combineReducers)((0, _extends3.default)({
        admin: (0, _admin2.default)(resources),
        locale: (0, _locale2.default)(locale),
        form: _reduxForm.reducer,
        routing: _reactRouterRedux.routerReducer
    }, customReducers));
};

module.exports = exports['default'];