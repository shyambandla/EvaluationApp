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
import { useSelector,useDispatch } from "react-redux"
import { selectToken } from "../redux/slices/MainSlice"
import axios from "axios"
import { setUrl, setVideoUrl } from "../redux/slices/ImagesSlice"
const QcVideos = ({ navigation }) => {

    const token = useSelector(selectToken);
    const videoData = useSelector((state)=>state.basicCarDetail.QcData)  

    const dispatch = useDispatch()

    const saveVideoUrl = (url) => {
        dispatch(setVideoUrl(url))
        setImageData([{
            name: 'Inspection Video',
            image: url
        }])
    }
    const [imageData, setImageData] = useState([
        {
            name: 'Inspection Video',
            image: videoData.data.inspectionVideo
        },
        

        
        
       

       

    ])



    const uploadFile = (data) => {
            
        // read file from uri post request


        const formData = new FormData();
        // re
        formData.append('file', {
            uri: data.uri,
            type: "video/mp4",
            name: "video.mp4"
        });
        // formData.append('videoFor', 'general');
        
      
       return axios.post('https://evaluationapi.riolabz.com/v1/filemanager/video/upload?videoFor=general', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        });  
 
        
      
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
                            OnPlayPress={() => Linking.openURL(videoData.data.inspectionVideo)}
                          //  VideoPress={() => { VideoButton(setImageData, imageData, index,token,uploadFile,saveVideoUrl) }}
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
                     //     onPress={() => navigation.navigate('CheckScreen',{page:0,headerName:"Docomentation"})}
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
export default QcVideos