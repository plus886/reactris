import React, { Component } from 'react';


export default ReactComponent => (
    class GameLogic extends Component {
        componentWillMount() {
            this.props.fieldActions.init();
        }
        
        render() {
            return <ReactComponent {...this.props} />;
        }
    }
)