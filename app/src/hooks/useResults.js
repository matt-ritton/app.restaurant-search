import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'rio de janeiro'
                }
            });
            
            setResults(response.data.businesses);
        } 
        catch (err) {
            setErrorMessage('Something went wrong! Try again later.');
        }
    }

    //Call searchApi() when component is first rendered
    useEffect(() => {
        searchApi('pizza')
    }, []);

    return [searchApi, results, errorMessage];
}