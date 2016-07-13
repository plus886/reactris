import React, { Component } from 'react';
import styles from './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, Panel } from 'components';
import { fieldActions, blockActions } from 'modules/actions';

import injectGameLogic from 'containers/_logics/Game';
import injectInterface from 'containers/_logics/Interface';


class Main extends Component {
    render() {
        const { field, block } = this.props;
        
        return (
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <header className={styles.header}>REACTRIS</header>
                    <Panel next={block.next} />
                    <Field field={field} block={block} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    field: state.field,
    block: state.block
});

const mapDispatchToProps = dispatch => ({
    fieldActions: bindActionCreators(fieldActions, dispatch),
    blockActions: bindActionCreators(blockActions, dispatch)
});


Main = injectInterface(injectGameLogic(Main));


export default connect(mapStateToProps, mapDispatchToProps)(Main);