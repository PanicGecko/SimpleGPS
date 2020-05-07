import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, Alert, ActivityIndicator} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { connect } from 'react-redux'
import { startLoading, stopLoading } from '../store/actions/loadingUI'
import { getLocation } from '../store/actions/location'

class Home extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.finished !== this.props.finished && this.props.finished) {
            this.props.navigation.navigate({ routeName: 'AddressScreen' })
        }
    }

    verifyPermission = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)

        if (result.status !== 'granted') {
            Alert.alert('Need Permission', 'You need to grant location permission to use this app', [{ text: 'Okay' }])
            return false
        }
        return true
    }

    getLocation = async () => {
        this.props.startUI()
        const hasPermission = await this.verifyPermission();
        if (!hasPermission) {
            this.props.stopUI()
        } else {

            try {
                const currentLocation = await Location.getCurrentPositionAsync({})
                this.props.storeLoc(currentLocation.coords.longitude, currentLocation.coords.latitude)
            } catch (err) {
                this.props.stopUI()
                Alert.alert('Could not fetch Location!',
                    'Please try again',
                    [{ text: 'Okay' }])
            }

        }
    }



    render() {

        const spinner = this.props.loading ? <ActivityIndicator size="large" color="blue" /> : <TouchableWithoutFeedback onPress={this.getLocation}>
            <View style={styles.getButton} >
                <Text style={styles.words}>Get Coordinates</Text>
            </View>
        </TouchableWithoutFeedback>

        return (
            <View style={styles.container}>
                {spinner}
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    getButton: {
        width: 150,
        height: 75,
        borderRadius: 15,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    words: {
        color: 'white'
    }
})

const mapStateToProps = state => {
    return {
        finished: state.location.done,
        loading: state.ui.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeLoc: (long, lat) => dispatch(getLocation(long, lat)),
        startUI: () => dispatch(startLoading()),
        stopUI: () => dispatch(stopLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)