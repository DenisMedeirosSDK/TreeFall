import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
    function handleMap() {
        navigation.navigate('HomeMap');

    }
    function handleAdd() {
        navigation.navigate('AddTree');
    }

    return (
        <View style={styles.container}>
            <View style={styles.Form}>
                <TouchableOpacity onPress={handleMap} style={styles.button} >
                    <Text style={styles.buttonText} >Visualizar mapa</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAdd} style={styles.button} >
                    <Text style={styles.buttonText} >Cadastrar árvore</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#87BC41',
    },
    Form: {
        padding: 20,
    },
    tittle: {
        alignSelf: 'center',
        fontSize: 32,
        color: '#FFF',

    },
    label: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#F7931D',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'stretch',

    },
    buttonText: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#FFF',
    },

});