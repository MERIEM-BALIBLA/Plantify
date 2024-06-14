import { ActivityIndicator, View } from "react-native";
// import Logo from "../components/logo/Logo"
import Logo from "../components/logo/Logo"
export default function LoadingScreen() {
    return (
        <View className='relative bg-emerald-600 flex-1 flex-col justify-evenly items-center'>
            <Logo />
            <View className="">
                <ActivityIndicator size="large" color="#ffffff" style={{ transform: [{ scale: 2 }] }} />
            </View>
        </View>
    )
}

