
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Carousel from '../../components/Carousel/HomeCarousel'
import Search from "../../components/search/Search bar"
import Ask_Plant from '../../components/elements/Ask Plant';

export default function HomeScree({ navigation }) {

    return (
        <View className="px-6 py-2">
            {/* section 1 */}
            <TouchableOpacity onPress={() => navigation.navigate('Search plants')}>
                <Search text="Search plants..." />
            </TouchableOpacity>

            {/* section 2*/}
            <View className="">
                {/* section 1*/}
                <Carousel navigation={navigation} />

                {/* section 2*/}
                <Ask_Plant navigation={navigation} />
            </View>
        </View>
    )
}
