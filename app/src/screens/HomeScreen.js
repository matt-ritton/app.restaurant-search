import React,  { useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    //Function to filter prices
    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'

        return results.filter(result => { //filter the results based on a 'result' price
            return result.price === price;
        })
    }

    //Show Elements
    return (
        <>
            <SearchBar 
                term = {term}
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList 
                    title='Cost Effective'
                    results={filterResultsByPrice('$')}
                />

                <View style={styles.horizontalRule}></View>

                <ResultsList
                    title='Bit Pricier'
                    results={filterResultsByPrice('$$')}
                />

                <View style={styles.horizontalRule}></View>

                <ResultsList
                    title='Big Spender'
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>

        </>
    );
};

//------------------------------------//
//-------------Style-----------------//

const styles = StyleSheet.create({
    horizontalRule: {
        borderBottomWidth: 1, 
        borderBottomColor: '#DEDCDC', 
        marginLeft: 10,
    }
});

export default HomeScreen;