import * as React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import CameraIcon from '../assets/svg/CameraIcon'
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import RNFS from 'react-native-fs';

export default VideoButton = async (setImageData, imageData, index) => {
    const options = {
        title: 'Select video',
        mediaType: 'video',
        path: 'video',
        quality: 3,
        includeBase64: true
    };
    const response = await launchCamera(options);
    // ImagePicker.showImagePicker
    console.log('Response = ', response);
    if (response.didCancel) {
        console.log('User cancelled image picker');
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
    } else {

        console.log('response', JSON.stringify(response));

        const image = response.assets[0];
        console.log("image.uriimage.uriimage.uriimage.uri", image.uri);
        // const path = `${RNFS.DocumentDirectoryPath
        //     }/${"attachment"}.mp4`;
        RNFS.writeFile(image.uri, base64Content, 'base64')
            .then(success => {
                console.log('FILE WRITTEN: ', success)
            })
            .catch(err => {
                console.log('File Write Error: ', err.message)
            })
        // RNFS.readFile(image.uri, 'base64').then(res => {

        //     var newImageData = [...imageData]
        //     newImageData[index].image = res
        //     setImageData(newImageData)
        //     console.log("newImageData>>>>>>>>>", newImageData);

        // })
        //     .catch(err => {

        //         console.log(err.message, err.code);

        //     });

        // ImgToBase64.getBase64String(image.uri)
        //     .then(base64String => {

        //     })
        //     .catch(err => { });



    }

    // ImagePicker.showImagePicker(options2, (response) => {
    //     console.log('Response = ', response);

    //     if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //     } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //     } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //     } else {
    //         const source = { uri: response.uri };

    //     }
    // })

}