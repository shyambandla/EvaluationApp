import * as React from 'react'
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity, View, } from 'react-native'
import Header from '../../../component/Header'
import CarDetail from '../../../component/CarDetail'
import BasicCarDetail from '../../../component/BasicCarDetail'
import DisplayTabs from '../../../component/DisplayTabs'
const ViewCarComponent = ({
    navigation,
    tabs

}) => {

    const DetailCar = () => {
        return (
            <CarDetail
                carName={'Tata NEXON 2020 XE'}
                time={"12:00 PM"}
                date={'Mon, 28 Nov'}
                userName={"Gowrish"}
                location={'JP Parking Yard, B1'}
            />
        )
    }
    const CarBasic = () => {
        return (
            <BasicCarDetail
                chassisNumber={"XDCFVGBHNJM"}
                engineNumber={"XDCFVGBHNJM"}
            />
        )
    }
    const Displaytabs = () => {
        return (
            <FlatList
                data={tabs}
                renderItem={({ item }) => {
                    return (
                        <View style={{ paddingBottom: 10 }}>
                            <TouchableOpacity onPress={() => {
                                if (item.name == "Document Images" || item.name == "Vehicle’s Images") {
                                    navigation.navigate("VehicleImagesScreen", {

                                    })

                                }
                                else {
                                    navigation.navigate("CheckScreen", {
                                        headerName: item.name == 'Document'
                                            ? "Docomentation" : item.name,
                                    })
                                }
                            }}>
                                <DisplayTabs
                                    tabName={item.name}
                                    progress={item.progress}
                                    color={item.color}

                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />

        )
    }
    return (<View style={{ flex: 1, }}>
        <Header
            title={'Basic Car Detail'}
            onBackPress={() => navigation.goBack()}

        />

        <View style={{ flex: 1, backgroundColor: '#fbfbfb', paddingHorizontal: 15, paddingTop: 24, borderTopRightRadius: 24, borderTopLeftRadius: 24, marginTop: -20 }}>
            <ScrollView>
                {DetailCar()}
                <View style={{ marginTop: 15 }} />
                {CarBasic()}
                <View style={{ marginTop: 42 }} />
                {Displaytabs()}
                <View style={{ padding: 40 }} />
            </ScrollView>
        </View>
    </View>)

}

export default ViewCarComponent