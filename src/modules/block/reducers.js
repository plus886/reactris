import { merge, includes, fill, chunk } from 'lodash';
import { types } from 'modules/actions';
import { createNewBlock, ROWS, COLS } from 'modules/configure';


const insertNewBlock = block => Object.assign({}, block, { blockPos: { x: 2, y: 0 } });


const createInitialState = () => ({
    current: insertNewBlock(createNewBlock()),
    fixed: chunk(fill(Array(ROWS * COLS), null), COLS),
    next: createNewBlock()
});


const getPosArr = block =>
    block.currentPattern(block.rotation).map( e => ({
        ...block,
        squarePos: {
            x: e[0] + block.blockPos.x,
            y: e[1] + block.blockPos.y
        }
    }));


const validate = (state, next) => {
    return getPosArr(next).every( block => {
        const row = state.fixed[block.squarePos.y];

        if(block.squarePos.x >= COLS || block.squarePos.x < 0) {
            return false;
        }

        if(block.squarePos.y >= ROWS || block.squarePos.y < 0) {
            return false;
        }

        if(!row) {
            return true;
        }

        if(!row[block.squarePos.x]) {
            return true;
        }

        return false;
    });
};


const terminate = () => {
    alert('Game Over!');
    return createInitialState();
};


const clear = nextState => {
    const fixed = nextState.fixed;

    fixed.forEach( (row, i) => {
        if(!includes(row, null)) {
            fixed.splice(i, 1);
            fixed.unshift(Array(COLS).fill(null));
        }
    });

    return nextState;
};


const fix = state => {
    const nextState = merge({}, state);

    getPosArr(nextState.current).forEach( (e, i) => {
        const { squarePos, type, id } = e;
        nextState.fixed[e.squarePos.y][e.squarePos.x] = { squarePos, type, id };
    });

    const nextBlock = insertNewBlock(nextState.next);

    if(!validate(nextState, nextBlock)) {
        return terminate();
    }

    nextState.current = nextBlock;
    nextState.next = createNewBlock();

    return clear(nextState);
};


const move = (state, direction) => {
    const next = merge({}, state.current);

    switch(direction) {
        case 'left':
            next.blockPos.x --;
            break;

        case 'right':
            next.blockPos.x ++;
            break;

        case 'down':
            next.blockPos.y ++;
            break;

        case 'rotate':
            if(next.rotation < next.pattern.length - 1) {
                next.rotation ++;
            } else {
                next.rotation = 0;
            }
            break;
    }

    if(validate(state, next)) {
        return Object.assign({}, state, { current: next });
    }

    if(direction === 'down') {
        return fix(state);
    }

    return state;
};


export default function (state = createInitialState(), action) {
    switch (action.type) {
        case types.FIELD_INIT:
            return createInitialState();
        
        case types.BLOCK_MOVE:
            return merge({}, move(state, action.direction));
        
        default:
            return state;
    }
}