import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import api from '../../services/api';

import Tree from '../../assets/Tree.png';
import Tree2 from '../../assets/Tree2.png';

export default function HomeMap({ navigation }) {
    const [tree, setTree] = useState([]);
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

    async function loadTree() {
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/spottree', {
            params: {
                latitude,
                longitude,
            }
        });
        setTree(response.data.tree);
    }

    if (!currentRegion) {
        return null
    }
    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.Map} >
                <Marker coordinate={{ latitude: -23.4522282, longitude: -47.4864368 }} >
                    <Image style={styles.Icon} source={Tree2} />
                    <Callout onPress={() => {
                        navigation.navigate('Profile');
                    }} >
                        <View style={styles.callout}>
                            <Text style={styles.treeLocal}> Av. Edward fru fru </Text>
                            <Text> Ao lado do supermercado </Text>
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
    callout: {
        width: 250,
    },
    treeLocal: {
        fontSize: 16,
    }
})