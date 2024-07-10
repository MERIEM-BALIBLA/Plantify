import { CameraView, useCameraPermissions } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Svg, Path, Mask, G } from 'react-native-svg';

export default function App() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [flashMode, setFlashMode] = useState('off')

    const cameraRef = useRef()

    const [previewVisible, setPreviewVisible] = useState(false)
    const [captureImage, setCaptureImage] = useState(null)

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const CapturePhoto = async () => {
        try{
            let photo = await cameraRef.current.takePictureAsync();
            setPreviewVisible(true)
            setCaptureImage(photo)

            // const asset = await MadiaLibrary.
        }catch(err){ 
            console.warn(err);
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera}
                facing={facing}
                ratio='17:9'
                flashMode={flashMode}
                ref={cameraRef}
                autofocus={true}
            >
               
                <View style={styles.buttonContainer}>
                    
                    <TouchableOpacity style={styles.button} onPress={CapturePhoto}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="37em" height="38em" viewBox="0 0 24 24"><Path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0" /></Svg>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="37em" height="37em" viewBox="0 0 24 24"><Path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></Svg>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="37em" height="37em" viewBox="0 0 24 24"><Path fill="white" d="M7 2v11h3v9l7-12h-4l4-8z"/></Svg>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});