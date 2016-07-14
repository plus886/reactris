import React, { Component, PropTypes } from 'react';
import { Block, Square } from 'components';

import styles from './style.scss';


export default class Field extends Component {
    static propTypes = {
        field: PropTypes.array.isRequired,
        block: PropTypes.object.isRequired
    }

    get field() {
        const { field, block: { fixed } } = this.props;

        return field.map( (row, y) => (
            row.map( (col, x) => {
                if(!fixed[y][x]) {
                    return <Square x={x} y={y} />;
                }

                return <Square x={x} y={y} type={fixed[y][x].type} />;
            })
        ));
    }

    render() {
        return (
            <section>
                <svg className={styles.svg}>
                    <g>{this.field}</g>
                    <Block shape={this.props.block.current} />
                </svg>
            </section>
        );
    }
}