import { View, Text } from "react-native"
import Svg, { Path, Mask, G } from 'react-native-svg';

export default function AccountSecurity() {
    return (
        <View className='flex flex-row justify-between'>
            <View className='flex justify-center items-center w-12 h-12 rounded-full border p-3'>
                <Svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Mask id="mask0_8190_12577" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="25">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.666992 0.333801H20.4616V24.082H0.666992V0.333801Z" fill="white" />
                    </Mask>
                    <G mask="url(#mask0_8190_12577)">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.5643 2.08331C9.57498 2.08331 3.33331 4.28131 2.61348 4.88215C2.40114 5.09565 2.39298 5.46665 2.43848 7.95048C2.45948 9.14748 2.48864 10.7738 2.48864 13.0255C2.48864 19.0933 9.16431 21.7871 10.5631 22.283C11.9608 21.7848 18.64 19.0758 18.64 13.0255C18.64 10.7715 18.6691 9.14398 18.6913 7.94698C18.7356 5.46548 18.7275 5.09448 18.5023 4.87048C17.7965 4.28131 11.5536 2.08331 10.5643 2.08331ZM10.5643 24.082C10.4791 24.082 10.394 24.0703 10.3111 24.0446C9.92031 23.9268 0.738642 21.0545 0.738642 13.0255C0.738642 10.789 0.709476 9.17081 0.688476 7.98315C0.634809 5.01631 0.623142 4.39798 1.38964 3.63265C2.30548 2.71448 9.24131 0.333313 10.5643 0.333313C11.8861 0.333313 18.822 2.71448 19.7401 3.63265C20.5055 4.39798 20.4938 5.01631 20.4401 7.97965C20.4191 9.16731 20.39 10.7855 20.39 13.0255C20.39 21.0545 11.2083 23.9268 10.8175 24.0446C10.7346 24.0703 10.6495 24.082 10.5643 24.082Z" fill="#212121" />
                    </G>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.74039 14.9394C9.50822 14.9394 9.28539 14.8473 9.12089 14.6828L6.91356 12.4731C6.57289 12.1313 6.57289 11.5759 6.91472 11.2353C7.25539 10.8934 7.81072 10.8934 8.15256 11.2353L9.74039 12.8254L13.6697 8.89608C14.0116 8.55425 14.5646 8.55425 14.9064 8.89608C15.2482 9.23792 15.2482 9.79208 14.9064 10.1339L10.3587 14.6828C10.1954 14.8473 9.97256 14.9394 9.74039 14.9394Z" fill="#212121" />
                </Svg>

            </View>
            <View className='w-60'>
                <Text className='text-lg font-semibold leading-8 text-neutral-800'>
                    Account Security Alert 🔒
                </Text>
                <Text className='text-sm font-medium leading-6	text-neutral-700'>
                    We've noticed some unusual activity on your account. Please review your recent logins and update your password if necessary.                </Text>
                <Text className='text-xs leading-5 text-zinc-600'>09:41 AM</Text>

            </View>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="#212121" />
            </Svg>

        </View>
    )
}