import { View, Text, Image } from 'react-native'
import React from 'react'
import Svg, { Path, Mask, G } from 'react-native-svg';

import Search from "../../components/search/Search bar"
import Experts from "../../components/plants/Plants expert"

export default function Ask_Plant_Expert({ navigation }) {
    return (
        <View className="px-6 py-2 bg-white flex-1">
            <Search text="Search articles..." />
            <Experts navigation={navigation} press="chat_with_expert" />
        </View>
    )
}