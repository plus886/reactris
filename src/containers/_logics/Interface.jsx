import React, { Component } from 'react';


export default ReactComponent => (
    class Interface extends Component {
        componentDidMount() {
            document.body.addEventListener("keydown", this.handleInput.bind(this));
            const gameTimer = setInterval(() => this.moveToDown(), 800);
        }

        moveToLeft() {
            this.props.blockActions.moveLeft();
        }

        moveToRight() {
            this.props.blockActions.moveRight();
        }

        moveToDown() {
            this.props.blockActions.moveDown();
        }

        rotate() {
            this.props.blockActions.rotate();
        }

        handleInput(e) {
            switch (e.keyCode) {
                case 37: return this.moveToLeft();
                case 38: return this.rotate();
                case 39: return this.moveToRight();
                case 40: return this.moveToDown();
            }
        }

        render() {
            return <ReactComponent {...this.props} />;
        }
    }
)