import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';


const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) return null;

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image source={{ uri: item }} style={styles.imageStyle} />
            }}
            data={result.photos}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 100,
        width: 300
    }
});


export default ResultsShowScreen;
