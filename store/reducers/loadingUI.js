import { START_LOADING, STOP_LOADING } from '../actions/actionType'

const initalState = {
    loading: false
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                loading: true
            }
        case STOP_LOADING:
            return {
                loading: false
            }
        default:
            return state
    }
}

export default reducer