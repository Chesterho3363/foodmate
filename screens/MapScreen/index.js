import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View } from 'react-native';

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    mapStyle: {
        width: "100%",

        height: 300,
    },
});