import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image, KeyboardAvoidingView, Modal, Alert } from 'react-native';

import api from '../../services/api';

import camera from '../../assets/camera.png';
import TreeFall from '../../assets/TreeFall.jpg';

export default function AddTree({ navigation, history }) {
    const [zipcode, setZipcode] = useState('');
    const [complement, setComplement] = useState('');

    const [visible, setVisible] = useState(false);

    async function handleSubmit() {

        const data = new FormData();

        data.append('zipcode', zipcode);
        data.append('complement', complement);

        await api.post('/spottree', data, {
            headers: {
                zipcode,
                complement,
            }
        });

        history.push('/spottree')
    };

    function handleCamera() {
        navigation.navigate('Camera')
    };

    function handleAlert(){
        Alert.alert('Sucesso');
        //navigation.navigate('HomeMap');
        
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" >

            <TouchableOpacity onPress={handleCamera} style={styles.buttonSelect}>
                <Text style={styles.SelectButtonTex} >Selecione a imagem</Text>
            </TouchableOpacity>

            <View style={styles.Form}>
                <TextInput style={styles.input} placeholder="Endereço" value={zipcode} onChangeText={setZipcode} />
                <TextInput style={styles.input} placeholder="Complemento" value={complement} onChangeText={setComplement} />

                <TouchableOpacity onPress={handleSubmit, handleAlert} style={styles.button}>
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
    buttonSelect: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CCC',
        borderStyle: 'dashed',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    SelectButtonTex: {
        fontSize: 16,
        color: '#000',
    },

});
