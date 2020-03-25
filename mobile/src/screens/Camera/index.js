import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Camera, getPermissionsAsync, requestPermissionsAsync } from 'expo-camera';

export default function CameraView({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} />
        </View>
    )
}