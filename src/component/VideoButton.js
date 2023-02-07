import * as React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import CameraIcon from '../assets/svg/CameraIcon'
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { selectToken } from '../redux/slices/MainSlice';
import { setVideoUrl } from '../redux/slices/ImagesSlice';
export default VideoButton = async (setImageData, imageData, index,token,uploadFile,saveVideoUrl) => {
    const options = {
        title: 'Select video',
        mediaType: 'video',
        path: 'video',
        quality: 3,
        

    };

//    const dispatch = useDispatch();

   



    
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
        console.log("image.uriimage.uriimage.uriimage.uri", image.uri);
        uploadFile(image).then(res => {
            console.log("res", res);

            const url=res.data.data
            console.log("url", url);
            saveVideoUrl(url)
            // dispatch(setVideoUrl(url))
        }).catch(err => {
            console.log("err", err);
        })
        // RNFS.writeFile(image.uri, base64Content, 'base64')
        //     .then(success => {
        //         console.log('FILE WRITTEN: ', success)
        //     })
        //     .catch(err => {
        //         console.log('File Write Error: ', err.message)
        //     })
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