// import { useState } from "react"
// import { ScrollView, View } from "react-native"
// import Header from "../component/Header"
// import InputDetail from '../component/InputDetail'
// import Button from "../component/Button"
// import MyDropDown from "../component/MyDropDown"
// const CarBasicInputScreen = ({ navigation }) => {
//     const [registerNumber, setRegisterNumber] = useState('KA03AE7835')
//     const [make, setMake] = useState('Tata')
//     const [model, setModel] = useState('Hexa 2016-2020 v')
//     const [version, seVersion] = useState('XE (2179CC 7 Seater Manual)')
//     const [color, setColor] = useState('Arizona Blue')
//     const [ownerNumber, setOwnerNumber] = useState('1st Owner')
//     const [registerDate, setRegisterDate] = useState('19-10-2017')
//     const [odometerReading, setOdometerReading] = useState('128451')
//     const [mfgYear, setMfgYear] = useState(['2000', '2001', '2002',
//         '2003', '2004', '2005',
//         '2006', '2007', '2008',
//         '2010', '2011', '2012', '2013', '2014', '2015', '2016',
//         '2017', '2018', '2019', '2020', '2021', '2022', '2023'])
//     const [mfgMonth, setMfgMonth] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', "Aug", 'Sep', "Oct", 'Nov', 'Dec'])



//     const InputDetailView = () => {
//         return (

//             <View style={{ backgroundColor: '#FFFFFF', paddingTop: 25, paddingHorizontal: 26, borderRadius: 18, marginBottom: 100 }}>
//                 <InputDetail
//                     textInputTitle={'Registration No'}
//                     textInputValueChange={(value) => { setRegisterNumber(value) }}
//                     textInputValue={registerNumber}
//                 />
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Make'}
//                     textInputValueChange={(value) => { setMake(value) }}
//                     textInputValue={make}
//                 />
//                 <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }} >
//                     <MyDropDown title={'Mfg Year'} data={mfgYear} setData={setMfgYear} />
//                     <MyDropDown title={'Mfg Month'} data={mfgMonth} setData={setMfgMonth} />
//                 </View>
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Model*'}
//                     textInputValueChange={(value) => { setModel(value) }}
//                     textInputValue={model}
//                 />
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Version*'}
//                     textInputValueChange={(value) => { seVersion(value) }}
//                     textInputValue={version}
//                 />
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Color*'}
//                     textInputValueChange={(value) => { setColor(value) }}
//                     textInputValue={color}
//                 />
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Number of Owner*'}
//                     textInputValueChange={(value) => { setOwnerNumber(value) }}
//                     textInputValue={ownerNumber}
//                 />
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Registration Date'}
//                     textInputValueChange={(value) => { setRegisterDate(value) }}
//                     textInputValue={registerDate}
//                 />
//                 <View style={{ marginTop: 12 }} />
//                 <InputDetail
//                     textInputTitle={'Odometer Reading'}
//                     textInputValueChange={(value) => { setOdometerReading(value) }}
//                     textInputValue={odometerReading}
//                 />
//                 <View style={{ marginTop: 24, marginBottom: 48 }} >

//                     <Button
//                         backgroundColor="#FCD236"
//                         textColor={'black'}
//                         title="Add Stock"
//                         borderRadius={12}
//                         onPress={() => navigation.navigate('InspectionScreen')}

//                     />
//                 </View>
//             </View>

//         )
//     }
//     return (
//         <View style={{ flex: 1, }}>
//             <Header
//                 title={"Basic Car Detail"}
//                 onBackPress={() => navigation.goBack()}
//             />

//             <View style={{ flex: 1, marginHorizontal: 18, marginTop: -40, }}>
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     {InputDetailView()}
//                 </ScrollView>
//             </View>

//         </View >
//     )
// }

// export default CarBasicInputScreen




import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import Header from "../component/Header"
import InputDetail from '../component/InputDetail'
import Button from "../component/Button"
 
import MakeDropDown from "../component/MakeDropDrown"
import ModelDropDown from "../component/ModelDropDown"
import VersionDropDown from "../component/VersionDropDown"
import MfgYearDropdown from "../component/MfgYearDropDown"
import MfgMonthDropdown from "../component/MfgMonthDropDown";
import NoOfOwnersDropdown from "../component/NoOfOwnersDropDown"
import ColorDropDown from "../component/ColorDropDown"
import axios from "axios"
import { selectToken } from "../redux/slices/MainSlice"
import { useDispatch, useSelector } from "react-redux"
import {setRegistrationNo,setMake,setModel,setMfgYear,setMfgMonth,setVersion,setColor,setNumberOfOwner,setRegistrationDate,setOdometerReading} from '../redux/slices/BasicCarDetailsSlice';

