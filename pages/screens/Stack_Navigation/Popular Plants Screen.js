import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Articles from "../../components/article_List/Articles"
import Search from "../../components/search/Search bar"
export default function Popular_Plants_Screen() {
    return (
        <ScrollView className="w-full px-6 py-4">
            <Search text="Search articles..." />
            <Articles />
        </ScrollView>
    )
}