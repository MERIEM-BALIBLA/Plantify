import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const OTP_code = () => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

    useEffect(() => {
        firstInput.current.focus();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                translucent
            />

            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={firstInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 1: text });
                            text && secondInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={secondInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 2: text });
                            text ? thirdInput.current.focus() : firstInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={thirdInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 3: text });
                            text ? fourthInput.current.focus() : secondInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={fourthInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 4: text });
                            !text && thirdInput.current.focus();
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.signinButton}
                onPress={() => console.log(otp)}>
                <Text style={styles.signinButtonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center the content vertically
        backgroundColor: '#f8f9fa', // Light background color
    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ced4da', // Light gray border
    },
    otpText: {
        fontSize: 25,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: '#ffffff', // White background for input fields
        color: '#495057', // Darker text color
    },
    signinButton: {
        borderRadius: 8,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 12,
        backgroundColor: '#007bff', // Blue background for the button
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: '#ffffff', // White text color
    },
});

export default OTP_code;
