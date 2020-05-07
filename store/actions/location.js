import {SET_LOCATION, SET_ADDRESS, SEARCH} from './actionType'
import {stopLoading} from './loadingUI'

const apiKey = 'YOUR-API-KEY'

export const getLocation = (long, lat) => {
    return dispatch => {
        dispatch(startSearch())
        dispatch(setLocation({long: long, lat: lat}))
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=' + apiKey)
        .catch(err => {
            dispatch(stopLoading())
            dispatch(setAddress('network error'))
        })
        .then(res => res.json())
        .then(parsedRes => {
            dispatch(stopLoading())
            dispatch(setAddress(parsedRes.results[0].formatted_address))
        })
    }
}

export const setLocation = data => {
    return {
        type: SET_LOCATION,
        data: data
    }
}

export const setAddress = address => {
    return {
        type: SET_ADDRESS,
        address: address
    }
}

export const startSearch = () => {
    return {
        type: SEARCH,
    }
}

