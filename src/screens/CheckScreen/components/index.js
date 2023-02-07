import * as React from 'react'
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput, View, } from 'react-native'
import Header from '../../../component/Header'
import SelectButton from '../../../component/SelectButton'
import SimpleText from '../../../component/SimpleText'
const CheckComponent = ({
    route,
    navigation,
    data,
    setData, 
    setCurrentPage,
        currentPage,
        setSteps,
        steps,
    isKeyboardVisible
}) => {


    


    return (
        <View style={{ flex: 1 }}>
            <Header
                title={route.params.headerName}
                padding={Platform.OS == 'ios' ? 60 : 40}
                onBackPress={() => navigation.goBack()}
            />

            <View style={{ paddingBottom: 20, borderRadius: 10, flex: 1, paddingTop: 19, paddingLeft: 26, paddingRight: 22, marginTop: 20, marginBottom: 23, marginHorizontal: 18, backgroundColor: 'white' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <SimpleText
                                    text={item.title}
                                    Style={{ marginTop: 10, fontSize: 16, fontWeight: '700', color: '#374151' }}
                                />

                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    {item.title !== "Comments" ? item.buttonValues.map((Buttonitem,) => {
                                        return (
                                            <View style={{ marginTop: 10, marginRight: 10, }}>
                                                <SelectButton
                                                    text={Buttonitem}
                                                    onPress={() => {
                                                        var Value = [...data]

                                                        Value[index].selected = Buttonitem
                                                        setData(Value)

                                                    }}
                                                    selected={item.selected == Buttonitem ? true : false}
                                                />
                                            </View>
                                        )
                                    }) : <TextInput
                                        placeholder='Write your comments here'
                                        style={{
                                            padding: 15,
                                            textAlignVertical: 'top', marginTop: 20, textAlign: "left", height: 100, width: "100%", borderRadius: 4, borderWidth: 2, borderColor: '#DFDFE2'
                                        }}
                                    />}
                                </View>
                            </>

                        )
                    }}
                />


            </View>
            <View style={{ flex: isKeyboardVisible ? 0.4 : 0.2, paddingHorizontal: 38, paddingVertical: 3 }}>
                <Button
                    backgroundColor="#FCD236"
                    textColor={'black'}
                    title="Save"
                    borderRadius={12}
                 onPress={() =>{setCurrentPage(currentPage + 1); }}
                />
            </View>

        </View>
    )

}

export default CheckComponent