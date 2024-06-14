import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Svg, Path, LinearGradient, Stop, Defs, ClipPath, Rect } from 'react-native-svg';

export default function FacebookBtn() {
    return (
        <TouchableOpacity className="relative border border-zinc-300 flex horder-neutral-100 rounded-full h-16 justify-center items-center">
             <Svg className="absolute left-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Defs>
                    <LinearGradient id="gradient" x1="3.5958" y1="4.0958" x2="21.969" y2="22.469" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#2AA4F4" />
                        <Stop offset="1" stopColor="#007AD9" />
                    </LinearGradient>
                    <ClipPath id="clip">
                        <Rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                    </ClipPath>
                </Defs>
                <Path d="M12 0.5C5.3724 0.5 0 5.8724 0 12.5C0 19.1276 5.3724 24.5 12 24.5C18.6276 24.5 24 19.1276 24 12.5C24 5.8724 18.6276 0.5 12 0.5Z" fill="url(#gradient)" clipPath="url(#clip)" />
                <Path d="M13.7281 17.3578H16.9846L17.4961 14.0496H13.7281V12.2414C13.7281 10.8673 14.1773 9.64861 15.4627 9.64861H17.5282V6.76199C17.1652 6.71292 16.3976 6.60596 14.9474 6.60596C11.9186 6.60596 10.1431 8.2053 10.1431 11.8494V14.0503H7.0293V17.3584H10.1424V26.4512C10.759 26.543 11.3838 26.606 12.0249 26.606C12.6044 26.606 13.17 26.5531 13.7281 26.4776V17.3578Z" fill="white" />
            </Svg>
            <Text className="text-base font-bold leading-relaxed tracking-wide align-center">Continue with Facebook</Text>
        </TouchableOpacity>
    );
}

