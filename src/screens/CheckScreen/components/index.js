// import axios from 'axios'
// import * as React from 'react'
// import { useEffect, useState } from 'react'
// import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput, View, } from 'react-native'
// import Header from '../../../component/Header'
// import SelectButton from '../../../component/SelectButton'
// import SimpleText from '../../../component/SimpleText'
// import { useSelector,useDispatch } from 'react-redux'
// import { selectToken } from '../../../redux/slices/MainSlice'
// import { addAnswer } from '../../../redux/slices/DataSlice'
// import { selectImages } from '../../../redux/slices/ImagesSlice'
// import { selectVideoUrl } from '../../../redux/slices/ImagesSlice'

// import { selectAnswers } from '../../../redux/slices/DataSlice'
// import { selectMainId } from '../../../redux/slices/MainSlice'
// import { selectBasicCarDetails } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectRegistrationNo } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectRegistrationDate } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectMfgYear } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectMfgMonth } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectNumberOfOwners } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectVersion } from '../../../redux/slices/BasicCarDetailsSlice'
// import { selectColor } from '../../../redux/slices/BasicCarDetailsSlice'
// const CheckComponent = ({
//     route,
//     navigation,
//     data,
//     setData, 
//     setCurrentPage,
//         currentPage,
//         setSteps,
//         steps,
//     isKeyboardVisible
// }) => {

//    const dispatch = useDispatch()
//    const choicesData = useSelector((state)=>state.basicCarDetail.QcData)     

//     const token = useSelector(selectToken);
//     const images = useSelector(selectImages);
//     const videoUrl = useSelector(selectVideoUrl);
   
//     const answers = useSelector(selectAnswers);
//     const mainId = useSelector(selectMainId);
//     const basicCarDetails = useSelector(selectBasicCarDetails);

//     const registrationNo = useSelector(selectRegistrationNo);
//     const registrationDate = useSelector(selectRegistrationDate);
//     const mfgYear = useSelector(selectMfgYear);
//     const mfgMonth = useSelector(selectMfgMonth);
//     const numberOfOwners = useSelector(selectNumberOfOwners);
//     const version = useSelector(selectVersion);
//     const color = useSelector(selectColor);

//     const [reqBody, setReqBody] = useState({
//     })

//     useEffect(() => {
//         if(answers!=undefined&&images!=undefined&&videoUrl!=undefined&&mainId!=undefined&&basicCarDetails!=undefined){
//         console.log("answers",answers)
        
//         console.log("images",images)
//         console.log("videoUrl",videoUrl)
//         console.log("mainId",mainId)
//         const body={vehicleDetail:{
//             registrationNumber:basicCarDetails.registrationNumber,
//             registrationDate:basicCarDetails.registrationDate,
//             mfgYear:basicCarDetails.mfgYear,
//             mfgMonth:basicCarDetails.mfgMonth,
//             numberOfOwners:basicCarDetails.numberOfOwners,
//             chasisNumber:basicCarDetails.chassisNumber,
//             engineNumber:basicCarDetails.engineNumber,
//         },
//         versionId:basicCarDetails.version,
//         colorId:basicCarDetails.color,
//         images:images,
//         details:[...answers],
//         inspectionVideo:videoUrl,

//         }

//         setReqBody(body)
//     }
//     }, [answers,images,videoUrl,mainId,basicCarDetails])


//     const sumbitEntry = () => {
//         console.log("submit")
//         console.log("answers",answers)
        
//         console.log("images",images)
//         console.log("videoUrl",videoUrl)
//         console.log("mainId",mainId)
//         console.log("color",color)
        
        
//             console.log("basiccard",basicCarDetails)
            
//             console.log("images",images)
//             console.log("videoUrl",videoUrl)
//             console.log("mainId",mainId)
//             const body={vehicleDetail:{
//                 registrationNumber:basicCarDetails.registrationNumber,
//                 registrationDate:basicCarDetails.registrationDate,
//                 mfgYear:basicCarDetails.mfgYear,
//                 mfgMonth:basicCarDetails.mfgMonth,
//                 numberOfOwners:basicCarDetails.numberOfOwners,
//                 chasisNumber:basicCarDetails.chassisNumber,
//                 engineNumber:basicCarDetails.engineNumber,
//         },
//             versionId:basicCarDetails.version,
//             colorId:basicCarDetails.color,
//             images:images,
//             details:[...answers],
//             inspectionVideo:videoUrl,
    
