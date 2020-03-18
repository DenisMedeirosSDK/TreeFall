import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import Tree from '../../assets/Tree.png';
import Tree2 from '../../assets/Tree2.png';

export default function HomeMap({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null);
    
    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                })
            }
        }
        loadInitialPosition();
    }, [])

    if (!currentRegion) {
        return null
    }
    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.Map} >
                <Marker coordinate={{ latitude: -23.4462849, longitude: -47.4883804 }} >
                    <Image style={styles.Icon} source={Tree} />
                    <Callout onPress={() => {
                        navigation.navigate('Profile');
                    }}>
                        <View>
                            <Text>Local</Text>
                            <Text>Situação</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
        </>
    )
};

const styles = StyleSheet.create({
    Map: {
        flex: 1,
    },
    Icon: {
        width: 55,
        height: 55,
    },
    Icon2: {
        width: 70,
        height: 70,
    },
})