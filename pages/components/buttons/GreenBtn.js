import { TouchableOpacity, Text } from "react-native"
export default function GreenBtn({ text, press, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(press)} className="flex horder-neutral-100 rounded-full h-16 justify-center items-center bg-emerald-600">
            <Text className="text-base font-bold leading-relaxed tracking-wide align-center text-white">
                {text}
            </Text>
        </TouchableOpacity>
    )
}