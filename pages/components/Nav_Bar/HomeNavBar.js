import Logo from "../logo/LogoLight"
import { View, Text, TouchableOpacity } from "react-native"
import Svg, { Path, Mask, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
    const navigation = useNavigation();

    return (

        <View className="flex flex-row justify-between items-center gap-2">

            <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                <View className="p-2 border rounded-full border-gray-200">
                    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.2312 26.25H14.2289C12.921 26.2489 11.6832 25.6725 10.744 24.626C10.4209 24.2679 10.45 23.7137 10.8094 23.3917C11.1687 23.0674 11.7217 23.0965 12.0449 23.457C12.6492 24.1302 13.425 24.5 14.23 24.5H14.2312C15.0397 24.5 15.819 24.1302 16.4245 23.4559C16.7489 23.0977 17.3019 23.0685 17.66 23.3917C18.0194 23.7149 18.0485 24.269 17.7254 24.6272C16.7827 25.6737 15.5425 26.25 14.2312 26.25Z" fill="#212121" />
                        <Mask id="mask0_8112_3659" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="1" width="23" height="21">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 1.16669H25.0797V21.406H3.5V1.16669Z" fill="white" />
                        </Mask>
                        <G mask="url(#mask0_8112_3659)">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.2882 2.91669C10.2107 2.91669 7.36868 6.11102 7.36868 8.97752C7.36868 11.403 6.69552 12.5242 6.10052 13.5135C5.62335 14.308 5.24652 14.9357 5.24652 16.2995C5.44135 18.4999 6.89385 19.656 14.2882 19.656C21.6417 19.656 23.1397 18.4485 23.3333 16.2237C23.3298 14.9357 22.953 14.308 22.4758 13.5135C21.8808 12.5242 21.2077 11.403 21.2077 8.97752C21.2077 6.11102 18.3657 2.91669 14.2882 2.91669ZM14.2882 21.406C8.83285 21.406 3.90252 21.021 3.50002 16.3742C3.49652 14.4515 4.08335 13.4739 4.60135 12.6129C5.12518 11.7402 5.61868 10.9177 5.61868 8.97752C5.61868 5.20569 9.10235 1.16669 14.2882 1.16669C19.474 1.16669 22.9577 5.20569 22.9577 8.97752C22.9577 10.9177 23.4512 11.7402 23.975 12.6129C24.493 13.4739 25.0798 14.4515 25.0798 16.2995C24.6727 21.021 19.7435 21.406 14.2882 21.406Z" fill="#212121" />
                        </G>
                    </Svg>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('bookmarks')}>
                <View className="p-2 border rounded-full border-gray-200">
                    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Mask id="mask0_8112_3669" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="2" width="21" height="25">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.33331H23.3786V26.6545H3.5V2.33331Z" fill="white" />
                        </Mask>
                        <G mask="url(#mask0_8112_3669)">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.73233 4.08331C6.7585 4.08331 5.25 5.22898 5.25 7.49115V24.6691C5.25 24.7788 5.313 24.8383 5.3655 24.8686C5.418 24.9013 5.50083 24.9246 5.5965 24.871L13.0422 20.6943C13.3082 20.5461 13.6337 20.545 13.9008 20.6955L21.2823 24.8651C21.3792 24.9211 21.462 24.8955 21.5145 24.864C21.567 24.8325 21.6288 24.773 21.6288 24.6633V7.70465C21.6288 6.80981 21.6288 4.08331 17.1512 4.08331H9.73233ZM5.48217 26.6548C5.138 26.6548 4.79383 26.5626 4.48117 26.3783C3.86633 26.0201 3.5 25.3796 3.5 24.6691V7.49115C3.5 4.21281 5.7715 2.33331 9.73233 2.33331H17.1512C21.1085 2.33331 23.3788 4.29215 23.3788 7.70465V24.6633C23.3788 25.375 23.0125 26.0155 22.3965 26.3736C21.7828 26.733 21.0432 26.74 20.4225 26.39L13.4692 22.4618L6.45167 26.3981C6.14833 26.5685 5.81583 26.6548 5.48217 26.6548Z" fill="#212121" />
                        </G>
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.6627 11.9332H9.125C8.642 11.9332 8.25 11.5412 8.25 11.0582C8.25 10.5752 8.642 10.1832 9.125 10.1832H17.6627C18.1457 10.1832 18.5377 10.5752 18.5377 11.0582C18.5377 11.5412 18.1457 11.9332 17.6627 11.9332Z" fill="#212121" />
                    </Svg>
                </View>
            </TouchableOpacity>


        </View >
    )
}