import { useState } from "react";

// import Validation from "../../../Validation_form/validation"

import { Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import { Modal } from "react-native"
import { Svg, Path, Mask, G } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';

import Google from "../../components/buttons/GoogleBtn"
import Facebook from "../../components/buttons/FacebookBtn"
import Signup from "../../components/buttons/GreenBtn"

import LoadingPop from "../../components/LoadingPop.js/LoadingPop";

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        let errors = {};
        if (!email) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        setErrors(errors);

        const isValid = Object.keys(errors).length === 0;
        return isValid;
    };

    const handleLogin = () => {
        if (validateForm()) {
            console.log("Submitted:", email, password);
            setErrors({});
            return true; // Form is valid
        } else {
            return false; // Form is invalid
        }
    };

    return (
        <View className='p-6 flex-1 flex-col bg-white justify-between'>
            <View>
                <Text className='font-bold text-3xl	leading-loose	text-neutral-800'>
                    Welcome Back!
                </Text>
                <Text className='text-lg	font-normal	leading-loose	tracking-wide	text-zinc-600'>
                    Let's Continue Your Green Journey
                </Text>
            </View>
            <SafeAreaView className="bg-white">
                <View className="flex flex-col gap-2">
                    {
                        errors.email ? <Text>{errors.email}</Text> : null
                    }
                    <Text className='text-lg	font-semibold	leading-loose	tracking-wide	text-neutral-800'>
                        Email
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
                        <TextInput placeholder="Email" className="w-11/12 font-semibold"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>
                <View className="flex flex-col gap-2">
                    {
                        errors.password ? <Text>{errors.password}</Text> : null
                    }
                    <Text className='text-lg	font-semibold	leading-loose	tracking-wide	text-neutral-800'>
                        Password
                    </Text>
                    <View className="flex flex-row items-center gap-2 p-4 bg-zinc-50 rounded-xl text-lg">
                        <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.1018 8.99989C13.7568 8.99989 13.4768 8.71989 13.4768 8.37489V6.58572C13.4768 4.83905 12.056 3.41822 10.3093 3.41822H10.296C9.45181 3.41822 8.66098 3.74322 8.06348 4.33572C7.46181 4.93072 7.12931 5.72489 7.12598 6.57155V8.37489C7.12598 8.71989 6.84598 8.99989 6.50098 8.99989C6.15598 8.99989 5.87598 8.71989 5.87598 8.37489V6.58572C5.88098 5.38572 6.34514 4.27822 7.18264 3.44822C8.02098 2.61739 9.12764 2.13655 10.3118 2.16822C12.7451 2.16822 14.7268 4.14989 14.7268 6.58572V8.37489C14.7268 8.71989 14.4468 8.99989 14.1018 8.99989Z" fill="#212121" />
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.11801 8.94067C5.71967 8.94067 4.58301 10.0773 4.58301 11.4757V15.0498C4.58301 16.4482 5.71967 17.5848 7.11801 17.5848H13.4855C14.883 17.5848 16.0205 16.4482 16.0205 15.0498V11.4757C16.0205 10.0773 14.883 8.94067 13.4855 8.94067H7.11801ZM13.4855 18.8348H7.11801C5.03051 18.8348 3.33301 17.1373 3.33301 15.0498V11.4757C3.33301 9.38817 5.03051 7.69067 7.11801 7.69067H13.4855C15.573 7.69067 17.2705 9.38817 17.2705 11.4757V15.0498C17.2705 17.1373 15.573 18.8348 13.4855 18.8348Z" fill="#212121" />
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.3018 14.813C9.95676 14.813 9.67676 14.533 9.67676 14.188V12.3372C9.67676 11.9922 9.95676 11.7122 10.3018 11.7122C10.6468 11.7122 10.9268 11.9922 10.9268 12.3372V14.188C10.9268 14.533 10.6468 14.813 10.3018 14.813Z" fill="#212121" />
                        </Svg>
                        <TextInput placeholder="Password" className="w-11/12 font-semibold"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            name="Password"
                        />

                        <TouchableOpacity className="absolute right-2" onPress={togglePasswordVisibility}>
                            <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={18} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <View>


            </View>
            <View className='flex flex-row justify-center items-center'>
                <TouchableOpacity className="" onPress={() => navigation.navigate('forgot_password')}>
                    <Text className='font-semibold text-emerald-600'>Forgot password ?</Text>
                </TouchableOpacity>
            </View>

            <View className='flex flex-row items-center justify-center'>
                <View className='w-40 h-0.5 bg-gray-300 mr-2' />
                <Text className="mr-2">or</Text>
                <View className='w-40 h-0.5 bg-gray-300' />
            </View>

            <View className='flex flex-col gap-2'>
                <View>
                    <Google />
                </View>
                <View>
                    <Facebook />
                </View>

            </View>

            <View>
                <LoadingPop
                    validateForm={handleLogin}
                    text="Log in..."
                    title="Log in"
               
                />
            </View>
        </View >
    )
}