import {CHECKBOX_OBJ, INTERVAL_OBJ, IS_DAILY} from '../types'

const initialState = {
    checBoxObj: {},
    intervalObj: {},
    isDaily: true
};

export const checkBoxReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECKBOX_OBJ:
            return {...state, checBoxObj: action.payload}
        case INTERVAL_OBJ:
            return {...state, intervalObj: action.payload}
        case IS_DAILY:
            return {...state, isDaily: action.payload}
        default:
            return state
    }
}