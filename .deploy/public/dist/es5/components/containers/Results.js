"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Invite = require("../presentation").Invite;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Results = (function (Component) {
    function Results() {
        _classCallCheck(this, Results);

        _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
        this.state = {
            invite: {}
        };
    }

    _inherits(Results, Component);

    _prototypeProperties(Results, null, {
        updateInvite: {
            value: function updateInvite(attr, event) {
                event.preventDefault();
                console.log(attr + " == " + event.target.value);
                var updated = Object.assign({}, this.state.invite);
                updated[attr] = event.target.value;
                this.setState({
                    invite: updated
                });
            },
            writable: true,
            configurable: true
        },
        addInvite: {
            value: function addInvite() {
                // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
                var newInvite = Object.assign({}, this.state.invite);
                var len = this.props.invite.all.length + 1;
                newInvite.id = len.toString();
                // newInvite['id'] = 100
                // newInvite['key'] = '100'
                // newInvite['defaultAnimation'] = 2
                newInvite.position = this.props.map.currentLocation;
                this.props.addInvite(newInvite);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                // const invites = [
                //     {id:1, key:'1', date:'Sat, May 26, 2018', defaultAnimation:2, label:'Match 1', position:{lat:40.7224017, lng:-73.9896719}},
                //     {id:2, key:'2', date:'Sun, May 27, 2018', defaultAnimation:2, label:'Ping Pong 2', position:{lat:40.7124017, lng:-73.9896719}}
                // ]
                var invites = this.props.invite.all || [];

                return React.createElement(
                    "div",
                    { className: "container-fluid" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        invites.map(function (invite, i) {
                            return React.createElement(Invite, { key: invite.id, invite: invite });
                        })
                    ),
                    React.createElement("hr", null),
                    React.createElement("input", { onChange: this.updateInvite.bind(this, "label"), className: "formControl", type: "text", placeholder: "Invite" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.updateInvite.bind(this, "date"), className: "formControl", type: "text", placeholder: "Date" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "button",
                            { onClick: this.addInvite.bind(this), className: "btn btn-success" },
                            "Add Invite"
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Results;
})(Component);

var stateToProps = function (state) {
    return {
        invite: state.invite,
        map: state.map,
        account: state.account
    };
};

var dispatchToProps = function (dispatch) {
    return {
        addInvite: function (invite) {
            return dispatch(actions.addInvite(invite));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// position:{lat:40.70224017, lng:-73.9796719}