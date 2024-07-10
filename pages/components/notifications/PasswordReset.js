import { View, Text } from "react-native"
import Svg, { Path } from 'react-native-svg';

export default function PasswordReset() {
    return (
        <View className='flex flex-row justify-between'>
            <View className='flex justify-center items-center w-12 h-12 rounded-full border p-3'>
                <Svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.7437 9.90001C15.2607 9.90001 14.8687 9.50801 14.8687 9.02501V6.52018C14.8687 4.07485 12.8795 2.08568 10.4342 2.08568H10.4155C9.23371 2.08568 8.12654 2.54068 7.29004 3.37018C6.44771 4.20318 5.98221 5.31501 5.97754 6.50035V9.02501C5.97754 9.50801 5.58554 9.90001 5.10254 9.90001C4.61954 9.90001 4.22754 9.50801 4.22754 9.02501V6.52018C4.23454 4.84018 4.88437 3.28968 6.05687 2.12768C7.23054 0.964513 8.77987 0.291346 10.4377 0.335679C13.8444 0.335679 16.6187 3.11001 16.6187 6.52018V9.02501C16.6187 9.50801 16.2267 9.90001 15.7437 9.90001Z" fill="#212121" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.96599 9.8169C4.00833 9.8169 2.41699 11.4082 2.41699 13.3659V18.3697C2.41699 20.3274 4.00833 21.9187 5.96599 21.9187H14.8805C16.837 21.9187 18.4295 20.3274 18.4295 18.3697V13.3659C18.4295 11.4082 16.837 9.8169 14.8805 9.8169H5.96599ZM14.8805 23.6687H5.96599C3.04349 23.6687 0.666992 21.2922 0.666992 18.3697V13.3659C0.666992 10.4434 3.04349 8.06689 5.96599 8.06689H14.8805C17.803 8.06689 20.1795 10.4434 20.1795 13.3659V18.3697C20.1795 21.2922 17.803 23.6687 14.8805 23.6687Z" fill="#212121" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.4229 18.0382C9.93985 18.0382 9.54785 17.6462 9.54785 17.1632V14.572C9.54785 14.089 9.93985 13.697 10.4229 13.697C10.9059 13.697 11.2979 14.089 11.2979 14.572V17.1632C11.2979 17.6462 10.9059 18.0382 10.4229 18.0382Z" fill="#212121" />
                </Svg>

            </View>
            <View className='w-60'>
                <Text className='text-lg font-semibold leading-8 text-neutral-800'>
                    Password Reset Successful ✅
                </Text>
                <Text className='text-sm font-medium leading-6	text-neutral-700'>
                    Your password has been successfully reset. If you didn't request this change, please contact support immediately.                </Text>
                <Text className='text-xs leading-5 text-zinc-600'>09:41 AM</Text>

            </View>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="#212121" />
            </Svg>

        </View>
    )
}