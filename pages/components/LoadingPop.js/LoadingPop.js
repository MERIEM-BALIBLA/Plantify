import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function PopBtnLoad({ text, title }) {

    const Stack = createNativeStackNavigator();
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        let timer;
        if (modalVisible) {
            timer = setTimeout(() => {
                navigation.navigate('welcome');
                setModalVisible(false);
            }, 4000);
        }
        return () => clearTimeout(timer);
    }, [modalVisible, navigation]);

    return (
        <View>
           
            <TouchableOpacity onPress={() => setModalVisible(true)} className="flex  horder-neutral-100 rounded-full h-16 justify-center items-center bg-emerald-600">
            <Text className="text-base font-bold leading-relaxed tracking-wide align-center text-white">
                {title}
            </Text>
        </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 flex-col px-10 justify-center items-center bg-black bg-opacity-50 modal-box h-52 gap-6 rounded-1">
                    <View className="bg-white w-full rounded-lg py-8 px-10 flex flex-col items-center gap-4">
                        <Text>
                            {text}
                        </Text>
                        <ActivityIndicator color="#6B46C1" size="large" />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
