// import * as React from 'react'
// import { FlatList, SafeAreaView, ScrollView, TouchableOpacity, View, } from 'react-native'
// import Header from '../../../component/Header'
// import CarDetail from '../../../component/CarDetail'
// import BasicCarDetail from '../../../component/BasicCarDetail'
// import DisplayTabs from '../../../component/DisplayTabs'
// import { selectMainId } from '../../../redux/slices/MainSlice'
// import { selectToken } from '../../../redux/slices/MainSlice'
// import axios from 'axios'

// import { useSelector } from 'react-redux'
// const ViewCarComponent = ({
//     navigation,
//     tabs

// }) => {
//     const mainId = useSelector(selectMainId);
//     const token =useSelector(selectToken)
//     const [inventoryData,setInventoryData]=React.useState([])
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//     React.useEffect(()=>{
//         axios.get(`https://evaluationapi.riolabz.com/v1/inventory/63e345c9313746f40f055a98`,{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{     
       
//         setInventoryData(response.data.data)
//         console.log(response.data.data,"data")
//         console.log(mainId,"mainid")
     
//        }).catch((error)=>{
//            console.log(error)
//        })
//      },[])  

    
//     const DetailCar = () => {
        
//         return (
//             <CarDetail
//                 carName={'Tata NEXON 2020 XE'}
//           //       time={new Date(inventoryData.inspectionVenue.time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
//                 // date={monthNames[new Date(inventoryData.inspectionVenue.date).getMonth()+1]+" "+new Date(inventoryData.inspectionVenue.date).getDate()+", "+days[new Date(inventoryData.inspectionVenue.date).getDay()] }
//                 // userName={inventoryData.lead.name}
//                 // location={inventoryData.inspectionVenue.location}
//             />
//         )
//     }
//     const CarBasic = () => {
//         return (
//             <BasicCarDetail
//                 // chassisNumber={inventoryData.details.chasisNumber}
//                 // engineNumber={inventoryData.details.engineNumber}
//             />
//         )
//     }
//     const Displaytabs = () => {
//         return (
//             <FlatList
//                 data={tabs}
//                 renderItem={({ item }) => {
//                     return (
//                         <View style={{ paddingBottom: 10 }}>
//                             <TouchableOpacity onPress={() => {
//                                 if (item.name == "Document Images" || item.name == "Vehicle’s Images") {
//                                     navigation.navigate("VehicleImagesScreen", {

//                                     })

//                                 }
//                                 else {
//                                     navigation.navigate("CheckScreen", {
//                                         headerName: item.name == 'Document'
//                                             ? "Docomentation" : item.name,
//                                     })
//                                 }
//                             }}>
//                                 <DisplayTabs
//                                     tabName={item.name}
//                                     progress={item.progress}
//                                     color={item.color}

//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     )
//                 }}
//             />

//         )
//     }
//     return (<View style={{ flex: 1, }}>
//         <Header
//             title={'Basic Car Detail'}
//             onBackPress={() => navigation.goBack()}

//         />

//         <View style={{ flex: 1, backgroundColor: '#fbfbfb', paddingHorizontal: 15, paddingTop: 24, borderTopRightRadius: 24, borderTopLeftRadius: 24, marginTop: -20 }}>
//             <ScrollView>
//                 {DetailCar()}
//                 <View style={{ marginTop: 15 }} />
//                 {CarBasic()}
//                 <View style={{ marginTop: 42 }} />
//                 {Displaytabs()}
//                 <View style={{ padding: 40 }} />
//             </ScrollView>
//         </View>
//     </View>)

// }

// export default ViewCarComponent



import * as React from 'react'
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity, View, } from 'react-native'
import Header from '../../../component/Header'
import CarDetail from '../../../component/CarDetail'
import BasicCarDetail from '../../../component/BasicCarDetail'
import DisplayTabs from '../../../component/DisplayTabs'
import { selectMainId } from '../../../redux/slices/MainSlice'
import { selectToken } from '../../../redux/slices/MainSlice'
import axios from 'axios'

import { useSelector } from 'react-redux'
const ViewCarComponent = ({
    navigation,
    tabs

}) => {
    const mainId = useSelector(selectMainId);
    const token =useSelector(selectToken)
    const [inventoryData,setInventoryData]=React.useState([])
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    React.useEffect(()=>{
        axios.get(`https://evaluationapi.riolabz.com/v1/inventory/${mainId}`,{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{     
       
        setInventoryData(response.data.data)
        console.log(response.data.data,"data")
        console.log(mainId,"mainid")
     
       }).catch((error)=>{
           console.log(error)
       })
     },[])  

    
    const DetailCar = () => {
        
        return (
          
            <>
            {
          inventoryData ? <CarDetail
             carName={inventoryData.model.name}
             time={new Date(inventoryData.inspectionVenue.time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
               date={monthNames[new Date(inventoryData.inspectionVenue.date).getMonth()+1]+" "+new Date(inventoryData.inspectionVenue.date).getDate()+", "+days[new Date(inventoryData.inspectionVenue.date).getDay()] }
               userName={inventoryData.lead.name}
               location={inventoryData.inspectionVenue.location}
          />:<></>           }
            </>
          
        )
    }
    const CarBasic = () => {
        return (
              <>
            {
    inventoryData?   <BasicCarDetail
          chassisNumber={inventoryData.details.chasisNumber}
          engineNumber={inventoryData.details.engineNumber}
     />:<></>
           }
            </>
           
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