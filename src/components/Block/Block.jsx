import React, { Component, PropTypes } from 'react';
import { Square } from 'components';


export default class Block extends Component {
    static propTypes = {
        shape: PropTypes.object.isRequired
    }
    
    get squares() {
        const { shape } = this.props;

        return shape.pattern[shape.rotation].map( (e, i) => <Square key={i} x={e[0] + shape.blockPos.x} y={e[1] + shape.blockPos.y} type={shape.type} /> );
    }
    
    render() {
        return (
            <g>
                { this.squares }
            </g>
        )
    }
}