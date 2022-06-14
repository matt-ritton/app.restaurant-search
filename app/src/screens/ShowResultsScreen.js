import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp';

const ShowResultsScreen = ( {navigation} ) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id'); //get the id from the restaurant

    //Make a request to yelp api
    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if(!result) { //While don't have any kind of result, just don't show on the screen
        return null;
    }

    //Show Elements
    return (
        <>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={( {item} ) => {
                    return (
                        <Image style={styles.imageStyle} source= { {uri: item} }/>
                    )
                }}
            >

            </FlatList>
        </>
    )
};

//------------------------------------//
//-------------Style-----------------//

const styles = StyleSheet.create({

    imageStyle: {
        height: 200,
        width: 300
    }
});

export default ShowResultsScreen;