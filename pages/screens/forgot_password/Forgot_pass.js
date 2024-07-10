import { View, TextInput, Text, SafeAreaView } from "react-native"
import { Svg, Path, Mask, G } from 'react-native-svg';
import GreenBtn from "../../components/buttons/GreenBtn";

export default function Forgot_password({ navigation }) {
    return (
        <View className='p-6 flex-1 flex-col bg-white justify-between'>
            <View>
                <View>
                    <Text className='font-bold text-3xl	leading-loose	text-neutral-800'>
                        Forgot Your Password?
                    </Text>
                    <Text className='text-lg	font-normal	leading-loose	tracking-wide	text-zinc-600'>
                        Enter the email address associated with your Plantify account. We'll send you a one-time verification code to reset your password.
                    </Text>
                </View>
                <SafeAreaView>
                    <View className="flex flex-col gap-2">
                        <Text className='text-lg font-semibold leading-loose tracking-wide text-neutral-800'>
                            Your Registered Email
                        </Text>
                        <View className="flex flex-row items-center gap-2 p-4 bg-zinc-50 rounded-xl text-lg">
                            <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.81346 11.7207C9.25596 11.7207 8.70012 11.5366 8.23512 11.1682L4.49762 8.15491C4.22846 7.93824 4.18679 7.54408 4.40262 7.27574C4.62012 7.00824 5.01346 6.96574 5.28179 7.18158L9.01596 10.1916C9.48512 10.5632 10.146 10.5632 10.6185 10.1882L14.3151 7.18324C14.5835 6.96408 14.9768 7.00574 15.1951 7.27408C15.4126 7.54158 15.3718 7.93491 15.1043 8.15324L11.401 11.1632C10.9326 11.5349 10.3726 11.7207 9.81346 11.7207Z" fill="#212121" />
                                <Mask id="mask0_7993_11698" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="2" width="19" height="17">
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.833008 2.16675H18.7496V18.4167H0.833008V2.16675Z" fill="white" />
                                </Mask>
                                <G mask="url(#mask0_7993_11698)">
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.69884 17.1667H13.8822C13.8838 17.1651 13.8905 17.1667 13.8955 17.1667C14.8463 17.1667 15.6897 16.8267 16.3363 16.1809C17.0872 15.4334 17.4997 14.3592 17.4997 13.1567V7.43341C17.4997 5.10591 15.978 3.41675 13.8822 3.41675H5.70051C3.60467 3.41675 2.08301 5.10591 2.08301 7.43341V13.1567C2.08301 14.3592 2.49634 15.4334 3.24634 16.1809C3.89301 16.8267 4.73717 17.1667 5.68717 17.1667H5.69884ZM5.68467 18.4167C4.39884 18.4167 3.25051 17.9501 2.36384 17.0667C1.37634 16.0817 0.833008 14.6934 0.833008 13.1567V7.43341C0.833008 4.43091 2.92551 2.16675 5.70051 2.16675H13.8822C16.6572 2.16675 18.7497 4.43091 18.7497 7.43341V13.1567C18.7497 14.6934 18.2063 16.0817 17.2188 17.0667C16.333 17.9492 15.1838 18.4167 13.8955 18.4167H13.8822H5.70051H5.68467Z" fill="#212121" />
                                </G>
                            </Svg>
                            <TextInput placeholder="Email" className="w-11/12 font-semibold" />
                        </View>
                    </View>

                </SafeAreaView>
            </View>
            <View>
                {/* <GreenBtn text="Send OTP code" press='Otp_code' navigation={navigation} /> */}
                <GreenBtn text="Send OTP code" press='Otp_code' navigation={navigation} />

            </View>


        </View >
    )
}