import { View, Text } from "react-native"
import Svg, { Path, Mask, G } from 'react-native-svg';

export default function SystemUpdate() {
    return (
        <View className='flex flex-row justify-between'>
            <View className='flex justify-center items-center w-12 h-12 rounded-full border p-3'>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Mask id="mask0_8190_13037" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.333008 0.333313H23.6662V23.6666H0.333008V0.333313Z" fill="white" />
                    </Mask>
                    <G mask="url(#mask0_8190_13037)">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.94101 2.08331C3.99051 2.08331 2.08301 4.10515 2.08301 7.23531V16.7646C2.08301 19.8948 3.99051 21.9166 6.94101 21.9166H17.0537C20.0077 21.9166 21.9163 19.8948 21.9163 16.7646V7.23531C21.9163 4.10515 20.0077 2.08331 17.056 2.08331H6.94101ZM17.0537 23.6666H6.94101C2.98834 23.6666 0.333008 20.8923 0.333008 16.7646V7.23531C0.333008 3.10765 2.98834 0.333313 6.94101 0.333313H17.056C21.0098 0.333313 23.6663 3.10765 23.6663 7.23531V16.7646C23.6663 20.8923 21.0098 23.6666 17.0537 23.6666Z" fill="#212121" />
                    </G>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.9922 17.5417C11.5092 17.5417 11.1172 17.1497 11.1172 16.6667V12C11.1172 11.517 11.5092 11.125 11.9922 11.125C12.4752 11.125 12.8672 11.517 12.8672 12V16.6667C12.8672 17.1497 12.4752 17.5417 11.9922 17.5417Z" fill="#212121" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.9987 8.73812C11.3535 8.73812 10.8262 8.21662 10.8262 7.57145C10.8262 6.92629 11.343 6.40479 11.987 6.40479H11.9987C12.6438 6.40479 13.1653 6.92629 13.1653 7.57145C13.1653 8.21662 12.6438 8.73812 11.9987 8.73812Z" fill="#212121" />
                </Svg>

            </View>
            <View className='w-60'>
                <Text className='text-lg font-semibold leading-8 text-neutral-800'>
                    System Update Available 🔄
                </Text>
                <Text className='text-sm font-medium leading-6	text-neutral-700'>
                    A new system update is ready for installation. It includes performance improvements and bug fixes.</Text>
                <Text className='text-xs leading-5 text-zinc-600'>09:41 AM</Text>

            </View>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="#212121" />
            </Svg>

        </View>
    )
}