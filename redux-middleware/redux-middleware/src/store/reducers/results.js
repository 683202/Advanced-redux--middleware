import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialStore = {
    results: []
}

const deleteResult = (state, action) => {
    let newArray = state.results.filter(el => el.id !== action.id);
    return updatedObject(state, { results: newArray });
}

const reducer = (state = initialStore, action) => {
    console.log(state === initialStore);
    console.log(action);
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            let newArray = state.results.concat({id: new Date(), val: action.value});
            return updatedObject(state, { results: newArray });
        
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);

        default:
            return state;

    }

    // if(action.type === actionTypes.STORE_RESULT) {
    //     return {
    //         ...state,
    //         results: state.results.concat({id: new Date(), val: action.value})
    //     }
    // }

    // if(action.type === actionTypes.DELETE_RESULT) {
    //     // console.log('Inside the reducer... inside DELETE_RESULT....', action.id);
    //     const newArray = state.results.filter(el => el.id !== action.id);
    //     return {
    //         ...state,
    //         results: newArray
    //     }
    // }
    
    // return state;
}

export default reducer;