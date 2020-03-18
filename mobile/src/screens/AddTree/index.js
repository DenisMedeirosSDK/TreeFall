import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { Camera, getPermissionsAsync, requestPermissionsAsync } from 'expo-camera';

import camera from '../../assets/camera.svg';
import TreeFall from '../../assets/TreeFall.jpg';

export default function AddTree({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" >
            <View style={styles.thumbnail}>

            </View>
            <View style={styles.Form}>
                <TextInput style={styles.input} placeholder="Endereço" />
                <TextInput style={styles.input} placeholder="Complemento" />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CONFIMAR</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#87BC41',
    },
    Form: {
    },
    input: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 4,
        marginBottom: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },
    button: {
        backgroundColor: '#F7931D',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'stretch',

    },
    buttonText: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#FFF'
    },
    thumbnail: {
        alignItems: 'center',
        marginBottom: 20,
    },
    photo: {
        borderRadius: 4,
        width: 340,
        height: 200,
        resizeMode: 'cover',
    },
});
