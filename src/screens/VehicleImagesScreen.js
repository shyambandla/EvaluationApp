import { useState,useEffect } from "react"
import { ScrollView, View, Image, Dimensions, FlatList,PermissionsAndroid } from "react-native"
import Header from "../component/Header"
import InputDetail from '../component/InputDetail'
import SimpleText from "../component/SimpleText"
import { GalleryImage } from '../constants/Images'
import ImageButton from "../component/ImageButton"
import MyCamera from "../component/MyCamera"
import VehicaleImageComponent from "../component/VehicaleImageComponent"
import Button from "../component/Button"
import { useSelector } from "react-redux"
import { selectToken } from "../redux/slices/MainSlice"
import { selectImages } from "../redux/slices/ImagesSlice"
const VehicleImagesScreen = ({ navigation }) => {


    useEffect(() => {
        requestCameraPermission()
    }, [])


    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
        // ask for storage permission
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                title: 'Cool Photo App Storage Permission',
                message:
                    'Cool Photo App needs access to your storage ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the storage');
            } else {
                console.log('storage permission denied');
            }
            } catch (err) {

            console.warn(err);
            }


      };
      

    useEffect(() =>{
        const imgs=Object.keys(images).map((key)=>images[key])
        
        setImageData(imgs)

        console.log(imgs)

    },[images])
   

    const images=useSelector(selectImages)


    const [imageData, setImageData] = useState([])

   
    const convertCase = (str) => {


const text = str;
const result = text.replace(/([A-Z])/g, " $1");
const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

return finalResult;
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
                        <VehicaleImageComponent
                            text={convertCase(Object.keys(images)[index])}
                            image={item.image}
                            index={index}
                            ImagePress={() => navigation.navigate("ImageUploadScreen", {
                                index: index,
                                imageDatas: imageData,
                                setImageDatas: setImageData,
                                imageKey:Object.keys(images)[index]

                            })}
                            DeletePicture={() => {
                                var newData = [...imageData]
                                newData[index].image = ''
                                setImageData(newData)
                            }}
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
                                onPress={() => navigation.navigate('VehicleVideoScreen')}
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
                title={"Document Images"}
                onBackPress={() => navigation.goBack()}
            />
            <View style={{ height: "95%", marginHorizontal: 18, marginTop: -40, }}>
                {InputDetailView()}
            </View>
        </View >
    )
}

export default VehicleImagesScreen