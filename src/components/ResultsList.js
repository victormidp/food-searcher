import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>
                {title}
            </Text>
            <FlatList 
            horizontal
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <ResultsDetail result={item} />;
            }}
            data={results} />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList;

