export const types = {
    FIELD_INIT: 'field/INIT',
    BLOCK_MOVE: 'block/MOVE'
};


export const fieldActions = {
    init: () => ({
        type: types.FIELD_INIT
    })
};



export const blockActions = {
    moveLeft: () => ({
        type: types.BLOCK_MOVE,
        direction: 'left'
    }),
    moveRight: () => ({
        type: types.BLOCK_MOVE,
        direction: 'right'
    }),
    moveDown: () => ({
        type: types.BLOCK_MOVE,
        direction: 'down'
    }),
    rotate: () => ({
        type: types.BLOCK_MOVE,
        direction: 'rotate'
    })
};