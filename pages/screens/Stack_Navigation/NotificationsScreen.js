import { ScrollView, View, Text } from "react-native"
import Svg, { Path, Mask, G } from 'react-native-svg';
import News from "../../components/notifications/News"
import PasswordReset from "../../components/notifications/PasswordReset"
import EventReminder from "../../components/notifications/EventReminder"
import AccountSecurity from "../../components/notifications/AccountSecurity"
import SystemUpdate from "../../components/notifications/SystemUpdate"


export default function NotificationScreen() {
    return (
        <ScrollView className='px-6 py-4 flex flex-col gap-4'>
            <View>
                <AccountSecurity />
            </View>
            <View>
                <SystemUpdate />
            </View>
            <View className="flex flex-row items-center justify-between">
                <Text>Yesterday</Text>
                <View className='w-[270] h-0.5 bg-gray-300' />
            </View>
            <View>
                <PasswordReset />
            </View>
            <View>
                <News />
            </View>
            <View>
                <EventReminder />
            </View>
        </ScrollView>
    )
}