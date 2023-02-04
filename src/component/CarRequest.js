import { Image, TouchableOpacity, View } from "react-native"
import PinIcon from "../assets/svg/PinIcon"
import SimpleText from "./SimpleText"

const CarRequest = (props) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row', backgroundColor: '#fbfbfb', flex: 1,
        }} onPress={props.onPressDetail}>
            <View style={{ borderRadius: 8, width: "30%", backgroundColor: '#fcd236' }}>
                <View style={{ paddingTop: 37, paddingHorizontal: 30, alignItems: 'center', }}>
                    <SimpleText
                        text={props.day}
                        Style={{
                            fontSize: 14, fontWeight: '500', color: "#393939"
                        }}
                    />
                    <SimpleText
                        text={props.date}
                        Style={{
                            paddingTop: 10,
                            fontSize: 17, fontWeight: '700', color: "#393939"
                        }}
                    />
                    <SimpleText
                        text={props.Month}
                        Style={{
                            paddingTop: 10,
                            fontSize: 14, fontWeight: '500', color: "#393939"
                        }}
                    />
                </View>
                <View style={{ marginTop: 22, alignItems: 'center', borderRadius: 8, paddingVertical: 17, paddingHorizontal: 14, backgroundColor: '#08a542' }}>
                    <SimpleText
                        text={props.time}
                        Style={{
                            fontSize: 14, fontWeight: '700', color: "#FFFFFF"
                        }}
                    />
                </View>
            </View>
            <View style={{ paddingTop: 18, paddingLeft: 26, paddingRight: 17 }}>
                <SimpleText
                    text={props.userName}
                    Style={{ fontSize: 14, fontWeight: '600', color: '#6D7787' }}
                />
                <SimpleText
                    text={props.model}
                    Style={{ paddingTop: 15, fontSize: 16, fontWeight: '700', color: '#374151' }}
                />
                <SimpleText
                    text={props.carName}
                    Style={{ paddingTop: 5, fontSize: 12, fontWeight: '500', color: '#374151' }}
                />
                <View style={{ marginTop: 15, flexDirection: 'row', alignItems: "center", }}>
                    <PinIcon />
                    <SimpleText
                        text={props.location}
                        Style={{ marginLeft: 8, paddingTop: 5, fontSize: 12, fontWeight: '500', color: '#6D7787' }}
                    />
                </View>
                <View style={{ flexWrap: 'wrap', marginTop: 23, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <TouchableOpacity

                    >
                        <View style={{
                            marginRight: 8,
                            borderRadius: 4,
                            borderColor: '#e0e0e0',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 64,
                            height: 27
                        }}>
                            <SimpleText
                                text={'Call'}
                                Style={{ fontSize: 10, fontWeight: '500', color: '#374151' }}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={props.onCheckInPress}

                    >
                        <View style={{
                            marginRight: 8,
                            borderRadius: 4,
                            borderColor: '#e0e0e0',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 64,
                            height: 27
                        }}>
                            <SimpleText
                                text={'Check In'}
                                Style={{ fontSize: 10, fontWeight: '500', color: '#374151' }}

                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.onPressUpdate}>
                        <View style={{
                            marginRight: 8,
                            borderRadius: 4,
                            borderColor: '#e0e0e0',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 64,
                            height: 27
                        }}>
                            <SimpleText
                                text={'Update'}
                                Style={{ fontSize: 10, fontWeight: '500', color: '#374151' }}

                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableOpacity>
    )

}
export default CarRequest