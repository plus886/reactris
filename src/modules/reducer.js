import { combineReducers } from 'redux';
import block from 'modules/block/reducers';
import field from 'modules/field/reducers';


const reducer = combineReducers({
    block,
    field
});

export default reducer;