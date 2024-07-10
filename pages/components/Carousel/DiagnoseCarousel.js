import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg'
import Category from './DiagnoseCategory';

export default function Carousel() {
    return (
        <View>
            <View className="flex flex-row justify-between items-center mb-4">
                <Text className="text-xl font-bold leading-8 text-neutral-800">Common Deseases</Text>
                <TouchableOpacity onPress={() => navigation.navigate('popular Plants list')}>
                    <View className="flex flex-row">
                        <Text className="text-base	leading-relaxed	text-emerald-600 font-bold">View All</Text>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M13.171 6.23278C12.8775 5.94051 12.8765 5.46564 13.1687 5.17212C13.4344 4.90528 13.851 4.88018 14.1451 5.0974L14.2294 5.16983L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1725L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.596 13.0982 17.3028L13.171 17.2189L18.687 11.725L13.171 6.23278Z" fill="#00A86B" />
                            <Path d="M4 11.7256C4 11.346 4.28215 11.0322 4.64823 10.9825L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4688L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1399 4 11.7256Z" fill="#00A86B" />
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.carouselContainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Category uri='https://i.pinimg.com/736x/fd/0f/f0/fd0ff0486e61ba9febea2b36c854cbc9.jpg' text="Another qkeqruizue efjjfj uyturgzugrzi" />
                        <Category uri='https://i.pinimg.com/736x/fd/0f/f0/fd0ff0486e61ba9febea2b36c854cbc9.jpg' text="Another one" />
                        <Category uri='https://i.pinimg.com/736x/fd/0f/f0/fd0ff0486e61ba9febea2b36c854cbc9.jpg' text="Zaeljila" />
                        <Category uri='https://i.pinimg.com/736x/fd/0f/f0/fd0ff0486e61ba9febea2b36c854cbc9.jpg' text="JGJQGJR" />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        height: 200,
        // backgroundColor:"black"
    },
});