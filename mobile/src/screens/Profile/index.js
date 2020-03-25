import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Picker } from 'react-native';

import api from '../../services/api';
import TreeFall from '../../assets/TreeFall.jpg';

export default function Profile() {

    const [tree, setTree] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [complement, setComplement] = useState('');

    async function loadTree() {

        const response = await api.get('/spottree', {
            params: { zipcode, complement }
        })
        setTree(response.data.tree)
    }


    return (
        <View style={styles.container}>
            <View style={styles.thumbnail}>
                <Image source={TreeFall} style={styles.photo} />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Localização: <Text style={styles.labelBold}> Av. Edward fru fru </Text> </Text>
                <Text style={styles.label}>Complemento: <Text style={styles.labelBold}> Ao lado do supermercado </Text> </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
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
    content: {
        alignSelf: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    labelBold: {
        fontWeight: 'bold'
    },

});