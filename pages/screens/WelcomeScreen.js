import { Text, View } from "react-native";

import Logo from "../components/logo/LogoLight"

import Google from "../components/buttons/GoogleBtn"
import Facebook from "../components/buttons/FacebookBtn"
import SignUp from "../components/buttons/GreenBtn";
import LogIn from "../components/buttons/TranstBtn";

export default function WelcomeScreen({ navigation }) {
    return (
        <View className="py-9 px-6 mt-11 flex-1 items-center">

            <View>
                <Logo />
            </View>

            <View className="w-full flex-1 flex-col items-center justify-evenly ">
                <View>
                    <Text className="font-bold text-3xl leading-10">
                        Let's Get Started
                    </Text>
                    <Text className="font-normal text-lg">
                        Let's divie in into your account
                    </Text>
                </View>

                <View className="w-full flex flex-col gap-4">
                    <View>
                        <Google />
                    </View>
                    <View>
                        <Facebook />
                    </View>
                </View>

                <View className="w-full flex flex-col gap-4">
                    <View>
                        <SignUp text="Sign up" press='signup' navigation={navigation} />
                    </View>
                    <View>
                        <LogIn text="Log in" press='login' navigation={navigation} />

                    </View>
                </View>

            </View>
            <View className="flex flex-row justify-center gap-4 text-base font-normal text-zinc-600 leading-snug tracking-wide">
                <Text>Privacy Policy</Text>
                <Text>.</Text>
                <Text>Terms of Service</Text>
            </View>
        </View>
    )
}