//             }
    
//             setReqBody(body)
        
//         console.log("reqBody",body)

//         axios.put(`https://evaluationapi.riolabz.com/v1/inventory/${mainId}/inspection/agent`,body, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         }).then((res) => {
//             console.log(res.data)
//             alert(`Entry Submitted Successfully ${res.data.data._id}`)
//         }
//         ).catch((err) => {
//             console.log(err.response.data)
//             alert(err.response.data)
//         }
//         );
            
//     }


//     return (
//         <View style={{ flex: 1 }}>
//             <Header
//                  title={steps.length>0?steps[currentPage].title:""}
//              //   title={12}

//                 padding={Platform.OS == 'ios' ? 60 : 40}
//                 onBackPress={() => navigation.goBack()}
//             />

//             <View style={{ paddingBottom: 20, borderRadius: 10, flex: 1, paddingTop: 19, paddingLeft: 26, paddingRight: 22, marginTop: 20, marginBottom: 23, marginHorizontal: 18, backgroundColor: 'white' }}>
//                 <FlatList
//                     showsVerticalScrollIndicator={false}
//                     data={data}
//                     renderItem={({ item, index }) => {
//                         return (
//                             <>
//                                 <SimpleText
//                                     text={item.title}
//                                     Style={{ marginTop: 10, fontSize: 16, fontWeight: '700', color: '#374151' }}
//                                 />

//                                 <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//                                     {item.title !== "Comments" ? item.buttonValues.map((Buttonitem,) => {
//                                         return (
//                                             <View style={{ marginTop: 10, marginRight: 10, }}>
//                                                 <SelectButton
//                                                     text={Buttonitem}
//                                                     onPress={() => {
//                                                         var Value = [...data]

//                                                         Value[index].selected = Buttonitem
//                                                         setData(Value)
//                                                         const answer={
//                                                             questionId:item.id,
//                                                             answer:Buttonitem,
                                                            
                                                            
//                                                         }
//                                                         dispatch(addAnswer(answer))



//                                                     }}
//                                                     selected={item.selected == Buttonitem ? true : false}
//                                                 />
//                                             </View>
//                                         )
//                                     }) : <TextInput
//                                         placeholder='Write your comments here'
//                                         style={{
//                                             padding: 15,
//                                             textAlignVertical: 'top', marginTop: 20, textAlign: "left", height: 100, width: "100%", borderRadius: 4, borderWidth: 2, borderColor: '#DFDFE2'
//                                         }}
//                                     />}
//                                 </View>
//                             </>

//                         )
//                     }}
//                 />


//             </View>
//             <View style={{ flex: isKeyboardVisible ? 0.4 : 0.2, paddingHorizontal: 38, paddingVertical: 3 }}>
//                 <Button
//                     backgroundColor="#FCD236"
//                     textColor={'black'}
//                     title="Save"
//                     borderRadius={12}
//                  onPress={() =>{
//                     // console.log(currentPage+1,steps[currentPage+1].title)
//                     if(currentPage+1==steps.length){
//                         sumbitEntry();
//                     }else{
//                     setCurrentPage(currentPage+1)}}
//                  }
//                 />
//             </View>

//         </View>
//     )

// }

// export default CheckComponent


import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput, View, } from 'react-native'
import Header from '../../../component/Header'
import SelectButton from '../../../component/SelectButton'
import SimpleText from '../../../component/SimpleText'
import { useSelector,useDispatch } from 'react-redux'
import { selectToken } from '../../../redux/slices/MainSlice'
import { addAnswer } from '../../../redux/slices/DataSlice'
import { selectImages } from '../../../redux/slices/ImagesSlice'
import { selectVideoUrl } from '../../../redux/slices/ImagesSlice'

