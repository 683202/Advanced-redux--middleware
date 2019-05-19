import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../store/utility';

const initialStore = {
    counter: 10
}

const reducer = (state = initialStore, action) => {
    console.log(state === initialStore);
    console.log(action);

    switch(action.type) {
        case actionTypes.INCREMENT:
            return updatedObject(state, { counter: state.counter + 1 });

        case actionTypes.DECREMENT:
            return updatedObject(state, { counter: state.counter - 1 });

        case actionTypes.ADD:
            return updatedObject(state, { counter: state.counter + action.value });

        default:
            return state;
    }
}

export default reducer;