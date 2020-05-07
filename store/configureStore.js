import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import LocReducer from './reducers/location'
import LoadReducer from './reducers/loadingUI'

const rootReducer = combineReducers({
    location: LocReducer,
    ui: LoadReducer
})

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)))
}

export default configureStore