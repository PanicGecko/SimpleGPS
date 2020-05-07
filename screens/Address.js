import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class Address extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.label}>
                        <Text>My coordinates are</Text>
                    </View>
                    <View style={styles.coorSec}>
                        <View style={styles.box}>
                            <View style={styles.label}>
                                <Text>Long</Text>
                            </View>
                            <View style={styles.coors}>
                                <Text>{this.props.lon}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.label}>
                                <Text>Lat</Text>
                            </View>
                            <View style={styles.coors}>
                                <Text>{this.props.lat}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.top}>
                    <View style={styles.label}>
                        <Text>
                            My Address
                        </Text>
                    </View>
                    <View style={styles.addressSec}>
                        <Text>{this.props.address}</Text>
                    </View>
                </View>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    top: {
        width: '90%',
        height: 200,
    },
    label: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%'
    },
    coorSec: {
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: '45%',
        height: '100%',
        alignItems: 'center'
    },
    coors: {
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'yellow',
        borderWidth: 5
    },
    addressSec: {
        width: '100%',
        height: '90%',
        borderColor: 'yellow',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapPropsToState = state => {
    return {
        lon: state.location.long,
        lat: state.location.lat,
        address: state.location.address
    }
}

export default connect(mapPropsToState)(Address)