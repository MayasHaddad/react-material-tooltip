'use strict';

var React = require('react');
require('../css/main.css');

var Tooltip = React.createClass({
    getInitialState: function() {
        return {showTooltip: false};
    },

    showTooltip: function() {
        this.setState({showTooltip: true});
    },

    hideTooltip: function() {
        this.setState({showTooltip: false});
    },

    render: function() {
        var tooltip = "";
        if(this.state.showTooltip === true) {
            tooltip = <div style={{display:'inline',
    padding: 5 + 'px' + 15 + 'px',
    position: 'absolute',
    zIndex: 98,
    background: '#333',
    color: '#fff',
    minWidth: 100 + 'px',
    textAlign: 'center',
    minHeight: 20 + 'px',
    familyFont: 'roboto',
    marginTop: 10 + 'px',
    borderRadius: 3 + 'px',
    opacity: 0.7}}>{this.props.tooltipText}</div>
               ;
        }
        return (<div><div onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip}>{this.props.text}</div>
                {tooltip}
                </div>
               );
    }
});

module.exports = Tooltip;
