import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import styles from './style.scss';


export default class Square extends Component {
    static propTypes = {
        type: PropTypes.number,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }

    get className() {
        const { type } = this.props;
        const classes = [styles.rect];
        const typeClass = Number.isInteger(type) ? styles[`type-${type}`] : styles.empty;

        return classes.concat(typeClass);
    }

    render() {
        const { x, y } = this.props;
        return <rect className={cn(styles.rect, this.className)} x={x * 45} y={y * 45} />;
    }
}