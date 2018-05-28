"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    var invite = props.invite;

    return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
            "div",
            { id: "reservations" },
            React.createElement(
                "div",
                { "class": "reservation" },
                React.createElement(
                    "div",
                    { style: localStyle.inviteImage },
                    React.createElement("img", { style: localStyle.inviteImage, src: invite.image })
                ),
                React.createElement(
                    "h2",
                    null,
                    invite.label
                ),
                React.createElement(
                    "span",
                    { "class": "reservation-date" },
                    invite.date,
                    " "
                ),
                React.createElement("img", { style: localStyle.icon, src: invite.host.image })
            )
        )
    );
};

var localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: "right"
    },
    inviteImage: {
        width: 100 + "%",
        padding: 3,
        // border:'1px solid #ddd',
        background: "#ffffa"
    }
};