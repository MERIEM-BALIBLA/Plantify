// import { TouchableOpacity, Text } from "react-native"
// export default function GreenBtn({ text, press, navigation }) {
//     return (
//         <TouchableOpacity onPress={() => navigation.navigate(press)} className="flex horder-neutral-100 rounded-full h-16 justify-center items-center bg-emerald-600">
//             <Text className="text-base font-bold leading-relaxed tracking-wide align-center text-white">
//                 {text}
//             </Text>
//         </TouchableOpacity>
//     )
// }
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function GreenBtn({ text, press, navigation, width, height, fontsize }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(press)}
            style={{
                width: width,
                height: height,
                backgroundColor: '#00A86B',
                borderRadius: 100, // Adjust as needed to make it a circle
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: fontsize,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
