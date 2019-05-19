import * as actionTypes from './actionTypes';

const saveResult = (value) => ({
        type: actionTypes.STORE_RESULT,
        value: value
})

export const storeResult = (value) => {

    return (dispatch, getState) => {
        setTimeout(() =>{
            const oldCounter = getState().ctr.counter;
            console.log("oldCounter", oldCounter);
            dispatch(saveResult(value));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    };
};