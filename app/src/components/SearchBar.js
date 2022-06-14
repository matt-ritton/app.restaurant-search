import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit} ) => {
    return (
        <View style={styles.background}>
            <FontAwesome style={styles.iconStyle} name="search" color="#878686" />
            <TextInput style={styles.inputStyle}
                placeholder= 'Search'
                autoCapitalize="none"
                autoCorrect={false}
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
};

//------------------------------------//
//-------------Style-----------------//

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 25,
        marginTop: 15,
        flexDirection: "row",
        marginBottom: 10,
    },
    
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: '#878686',
    },

    iconStyle: {
        fontSize: 24,
        alignSelf: 'center', 
        marginHorizontal: 10,
    }
});

export default SearchBar;