import { useState } from "react"
import { ScrollView, View, Image, Dimensions, FlatList } from "react-native"
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
const VehicleImagesScreen = ({ navigation }) => {

   



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
                            text={item.name}
                            image={item.image}
                            index={index}
                            ImagePress={() => navigation.navigate("ImageUploadScreen", {
                                index: index,
                                imageDatas: imageData,
                                setImageDatas: setImageData

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