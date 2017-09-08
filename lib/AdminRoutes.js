'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _CrudRoute = require('./CrudRoute');

var _CrudRoute2 = _interopRequireDefault(_CrudRoute);

var _NotFound = require('./mui/layout/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Restricted = require('./auth/Restricted');

var _Restricted2 = _interopRequireDefault(_Restricted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminRoutes = function AdminRoutes(_ref) {
    var customRoutes = _ref.customRoutes,
        _ref$resources = _ref.resources,
        resources = _ref$resources === undefined ? [] : _ref$resources,
        dashboard = _ref.dashboard,
        catchAll = _ref.catchAll;
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        customRoutes && customRoutes.map(function (route, index) {
            return _react2.default.createElement(_reactRouterDom.Route, {
                key: index,
                exact: route.props.exact,
                path: route.props.path,
                component: route.props.component,
                render: route.props.render,
                children: route.props.children // eslint-disable-line react/no-children-prop
            });
        }),
        resources.map(function (resource) {
            return _react2.default.createElement(_reactRouterDom.Route, {
                path: '/' + resource.name,
                key: resource.name,
                render: function render() {
                    return _react2.default.createElement(_CrudRoute2.default, {
                        resource: resource.name,
                        list: resource.list,
                        create: resource.create,
                        edit: resource.edit,
                        show: resource.show,
                        remove: resource.remove,
                        options: resource.options
                    });
                }
            });
        }),
        dashboard ? _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/',
            render: function render(routeProps) {
                return _react2.default.createElement(
                    _Restricted2.default,
                    (0, _extends3.default)({
                        authParams: { route: 'dashboard' }
                    }, routeProps),
                    _react2.default.createElement(dashboard)
                );
            }
        }) : resources[0] && _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/',
            render: function render() {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' + resources[0].name });
            }
        }),
        _react2.default.createElement(_reactRouterDom.Route, { component: catchAll || _NotFound2.default })
    );
};

var componentPropType = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]);

AdminRoutes.propTypes = {
    catchAll: componentPropType,
    customRoutes: _propTypes2.default.array,
    resources: _propTypes2.default.array,
    dashboard: componentPropType
};

exports.default = AdminRoutes;
module.exports = exports['default'];