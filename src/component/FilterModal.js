import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, Switch, ScrollView, Platform } from 'react-native';
import CalenderIcon from '../assets/svg/CalenderIcon';
import FilterIcon from '../assets/svg/FilterIcon';
import Button from './Button';
import InputTextSuggestion from './InputTextSuggestion';
import SimpleText from './SimpleText';
import DownArrowIcon from '../assets/svg/DownArrowIcon'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const FilterModal = (props) => {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [isUserSuggestion, setIsUserSuggestion] = useState(false);
    const [isLocationSuggestion, setIsLocationSuggestion] = useState(false);

    const [isEnabled, setIsEnabled] = useState(true)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
    }
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        props.setDate(moment(new Date(date)).format('l'))
        hideDatePicker();
    };
    if (props.isFilterModal)
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isFilterModal}
                onRequestClose={() => {
                    props.setIsFilterModal(false)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', justifyContent: 'space-between' }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                                    <FilterIcon />
                                    <SimpleText
                                        text={"Filter"}
                                        Style={{ marginLeft: 10, color: '#9a9ea7', fontSize: 14, fontWeight: '700' }}
                                    />
                                </View>
                                <Button
                                    backgroundColor="#f5f6f7"
                                    textColor={'#9a9ea7'}
                                    title="Cancel"
                                    borderRadius={12}
                                    width={Dimensions.get('screen').width / 4}
                                    onPress={() => props.setIsFilterModal(false)}

                                />
                            </View>
                            <View
                                // style={[Platform.select({ ios: { zIndex: 10 } })]}
                                style={{ zIndex: 10 }}

                            >
                                <SimpleText
                                    text={"Vehicle Number"}
                                    Style={{ marginBottom: 7, color: '#8A8A8A', fontSize: 12, fontWeight: '400' }}
                                />
                                <InputTextSuggestion
                                    zIndex={10}
                                    placeHolder={'KA03AE7835'}
                                    value={props.value}
                                    onValueChange={(text) => {
                                        setShowSuggestion(true)
                                        props.setFilterVehicleNumber(text)
                                    }}
                                    showSuggestion={showSuggestion}
                                    suggestionData={props.suggestionData}
                                    onSuggestionPress={(item) => {
                                        setShowSuggestion(false)
                                        props.setFilterVehicleNumber(item)
                                    }}

                                />
                            </View>
                            <View style={[{ marginTop: 15, zIndex: 9 }, Platform.select({ ios: { zIndex: 8 } })]}>
                                <SimpleText
                                    text={"Date"}
                                    Style={{ marginBottom: 7, color: '#8A8A8A', fontSize: 12, fontWeight: '400' }}
                                />
                                <InputTextSuggestion
                                    zIndex={9}
                                    placeHolder={props.date}
                                    value={props.date}
                                    // onValueChange={(text) => { props.setFilterVehicleNumber(text) }}
                                    Icon={<CalenderIcon />}

                                    IconPress={() => showDatePicker()}
                                    editable={false}
                                />

                            </View>
                            <View style={[{ marginTop: 15, zIndex: 8 }, Platform.select({ ios: { zIndex: 7 } })]}>
                                <SimpleText
                                    text={"User Name"}
                                    Style={{ marginBottom: 7, color: '#8A8A8A', fontSize: 12, fontWeight: '400' }}
                                />
                                <InputTextSuggestion
                                    zIndex={8}
                                    Icon={<DownArrowIcon />}
                                    placeHolder={'Deepak'}
                                    value={props.userName}
                                    onValueChange={(text) => {
                                        setIsUserSuggestion(false)
                                        props.setUserName(text)
                                    }}
                                    showSuggestion={isUserSuggestion}
                                    suggestionData={props.suggestionUserName}
                                    onSuggestionPress={(item) => {
                                        setIsUserSuggestion(false)
                                        props.setUserName(item)
                                    }}
                                    IconPress={() => setIsUserSuggestion(true)}
                                />

                            </View>
                            <View style={[{ marginTop: 15, zIndex: 7 }, Platform.select({ ios: { zIndex: 6 } })]}>

                                <SimpleText
                                    text={"Location"}
                                    Style={{ marginBottom: 7, color: '#8A8A8A', fontSize: 12, fontWeight: '400' }}
                                />
                                <InputTextSuggestion
                                    zIndex={7}
                                    Icon={<DownArrowIcon />}
                                    placeHolder={'B1 Yard'}
                                    value={props.location}
                                    onValueChange={(text) => {
                                        setIsLocationSuggestion(false)
                                        props.setLocation(text)
                                    }}
                                    showSuggestion={isLocationSuggestion}
                                    suggestionData={props.suggestionlocation}
                                    onSuggestionPress={(item) => {
                                        setIsLocationSuggestion(false)
                                        props.setLocation(item)
                                    }}
                                    IconPress={() => setIsLocationSuggestion(true)}
                                />

                            </View>
                            <View style={{ marginTop: 40, }}>
                                <SimpleText
                                    text={"Additional Filter"}
                                    Style={{ marginBottom: 7, color: '#8A8A8A', fontSize: 12, fontWeight: '400' }}

                                />
                                <View style={{ flexDirection: 'row' }}>
                                    <Switch
                                        trackColor={{
                                            false: "#FFC527", true: "gray"
                                        }}
                                        thumbColor={true ? "#FFFFFF" : "#FFFFFF"}
                                        ios_backgroundColor="#FFC527"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />

                                </View>
                            </View>
                            <View style={{ marginTop: 20, }} >
                                <Button
                                    backgroundColor="#f2ad00"
                                    textColor={'black'}
                                    title="Apply Filter"
                                    borderRadius={12}
                                    width={Dimensions.get('screen').width / 1.3}
                                    onPress={() => props.setIsFilterModal(false)}

                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal >

        );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        //  justifyContent: ,

        alignItems: 'center',
        marginTop: 90,
    },
    modalView: {
        margin: 20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 21,
        //  alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default FilterModal;