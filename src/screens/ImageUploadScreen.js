import { useEffect, useState } from "react"
import { ScrollView, View, Image, Dimensions, TouchableOpacity, Text } from "react-native"
import Header from "../component/Header"
import InputDetail from '../component/InputDetail'
import SimpleText from "../component/SimpleText"
import { GalleryImage } from '../constants/Images'
import Button from "../component/Button"
import ImageButton from "../component/ImageButton"
import MyCamera from "../component/MyCamera"
import DeleteIcon from "../assets/svg/DeleteIcon"
import CameraIcon from "../assets/svg/CameraIcon"
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { selectToken } from "../redux/slices/MainSlice"
import { Buffer } from 'buffer'
import RNFetchBlob from 'rn-fetch-blob'
import { setUrl } from "../redux/slices/ImagesSlice"
const ImageUploadScreen = ({ navigation, route }) => {
    const [isCamera, setIsCamera] = useState(false)


    const dispatch = useDispatch()

   


    const [imageData, setImageData] = useState('')
    const { index, setImageDatas, imageDatas,imageKey } = route.params



    useEffect(() => {
        
        setImageKey(Object.keys(imageDatas[index])[0])
    }, [imageDatas])
    const InputDetailView = () => {
        const token = useSelector(selectToken)

     
        // base64 to blob using buffer encoding
       


        const uploadFile = (data) => {
            
            // read file from uri post request


            const formData = new FormData();
            // re
            formData.append('files', {
                uri: data,
                type: 'image/jpeg',
                name: 'avatar.jpeg',
            });
            
          
           return axios.post('https://evaluationapi.riolabz.com/v1/filemanager/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            });  

//             return RNFetchBlob.fetch('POST', 'https://evaluationapi.riolabz.com/v1/filemanager/images/upload', {
//     Authorization : "Bearer " + token,
    
//     // this is required, otherwise it won't be process as a multipart/form-data request
//     'Content-Type' : 'multipart/form-data',
//   }, 
//   JSON.stringify({
//     files:[
//         // append field data from file path
//         {
//           name : 'file',
//           filename : 'avatar.png',
//           // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
//           // Or simply wrap the file path with RNFetchBlob.wrap().
//           data:  data,
          
//         },
        
//         // elements without property `filename` will be sent as plain text
        
//       ],
//         imageFor: 'general'
//   })
//   )
            
          
        }


        return (

            <View style={{
                borderWidth: 2, borderColor: '#9B9A9A', borderStyle: 'dashed',
                height: '90%', backgroundColor: '#FFFFFF', paddingTop: 25, paddingHorizontal: 26,
                borderRadius: 18, marginBottom: 100
            }}>
                {imageData ?
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: imageData }}
                            style={[{ flex: 1 }, {
                                transform: [{ rotate: '90deg' }],
                            }]}
                            resizeMode={'contain'}
                        />
                        <TouchableOpacity
                            onPress={() => setImageData('')}

                            style={{ right: 10, top: 20, alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 18, height: 18, borderRadius: 100, backgroundColor: '#FCD236' }}>
                            <DeleteIcon />
                        </TouchableOpacity>
                    </View>
                    : <View style={{ flex: 0.9, justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', }}>
                            <SimpleText
                                text={'Upload your Images'}
                                Style={{ fontSize: 16, fontWeight: '700', color: '#374151' }}

                            />
                            <View style={{ marginTop: 14 }} />
                            <Image
                                source={GalleryImage}
                                width={Dimensions.get('screen').width}
                            />
                        </View>
                        <View style={{ marginHorizontal: 60, marginTop: 27 }}>
                            <TouchableOpacity onPress={() => { ImageButton(setImageData) }} >
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: 20,
                                    backgroundColor: 'black',
                                    flexDirection: 'row'
                                }}>
                                    <CameraIcon />
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 16,
                                        fontWeight: '600',
                                        color: 'white'
                                    }}>
                                        Camera
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                }

                <View style={{ flex: 0.2, marginTop: 24, }} >

                    <Button
                        backgroundColor="#FCD236"
                        textColor={'black'}
                        title="Submit"
                        borderRadius={12}
                        onPress={() => {
                            // console.log(imageData)
                            uploadFile(imageData).then(res => {
                                console.log(res)
                                var newData = [...imageDatas]
                            newData[index].image = res.data.data[0]
                            setImageDatas(newData)
                            dispatch(setUrl({key:imageKey,value:res.data.data[0]}))
                            navigation.goBack()
                            }).catch(err => {
                               
                                console.log(err)
                            })
                        }}

                    />
                </View>
            </View>

        )
    }
    return (
        <View style={{ flex: 1, }}>
            {
                <>
                    <Header
                        title={"Document Images"}
                        onBackPress={() => navigation.goBack()}
                    />

                    <View style={{ flex: 1, marginHorizontal: 18, marginTop: -40, }}>
                        {InputDetailView()}
                    </View>
                </>}
            {/**/}
        </View >
    )
}

export default ImageUploadScreen