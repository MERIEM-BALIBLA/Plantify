import { View, Text, Image } from 'react-native'
import React from 'react'

import GreenBtn from '../buttons/GreenBtn';

export default function Ask_Plant({ navigation }) {

    const Img = require('../../../assets/images/image.png');

    return (

        <View className="flex flex-row gap-3 justify-center">
            <View className="w-1/2">
                <Image
                    className="border border-red-600"
                    source={Img}
                    style={{ aspectRatio: 1, width: '100%', height: undefined }}
                    resizeMode="contain"
                />
            </View>
            <View className="w-1/2 mt-4 flex flex-col justify-between">
                <View>
                    <Text className='text-lg font-bold leading-8 text-neutral-800'>
                        Ask Plant Expert
                    </Text>
                    <Text className='text-xs font-normal leading-5	text-zinc-600'>
                        Our botanists are ready to help with your problems.
                    </Text>
                </View>
                <GreenBtn text="Ask the Experts"
                    navigation={navigation}
                    width={132}
                    height={34}
                    fontsize={14}
                    press="Ask Plant Expert" />
            </View>
        </View>
    )
}