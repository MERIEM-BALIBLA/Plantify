import { Image } from "react-native"
export default function Logo() {
    const img = require('../../../assets/images/Morshida_logo_light.png');

    return (
        <Image source={img} />
    )
}