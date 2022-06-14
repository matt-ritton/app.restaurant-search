import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <ResultsDetail result={item}/> //Pass 'item' object as a 'result' prop. Check ResultsDetail.js
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },

    containerStyle:{
        marginBottom: 10,
    },

});

export default ResultsList;