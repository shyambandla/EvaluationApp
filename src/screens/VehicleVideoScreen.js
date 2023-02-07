import { useState } from "react"
import { ScrollView, View, Image, Dimensions, FlatList, StyleSheet, Linking } from "react-native"
import Header from "../component/Header"
import InputDetail from '../component/InputDetail'
import SimpleText from "../component/SimpleText"
import { GalleryImage } from '../constants/Images'
import ImageButton from "../component/ImageButton"
import MyCamera from "../component/MyCamera"
import VehicaleVideoComponent from "../component/VehicaleVideoComponent"
import Button from "../component/Button"
import PlayButtonIcon from "../assets/svg/PlayButtonIcon"
import VideoButton from "../component/VideoButton"
import { useSelector } from "react-redux"
import { selectToken } from "../redux/slices/MainSlice"
import axios from "axios"
const VehicleVideoScreen = ({ navigation }) => {

    const token = useSelector(selectToken);

    const [imageData, setImageData] = useState([
        {
            name: 'Front View',
            image: ''
        },
        {
            name: 'Back View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }
        , {
            name: 'Left View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }
        , {
            name: 'Right View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }
        , {
            name: 'Vehicle Number',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }
        , {
            name: 'Front row seat',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }

        , {
            name: 'Engine View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }

        , {
            name: 'Rear View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }

        , {
            name: 'Dicky View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }
        , {
            name: 'Back Row Seat',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }

        , {
            name: 'Stepney View',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }

        , {
            name: 'Meter Reading',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
        }

    ])



    const uploadFile = (data) => {
            
        // read file from uri post request


        const formData = new FormData();
        // re
        formData.append('file', data);
        // formData.append('videoFor', 'general');
        
      
       return axios.post('https://evaluationapi.riolabz.com/v1/filemanager/video/upload?videoFor=general', formData, {
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






    const InputDetailView = () => {
        return (<View style={{
            backgroundColor: '#FFFFFF', paddingTop: 25, paddingHorizontal: 26,
            borderRadius: 18, marginBottom: 100
        }}>
            <FlatList
                data={imageData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {





                    return (
                        <VehicaleVideoComponent
                            text={item.name}
                            video={item.image}
                            index={index}
                            isPlay
                            OnPlayPress={() => Linking.openURL('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4')}
                            VideoPress={() => { VideoButton(setImageData, imageData, index,token,uploadFile) }}
                        />


                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View style={{ marginTop: 57, marginBottom: 38 }}>
                            <Button
                                backgroundColor="#FCD236"
                                textColor={'black'}
                                title="Add Stock"
                                borderRadius={12}
                        //   onPress={() => navigation.navigate('CheckScreen',{headerName:"Docomentation"})}
                          onPress={() => navigation.navigate('CheckScreen',{page:0,headerName:"Docomentation"})}
                            />
                        </View>
                    )
                }}
            />
        </View>)
    }
    return (
        <View style={{ flex: 1, }}>
            <Header
                title={"Document Videos"}
                onBackPress={() => navigation.goBack()}
            />
            <View style={{ height: "95%", marginHorizontal: 18, marginTop: -40, }}>
                {InputDetailView()}
            </View>
        </View >
    )
}
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default VehicleVideoScreen