import { selectAnswers } from '../../../redux/slices/DataSlice'
import { selectMainId } from '../../../redux/slices/MainSlice'
import { selectBasicCarDetails } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectRegistrationNo } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectRegistrationDate } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectMfgYear } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectMfgMonth } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectNumberOfOwners } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectVersion } from '../../../redux/slices/BasicCarDetailsSlice'
import { selectColor } from '../../../redux/slices/BasicCarDetailsSlice'
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

   const dispatch = useDispatch()

    const token = useSelector(selectToken);
    const images = useSelector(selectImages);
    const videoUrl = useSelector(selectVideoUrl);
   
    const answers = useSelector(selectAnswers);
    const mainId = useSelector(selectMainId);
    const basicCarDetails = useSelector(selectBasicCarDetails);

    const registrationNo = useSelector(selectRegistrationNo);
    const registrationDate = useSelector(selectRegistrationDate);
    const mfgYear = useSelector(selectMfgYear);
    const mfgMonth = useSelector(selectMfgMonth);
    const numberOfOwners = useSelector(selectNumberOfOwners);
    const version = useSelector(selectVersion);
    const color = useSelector(selectColor);

    const [reqBody, setReqBody] = useState({
    })
    const choicesData = useSelector((state)=>state.basicCarDetail.QcData)     

    useEffect(()=>{
        if(choicesData !== null && choicesData !== undefined){
            console.log(choicesData.data.inspectionDetails,"cheking dchoises data")
            const datachoice=[];
            choicesData.data.inspectionDetails.map((item)=>{
                datachoice.push({
                    id:item._id,
                    title:item.name,
                    buttonValues:item.choices.map((item)=>item.value),
                    selected:""
                })
            })
            setData(datachoice)
        }},[])

    useEffect(() => {
        if(answers!=undefined&&images!=undefined&&videoUrl!=undefined&&mainId!=undefined&&basicCarDetails!=undefined){
        console.log("answers",answers)
        
        console.log("images",images)
        console.log("videoUrl",videoUrl)
        console.log("mainId",mainId)
        const body={vehicleDetail:{
            registrationNumber:basicCarDetails.registrationNumber,
            registrationDate:basicCarDetails.registrationDate,
            mfgYear:basicCarDetails.mfgYear,
            mfgMonth:basicCarDetails.mfgMonth,
            numberOfOwners:basicCarDetails.numberOfOwners,
            chasisNumber:basicCarDetails.chassisNumber,
            engineNumber:basicCarDetails.engineNumber,
        },
        versionId:basicCarDetails.version,
        colorId:basicCarDetails.color,
        images:images,
        details:[...answers],
        inspectionVideo:videoUrl,

        }

        setReqBody(body)
    }
    }, [answers,images,videoUrl,mainId,basicCarDetails])


    const sumbitEntry = () => {
        console.log("submit")
        console.log("answers",answers)
        
        console.log("images",images)
        console.log("videoUrl",videoUrl)
        console.log("mainId",mainId)
        console.log("color",color)
        
        
            console.log("basiccard",basicCarDetails)
            
            console.log("images",images)
            console.log("videoUrl",videoUrl)
            console.log("mainId",mainId)
            const body={vehicleDetail:{
                registrationNumber:basicCarDetails.registrationNumber,
                registrationDate:basicCarDetails.registrationDate,
                mfgYear:basicCarDetails.mfgYear,
                mfgMonth:basicCarDetails.mfgMonth,
                numberOfOwners:basicCarDetails.numberOfOwners,
                chasisNumber:basicCarDetails.chassisNumber,
                engineNumber:basicCarDetails.engineNumber,
        },
            versionId:basicCarDetails.version,
            colorId:basicCarDetails.color,
            images:images,
            details:[...answers],
            inspectionVideo:videoUrl,
    
            }
    
            setReqBody(body)
        
        console.log("reqBody",body)

        axios.put(`https://evaluationapi.riolabz.com/v1/inventory/${mainId}/inspection/agent`,body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data)
            alert(`Entry Submitted Successfully ${res.data.data._id}`)
        }
        ).catch((err) => {
            console.log(err.response.data)
            alert(err.response.data)
        }
        );
            
    }


    return (
        <View style={{ flex: 1 }}>
            <Header
                 title={steps.length>0?steps[currentPage].title:""}
             //   title={12}

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
                                                        const answer={
                                                            questionId:item.id,
                                                            answer:Buttonitem,
                                                            
                                                            
                                                        }
                                                        dispatch(addAnswer(answer))



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
                 onPress={() =>{
                    // console.log(currentPage+1,steps[currentPage+1].title)
                    if(currentPage+1==steps.length){
                        sumbitEntry();
                    }else{
                    setCurrentPage(currentPage+1)}}
                 }
                />
            </View>

        </View>
    )

}

export default CheckComponent