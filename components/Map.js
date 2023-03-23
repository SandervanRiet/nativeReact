import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
    },
});

export function Map() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 51.082884,
                    longitude: 4.376696,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                scrollEnabled={true}
            >
                <Marker
                    coordinate={{ latitude: 51.082884, longitude: 4.376696 }}
                    title={'Multiskoop'}
                    description={'Grote Markt 8, 2850 Boom'}
                >
                </Marker>
            </MapView>
        </View>
    );
}
