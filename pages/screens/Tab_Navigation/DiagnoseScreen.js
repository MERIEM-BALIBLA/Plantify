import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import GreenBtn from '../../components/buttons/GreenBtn'
import Carousel from '../../components/Carousel/DiagnoseCarousel'
import Ask_Plant from '../../components/elements/Ask Plant'

export default function Diagnose({ navigation }) {

  return (
    <ScrollView className="px-6 flex-1 bg-white">

      {/* section 1 */}
      <View className="relative flex flex-row">
        <View className="w-2/5 h-[200px]">
          <Image className="w-full h-full" source={{ uri: "https://plantfoodsystems.com/wp-content/uploads/2020/08/plant-growth-3-e1577734988146.png" }} />
        </View>

        <View className="flex flex-col justify-between w-3/5 p-4">
          <Text className="font-bold text-xl leading-10 text-neutral-800">
            Check Your Plant
          </Text>
          <Text className="text-sm font-normal leading-loose tracking-wide text-zinc-600">Take photos, start diagnose deseases, & get plant care tips.</Text>
          <GreenBtn text="Diagnose" width={150} // Example dynamic width
            height={50} press='CameraScreen' navigation={navigation}/>
        </View>
      </View>

      {/* section 2*/}
      <View className="mt-4">
        {/* section 1*/}
        <Carousel navigation={navigation} />

        {/* section 2*/}
        <View className="p-4">
          <Ask_Plant navigation={navigation} />

        </View>
      </View>
    </ScrollView>
  )
}
