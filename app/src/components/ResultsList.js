import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, results, navigation}) => {

    if(!results.length) { //If don't have any results, don't show the category
        return null;
    }

    //Show Elements
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
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow', {id: item.id})} //Pass the 'id' through an object
                        >
                            <ResultsDetail result={item} //Pass 'item' object as a 'result' prop. Check ResultsDetail.js} 
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

//------------------------------------//
//-------------Style-----------------//

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

export default withNavigation(ResultsList);