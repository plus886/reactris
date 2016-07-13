import { random, uniqueId, merge } from 'lodash';


export const ROWS = 15;
export const COLS = 10;

export const BLOCKS = [
    {
        // Square
        type: 0,
        pattern: [
            [ [0,0], [1,0], [0,1], [1,1] ]
        ]
    },
    {
        // L
        type: 1,
        pattern: [
            [ [0,0], [0,1], [1,0], [2,0] ],
            [ [0,0], [1,0], [1,1], [1,2] ],
            [ [0,1], [1,1], [2,1], [2,0] ],
            [ [0,0], [0,1], [0,2], [1,2] ]
        ]
    },
    {
        // Reverse L
        type: 2,
        pattern: [
            [ [0,0], [1,0], [2,0], [2,1] ],
            [ [1,0], [1,1], [1,2], [0,2] ],
            [ [0,0], [0,1], [1,1], [2,1] ],
            [ [0,0], [1,0], [0,1], [0,2] ]
        ]
    },
    {
        // Long Bar
        type: 3,
        pattern: [
            [ [0,0], [1,0], [2,0], [3,0] ],
            [ [0,0], [0,1], [0,2], [0,3] ]
        ]
    },
    {
        // Z
        type: 4,
        pattern: [
            [ [0,0], [1,0], [1,1], [2,1] ],
            [ [1,0], [1,1], [0,1], [0,2] ]
        ]
    },
    {
        // Reverse Z
        type: 5,
        pattern: [
            [ [1,0], [2,0], [0,1], [1,1] ],
            [ [0,0], [0,1], [1,1], [1,2] ]
        ]
    },
    {
        // T
        type: 6,
        pattern: [
            [ [0,0], [0,1], [0,2], [1,1] ],
            [ [0,0], [1,0], [2,0], [1,1] ],
            [ [1,0], [1,1], [1,2], [0,1] ],
            [ [0,1], [1,1], [2,1], [1,0] ]
        ]
    },
    {
        // Cross (arranged)
        type: 7,
        pattern: [
            [ [0,1], [1,0], [1,1], [1,2], [2,1] ]
        ]
    },
    {
        // U (arranged)
        type: 8,
        pattern: [
            [ [0,0], [2,0], [0,1], [1,1], [2,1] ],
            [ [0,0], [1,0], [1,1], [1,2], [0,2] ],
            [ [0,0], [1,0], [2,0], [0,1], [2,1] ],
            [ [0,0], [1,0], [0,1], [0,2], [1,2] ]
        ]
    },
    {
        // Long Bar (arranged)
        type: 9,
        pattern: [
            [ [0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0] ],
            [ [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6] ]
        ]
    }
];

export const createNewBlock = () => {
    class Block {
        constructor(shape) {
            this.type = shape.type;
            this.pattern = shape.pattern;
            this.id = Number(uniqueId());
            this.rotation = 0;
            this.currentPattern = rotation => this.pattern[rotation];
        }
    }
    
    return new Block(BLOCKS[random(BLOCKS.length - 1)]);
};