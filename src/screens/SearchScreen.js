import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };


    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}    
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricer" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender" 
                />
                    
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender" 
                />
                    
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender" 
                />
                    

            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;