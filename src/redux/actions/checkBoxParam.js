import {CHECKBOX_OBJ, INTERVAL_OBJ, IS_DAILY} from '../types'

export function setCheckBoxObj(obj) {
    return {type: CHECKBOX_OBJ, payload: obj}
}

export function setIntervalObj(obj) {
    return {type: INTERVAL_OBJ, payload: obj}
}

export function setIsDaily(bool) {
    return {type: IS_DAILY, payload: bool}
}