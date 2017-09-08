'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _formActions = require('../../actions/formActions');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
    var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    if (type !== _formActions.INITIALIZE_FORM) {
        return previousState;
    }

    if (type === _reactRouterRedux.LOCATION_CHANGE) {
        return initialState;
    }

    return (0, _extends3.default)({}, previousState, payload);
};

module.exports = exports['default'];