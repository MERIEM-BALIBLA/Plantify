import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TnastBtn({text, press, navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(press)} className="flex horder-neutral-100 rounded-full h-16 justify-center items-center bg-emerald-50">
            <Text className="text-base font-bold leading-relaxed tracking-wide align-center text-emerald-600">{text}</Text>
        </TouchableOpacity>
    );
}

