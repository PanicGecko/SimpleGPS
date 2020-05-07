import {SET_LOCATION, SET_ADDRESS, SEARCH} from '../actions/actionType'

const initalState = {
    long: null,
    lat: null,
    address: '',
    done: false
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case SET_LOCATION:
            return {
                ...state,
                long: action.data.long,
                lat: action.data.lat
            }
        case SET_ADDRESS: 
            return {
                ...state,
                address: action.address,
                done: true
            }
        case SEARCH: 
        return {
            ...state,
            done: false
        }
        default:
        return state
    }
}

export default reducer