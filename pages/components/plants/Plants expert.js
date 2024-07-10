import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Path, Mask, G } from 'react-native-svg';


export default function Plants_expert({ navigation, press }) {
    return (
        <View className="flex flex-col gap-4 mt-2">
            
            <TouchableOpacity
                onPress={() => navigation.navigate(press)}
            >
                <Text>hello</Text>
            </TouchableOpacity>

            <View className='h-0.5 bg-zinc-200' />
            {/* card */}
            <View className="flex flex-row justify-between items-center">
                <View className="w-[60px] h-[60px] border rounded-full" >
                    <Image className="w-full h-full" source={{ urs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" }} />
                </View>
                <View className="w-[65%] h-[55] flex flex-col justify-between">
                    <Text>kgdkqz</Text>
                    <Text>description</Text>
                </View>

                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Mask id="mask0_8235_9635" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.00024H22.493V22.494H1V1.00024Z" fill="white" />
                    </Mask>
                    <G mask="url(#mask0_8235_9635)">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.10844 19.6752C6.68844 19.6752 7.23544 19.8952 7.81444 20.1282C11.3614 21.7682 15.5564 21.0222 18.2894 18.2902C21.8954 14.6822 21.8954 8.81324 18.2894 5.20724C16.5434 3.46124 14.2214 2.50024 11.7494 2.50024C9.27644 2.50024 6.95344 3.46224 5.20844 5.20824C2.47444 7.94024 1.73044 12.1352 3.35544 15.6482C3.58944 16.2272 3.81544 16.7912 3.81544 17.3772C3.81544 17.9622 3.61444 18.5512 3.43744 19.0712C3.29144 19.4992 3.07044 20.1452 3.21244 20.2872C3.35144 20.4312 4.00144 20.2042 4.43044 20.0572C4.94544 19.8812 5.52944 19.6792 6.10844 19.6752ZM11.7244 22.4942C10.1964 22.4942 8.65844 22.1712 7.21944 21.5052C6.79544 21.3352 6.39844 21.1752 6.11344 21.1752C5.78544 21.1772 5.34444 21.3292 4.91844 21.4762C4.04444 21.7762 2.95644 22.1502 2.15144 21.3482C1.34944 20.5452 1.71944 19.4602 2.01744 18.5872C2.16444 18.1572 2.31544 17.7132 2.31544 17.3772C2.31544 17.1012 2.18244 16.7492 1.97844 16.2422C0.105437 12.1972 0.971437 7.32224 4.14844 4.14724C6.17644 2.11824 8.87544 1.00024 11.7484 1.00024C14.6214 1.00024 17.3214 2.11724 19.3494 4.14624C23.5414 8.33824 23.5414 15.1582 19.3494 19.3502C17.2944 21.4062 14.5274 22.4942 11.7244 22.4942Z" fill="#212121" />
                    </G>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.6964 13.1628C15.1444 13.1628 14.6924 12.7158 14.6924 12.1628C14.6924 11.6098 15.1354 11.1628 15.6874 11.1628H15.6964C16.2484 11.1628 16.6964 11.6098 16.6964 12.1628C16.6964 12.7158 16.2484 13.1628 15.6964 13.1628Z" fill="#212121" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.6876 13.1628C11.1356 13.1628 10.6836 12.7158 10.6836 12.1628C10.6836 11.6098 11.1256 11.1628 11.6786 11.1628H11.6876C12.2396 11.1628 12.6876 11.6098 12.6876 12.1628C12.6876 12.7158 12.2396 13.1628 11.6876 13.1628Z" fill="#212121" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.67783 13.1628C7.12583 13.1628 6.67383 12.7158 6.67383 12.1628C6.67383 11.6098 7.11683 11.1628 7.66883 11.1628H7.67783C8.22983 11.1628 8.67783 11.6098 8.67783 12.1628C8.67783 12.7158 8.22983 13.1628 7.67783 13.1628Z" fill="#212121" />
                </Svg>
            </View>
            {/* end card */}
            <View className='h-0.5 bg-zinc-200' />
        </View>
    )
}