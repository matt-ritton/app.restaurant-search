import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    //'result' is the object containing all the business data from yelp api, like name, image_url, price, etc...

    //Show Elements
    return (
        <View style={styles.containerStyle}>
            <Image 
                style={styles.imageStyle}
                source={{ uri: result.image_url}} 
            />
            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text style={styles.infoStyle}> {result.rating} Stars, {result.review_count} Reviews. </Text>
        </View>
    )
}

//------------------------------------//
//-------------Style-----------------//

const styles = StyleSheet.create({

    containerStyle: {
        marginLeft: 10,
    },

    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },

    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    infoStyle: {
        color: '#878686',
    }
})

export default ResultsDetail