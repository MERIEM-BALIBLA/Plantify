import { Image } from "react-native"
export default function Logo() {
    const img = require('../../../assets/images/Morshida_Logo.png');

    return (
        <Image source={img} />
    )
}