import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity, Modal, ActivityIndicator, StyleSheet } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function PopBtnLoad({ validateForm, text, title }) {

    const Stack = createNativeStackNavigator();
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        let timer;
        if (modalVisible) {
            timer = setTimeout(() => {
                navigation.navigate('HomeTabs');
                setModalVisible(false);
            }, 9000);
        }
        return () => clearTimeout(timer);
    }, [modalVisible, navigation]);

    const handlePress = () => {
        if (validateForm()) {
            setModalVisible(true);
        }
    };
    return (
        <View className="">
            <TouchableOpacity
                onPress={handlePress}
                className="flex  horder-neutral-100 rounded-full h-16 justify-center items-center bg-emerald-600">
                <Text className="text-base font-bold leading-relaxed tracking-wide align-center text-white">
                    {title}
                </Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.container} className="flex-1 justify-center items-center px-8">
                    <View className="bg-white w-full rounded-lg py-8 px-10 flex flex-col items-center gap-4">
                        <ActivityIndicator color="rgba(0, 168, 107, 1)" size="large" />
                        <Text className="text-xl font-semibold text-zinc-500 mb-2">{text}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with opacity
    },

});