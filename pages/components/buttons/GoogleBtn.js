import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Svg, Path } from 'react-native-svg';

export default function GoogleBtn() {
    return (
        <TouchableOpacity className="relative border border-zinc-300 flex horder-neutral-100 rounded-full h-16 justify-center items-center">
            <Svg className="absolute left-4" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M22.0001 11.974C22.0001 11.0511 21.9252 10.3776 21.7632 9.6792H11.2246V13.8447H17.4105C17.2858 14.8799 16.6124 16.4388 15.1157 17.4864L15.0948 17.6258L18.4269 20.2072L18.6577 20.2302C20.7778 18.2721 22.0001 15.3912 22.0001 11.974Z" fill="#4285F4" />
                <Path d="M11.2245 22.9489C14.2551 22.9489 16.7993 21.9511 18.6576 20.23L15.1156 17.4862C14.1678 18.1472 12.8957 18.6087 11.2245 18.6087C8.25627 18.6087 5.73701 16.6507 4.83897 13.9443L4.70734 13.9555L1.24258 16.6369L1.19727 16.7629C3.04305 20.4295 6.83444 22.9489 11.2245 22.9489Z" fill="#34A853" />
                <Path d="M4.83895 13.9445C4.602 13.2461 4.46486 12.4977 4.46486 11.7245C4.46486 10.9513 4.602 10.203 4.82649 9.50458L4.82021 9.35583L1.31203 6.63135L1.19725 6.68594C0.436513 8.20751 0 9.91616 0 11.7245C0 13.5329 0.436513 15.2415 1.19725 16.763L4.83895 13.9445Z" fill="#FBBC05" />
                <Path d="M11.2245 4.84011C13.3322 4.84011 14.7539 5.75053 15.5646 6.51136L18.7324 3.41837C16.7869 1.60998 14.2551 0.5 11.2245 0.5C6.83444 0.5 3.04305 3.01925 1.19727 6.68589L4.8265 9.50452C5.73701 6.79818 8.25627 4.84011 11.2245 4.84011Z" fill="#EB4335" />
            </Svg>
            <Text className="text-base font-bold leading-relaxed tracking-wide align-center">Continue with Google</Text>
        </TouchableOpacity>
    );
}

