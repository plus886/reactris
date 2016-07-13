import { types } from 'modules/actions';
import { COLS, ROWS } from 'modules/configure';



const setDefaultField = () => Array(ROWS).fill(Array(COLS).fill(null));


export default function (state = setDefaultField(), action) {
    switch (action.type) {
        case types.FIELD_INIT:
            return setDefaultField();
        default:
            return state;
    }
}