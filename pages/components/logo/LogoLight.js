import { Image, View } from "react-native"
export default function Logo() {
    const img = require('../../../assets/images/Morshida_logo_light.png');

    return (
        <View className="">

            <Image source={img} /></View>
    )
}