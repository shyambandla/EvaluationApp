import * as React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import CameraIcon from '../assets/svg/CameraIcon'
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';

// export default ImageButton = (props) => {
//     return (
//         <TouchableOpacity onPress={props.onPress}>
//             <View style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: props.width,
//                 paddingVertical: 20,
//                 backgroundColor: props.backgroundColor,
//                 borderRadius: props.borderRadius ? props.borderRadius : 16,
//                 flexDirection: 'row'
//             }}>
//                 <CameraIcon />
//                 <Text style={{
//                     marginLeft: 10,
//                     fontSize: 16,
//                     fontWeight: '600',
//                     color: props.textColor ? props.textColor : 'white'
//                 }}>
//                     {props.title}
//                 </Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

export default ImageButton = async (setImageData) => {
    let options = {
        storageOptions: {
            skipBackup: true,
            path: 'images',

        },
    };
    const response = await launchCamera(options);
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
        console.log("image.uriimage.uriimage.uriimage.uri", image);
        ImgToBase64.getBase64String(image.uri)
            .then(base64String => setImageData(base64String))
            .catch(err => { });

        //props.setIsCamera(false)
    }



}