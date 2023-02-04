import { useState } from "react"
import { ScrollView, View } from "react-native"
import Header from "../component/Header"
import InputDetail from '../component/InputDetail'
import Button from "../component/Button"
import MyDropDown from "../component/MyDropDown"
const CarBasicInputScreen = ({ navigation }) => {
    const [registerNumber, setRegisterNumber] = useState('KA03AE7835')
    const [make, setMake] = useState('Tata')
    const [model, setModel] = useState('Hexa 2016-2020 v')
    const [version, seVersion] = useState('XE (2179CC 7 Seater Manual)')
    const [color, setColor] = useState('Arizona Blue')
    const [ownerNumber, setOwnerNumber] = useState('1st Owner')
    const [registerDate, setRegisterDate] = useState('19-10-2017')
    const [odometerReading, setOdometerReading] = useState('128451')
    const [mfgYear, setMfgYear] = useState(['2000', '2001', '2002',
        '2003', '2004', '2005',
        '2006', '2007', '2008',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016',
        '2017', '2018', '2019', '2020', '2021', '2022', '2023'])
    const [mfgMonth, setMfgMonth] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', "Aug", 'Sep', "Oct", 'Nov', 'Dec'])



    const InputDetailView = () => {
        return (

            <View style={{ backgroundColor: '#FFFFFF', paddingTop: 25, paddingHorizontal: 26, borderRadius: 18, marginBottom: 100 }}>
                <InputDetail
                    textInputTitle={'Registration No'}
                    textInputValueChange={(value) => { setRegisterNumber(value) }}
                    textInputValue={registerNumber}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Make'}
                    textInputValueChange={(value) => { setMake(value) }}
                    textInputValue={make}
                />
                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <MyDropDown title={'Mfg Year'} data={mfgYear} setData={setMfgYear} />
                    <MyDropDown title={'Mfg Month'} data={mfgMonth} setData={setMfgMonth} />
                </View>
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Model*'}
                    textInputValueChange={(value) => { setModel(value) }}
                    textInputValue={model}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Version*'}
                    textInputValueChange={(value) => { seVersion(value) }}
                    textInputValue={version}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Color*'}
                    textInputValueChange={(value) => { setColor(value) }}
                    textInputValue={color}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Number of Owner*'}
                    textInputValueChange={(value) => { setOwnerNumber(value) }}
                    textInputValue={ownerNumber}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Registration Date'}
                    textInputValueChange={(value) => { setRegisterDate(value) }}
                    textInputValue={registerDate}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Odometer Reading'}
                    textInputValueChange={(value) => { setOdometerReading(value) }}
                    textInputValue={odometerReading}
                />
                <View style={{ marginTop: 24, marginBottom: 48 }} >

                    <Button
                        backgroundColor="#FCD236"
                        textColor={'black'}
                        title="Add Stock"
                        borderRadius={12}
                        onPress={() => navigation.navigate('InspectionScreen')}

                    />
                </View>
            </View>

        )
    }
    return (
        <View style={{ flex: 1, }}>
            <Header
                title={"Basic Car Detail"}
                onBackPress={() => navigation.goBack()}
            />

            <View style={{ flex: 1, marginHorizontal: 18, marginTop: -40, }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {InputDetailView()}
                </ScrollView>
            </View>

        </View >
    )
}

export default CarBasicInputScreen