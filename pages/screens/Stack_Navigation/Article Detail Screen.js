import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg';

export default function ArticleDetailScreen({ route }) {
    const { drink } = route.params;
    return (

        <ScrollView className="w-full px-6 py-4 bg-white">
            <View>
                <Image className="w-[382px] h-[256px] rounded-2xl" source={{ uri: drink.strDrinkThumb }}
                />
                <View className=" mt-4">
                    <Text className="font-bold text-2xl leading-10 text-neutral-800">
                        {/* Unlock the Secrets of Succulents: Care Tips for Thriving Beauties */}
                        {drink.strDrink}
                    </Text>
                </View>

                <View className="mt-4">
                    <Text className="text-xl font-bold leading-8 text-neutral-800 ">{drink.strInstructions}</Text>
                </View>

                <View className="mt-4">
                    {Object.keys(drink)
                        .filter(key => key.startsWith('strIngredient') && drink[key])
                        .map((key, index) => (
                            <Text key={index} className="font-medium text-lg leading-7 tracking-widest">{`${index + 1}. ${drink[key]}`}</Text>
                        ))}
                </View>
            </View>
        </ScrollView>

    )
}