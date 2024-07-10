import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Category({ uri, text }) {
    return (
        <View className="mr-2 w-[180px] h-64">
            <Image
                className=" w-full h-1/2 object-cover"
                source={{ uri }}
            />
            <View className="w-full flex flex-row justify-between">
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        height: 200, // Adjust this as per your requirement
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',
    },
});