const CarBasicInputScreen = ({ navigation }) => {
    

   
    const token =useSelector(selectToken)
    const dispatch =useDispatch()
   
    const [currentVersion, setCurrentVersion] = useState()
    const [selectedColor, setSelectedColor] = useState()
    const [registerNumberI, setRegisterNumberI] = useState('KA03AE7835')
    const [make, setMake] = useState('Tata')
    const [model, setModel] = useState('Hexa 2016-2020 v')
    const [version, seVersion] = useState('XE (2179CC 7 Seater Manual)')
    const [color, setColor] = useState('Arizona Blue')
    const [ownerNumber, setOwnerNumber] = useState('1st Owner')
    const [registerDateI, setRegisterDateI] = useState('19-10-2017')
    const [odometerReadingI, setOdometerReadingI] = useState('128451')
    const [mfgYear, setMfgYear] = useState(['2000', '2001', '2002',
        '2003', '2004', '2005',
        '2006', '2007', '2008',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016',
        '2017', '2018', '2019', '2020', '2021', '2022', '2023'])
    const [mfgMonth, setMfgMonth] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', "Aug", 'Sep', "Oct", 'Nov', 'Dec'])
    const [noOwners,setNoOweners] =useState(['1st Owner','2nd Owner','3rd Owner','4th Owner','5th Owner','6th Owner','7th Owner'])
    const [makeData,setMakeData] = useState([])

    const [selectedMake, setSelectedMake] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedVersion, setSelectedVersion] = useState('')
    const [modelData, setModelData] = useState([])
    const [versionData, setVersionData] = useState([])
    const [selectedYear, setSelectedYear] = useState('')
    const [colorData, setColorData] = useState([])

     useEffect(()=>{
        axios.get('https://evaluationapi.riolabz.com/v1/make/fetch',{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{     
        const data = response.data.data.filter(data=>data.name !== undefined)
        setMakeData(data)
       
            setSelectedMake(data[0].id)
       
        console.log(data,"avddd")
       }).catch((error)=>{
           console.log(error)
       })
     },[])

     useEffect(()=>{
        console.log(selectedMake,"selectedMake")
        axios.get(`https://evaluationapi.riolabz.com/v1/model/fetch?makeIds=${selectedMake}`,{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{     
            const data = response.data.data
            setModelData(data)
            
                setSelectedModel(data[0].id)
            
            console.log(data,"avdddtf")
           }).catch((error)=>{
               console.log(error,"error model")
           })
     },[selectedMake])

     useEffect(()=>{
      
        if( versionData!==undefined&&versionData.length>0&&currentVersion!==undefined){
            const colors = versionData[currentVersion].colors
            setColorData(colors)
            console.log(colors,"colors")
        }
     },[currentVersion])

     useEffect(()=>{
       
        axios.get(`https://evaluationapi.riolabz.com/v1/version/fetch?modelIds=${selectedModel}`,{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{     
            const data = response.data.data
            setVersionData(data)
           
                setSelectedVersion(data[0].id)

            console.log(data,"version useEffect")
           }).catch((error)=>{
               console.log(error,"error version")
           })
     },[selectedModel])

    
    const InputDetailView = () => {
        return (

            <View style={{ backgroundColor: '#FFFFFF', paddingTop: 25, paddingHorizontal: 26, borderRadius: 18, marginBottom: 100 }}>
                <InputDetail
                    textInputTitle={'Registration No'}
                    textInputValueChange={(value) => {dispatch(setRegistrationNo(registerNumberI)); setRegisterNumberI(value) }}
                    textInputValue={registerNumberI}
                />
                <View style={{ marginTop: 12 }} />
                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }} >
                       <MakeDropDown title={'Make'} data={makeData} setData={setSelectedMake} /> 
                      
                </View>
                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }} >
                   
                 <ModelDropDown title={'Model*'} data={modelData} setData={setSelectedModel} />    
                </View>
                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <MfgYearDropdown title={'Mfg Year'} data={mfgYear} setData={setSelectedYear} />
                    <MfgMonthDropdown title={'Mfg Month'} data={mfgMonth} setData={setMfgMonth} />
                </View>
                 
                
                
                <View style={{ marginTop: 12 }} />
                <VersionDropDown title={'Version*'} data={versionData} setCurrentVersion={setCurrentVersion} setData={setSelectedVersion} />    
                <View style={{ marginTop: 12 }} />
            
             <ColorDropDown title={'Color*'} data={colorData} setData={setSelectedColor} />

                <View style={{ marginTop: 12 }} />
            
                <NoOfOwnersDropdown title={'Number of Owner*'} data={noOwners} setData={setNoOweners} />

                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Registration Date'}
                    textInputValueChange={(value) => {dispatch(setRegistrationDate(registerDateI)); setRegisterDateI(value) }}
                    textInputValue={registerDateI}
                />
                <View style={{ marginTop: 12 }} />
                <InputDetail
                    textInputTitle={'Odometer Reading'}
                    textInputValueChange={(value) => {dispatch(setOdometerReading(odometerReadingI)); setOdometerReadingI(value) }}
                    textInputValue={odometerReadingI}
                />
                <View style={{ marginTop: 24, marginBottom: 48 }} >

                    <Button
                        backgroundColor="#FCD236"
                        textColor={'black'}
                        title="Add Stock"
                        borderRadius={12}
                        onPress={() =>{
                          //  console.log(selector,"selected data")
                            navigation.navigate('VehicleImagesScreen')}}

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