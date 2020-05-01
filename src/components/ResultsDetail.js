import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View>
            <Image source={{ uri: result.image_url }} 
            style={styles.imageStyle}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default ResultsDetail;

