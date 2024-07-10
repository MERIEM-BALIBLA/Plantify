import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const NumericKeyboard = ({ onInput }) => {
    const handleClick = (id) => {
        onInput(id);
    };

    return (
        <View style={styles.keyboard}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, 'Clear'].map((key) => (
                <TouchableOpacity key={key} style={styles.button} onPress={() => handleClick(key)}>
                    {key === 'Clear' ? (
                        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clipPath="url(#clip0)">
                                <Path d="M23.333 7C23.6424 7 23.9392 7.12292 24.158 7.34171C24.3767 7.5605 24.4997 7.85725 24.4997 8.16667V19.8333C24.4997 20.1428 24.3767 20.4395 24.158 20.6583C23.9392 20.8771 23.6424 21 23.333 21H10.4997L4.66633 15.1667C4.37936 14.8458 4.2207 14.4305 4.2207 14C4.2207 13.5695 4.37936 13.1542 4.66633 12.8333L10.4997 7H23.333Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M18.6667 11.6666L14 16.3333M14 11.6666L18.6667 16.3333L14 11.6666Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </G>
                            <Defs>
                                <ClipPath id="clip0">
                                    <Rect width="28" height="28" fill="white" />
                                </ClipPath>
                            </Defs>
                        </Svg>
                    ) : (
                        <Text style={styles.keyText}>{key}</Text>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: '30%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    keyText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default NumericKeyboard;
