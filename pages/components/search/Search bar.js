import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import SearchIcon from "./SearchIcon"
import { SearchBar } from 'react-native-elements'

export default function Search_bar({text}) {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };
    return (
        <SearchBar
            placeholder={text}
            onChangeText={updateSearch}
            value={search}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.inputContainer}
            round
            searchIcon={<SearchIcon />}
        />
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'transparent', // Set main search bar container to be transparent
        borderTopColor: 'transparent', // Hide top border
        borderBottomColor: 'transparent', // Hide bottom border
        paddingHorizontal: 0, // Adjust padding if necessary
    },
    inputContainer: {
        backgroundColor: 'rgba(250, 250, 250, 1)',
    },
});