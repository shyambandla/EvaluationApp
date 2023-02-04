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
const ImageUploadScreen = ({ navigation, route }) => {
    const [isCamera, setIsCamera] = useState(false)

    const [imageData, setImageData] = useState('')
    const { index, setImageDatas, imageDatas } = route.params

    useEffect(() => {

    }, [imageData])
    const InputDetailView = () => {
        return (

            <View style={{
                borderWidth: 2, borderColor: '#9B9A9A', borderStyle: 'dashed',
                height: '90%', backgroundColor: '#FFFFFF', paddingTop: 25, paddingHorizontal: 26,
                borderRadius: 18, marginBottom: 100
            }}>
                {imageData ?
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: `data:image/png;base64,${imageData}` }}
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
                            var newData = [...imageDatas]
                            newData[index].image = imageData
                            setImageDatas(newData)
                            navigation.goBack()
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