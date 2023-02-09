// import moment from "moment"
// import { useState } from "react"
// import { View, Image, Dimensions, FlatList, Modal } from "react-native"
// import Button from "../component/Button"
// import CarDescription from "../component/CarDescription"
// import FilterModal from "../component/FilterModal"
// import Header from "../component/Header"
// import Tabs from "../component/Tabs"
// import { LoginPicture } from "../constants/Images"

// const InspectionCompleteScreen = ({ navigation }) => {
//     const [carDetails, setCarDetails] = useState([{
//         image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
//         name: 'Tata Hexa 2016-2020 XE',
//         model: 'KA03AE7835',
//         time: '9:00 AM MON, NOV 28',
//         status: 'Completed'
//     }, {
//         image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
//         name: 'Tata Hexa 2016-2020 XE',
//         model: 'KA03AE7835',
//         time: '9:00 AM MON, NOV 28',
//         status: 'Completed'
//     }

//     ])
//     const [isFilterModal, setIsFilterModal] = useState(false)
//     const [filterVehicleNumber, setFilterVehicleNumber] = useState('')
//     const [suggestionVehicleNumberData, setSuggestionVehicleNumberData] = useState(["KA03AE7835", "KA03AE7835", "KA03AE7835", "KA03AE7835"])
//     const [date, setDate] = useState(moment(new Date()).format('l'))
//     const [suggestionUserName, setSuggestionUserName] = useState(["Test", "Test",])
//     const [userName, setUserName] = useState("Deepak")

//     const [suggestionlocation, setSuggestionLocation] = useState(["B1 Yard", "B1 Yard",])
//     const [location, setLocation] = useState("B1 Yard")


//     return (
//         <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
//             <Header
//                 title={'Inspection Completed'}
//                 onBackPress={() => { navigation.goBack() }}
//                 FilterIcon
//                 onFilterPress={() => { setIsFilterModal(true) }}
//             />
//             <FilterModal
//                 setIsFilterModal={setIsFilterModal}
//                 isFilterModal={isFilterModal}
//                 value={filterVehicleNumber}
//                 setFilterVehicleNumber={setFilterVehicleNumber}
//                 suggestionData={suggestionVehicleNumberData}
//                 date={date}
//                 setDate={setDate}
//                 suggestionUserName={suggestionUserName}
//                 setSuggestionUserName={setSuggestionUserName}
//                 userName={userName}
//                 setUserName={setUserName}

//                 suggestionlocation={suggestionlocation}
//                 setSuggestionLocation={setSuggestionLocation}
//                 location={location}
//                 setLocation={setLocation}
//             />
//             <View style={{ flex: 1, paddingHorizontal: 12, marginTop: -40, paddingBottom: 20, }}>
//                 <FlatList
//                     data={carDetails}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item }) => {
//                         return (<>
//                             <CarDescription
//                                 onPressDetail={() => navigation.navigate("ViewCarDetailScreen")}
//                                 image={item.image}
//                                 name={item.name}
//                                 model={item.model}
//                                 time={item.time}
//                                 status={item.status}
//                             />
//                             <View style={{ marginBottom: 12 }} />
//                         </>
//                         )
//                     }}
//                 />
//             </View>
//             <View style={{ position: 'absolute', bottom: 20, width: '100%', paddingHorizontal: 12, }}>
//                 <Button

//                     backgroundColor="#F5B00F"
//                     textColor={'black'}
//                     title="New Inspection"
//                     borderRadius={12}
//                     onPress={() => navigation.navigate('CarBasicInputScreen')}

//                 />
//             </View>
//         </View>
//     )
// }
// export default InspectionCompleteScreen



import moment from "moment"
import { useState,useEffect } from "react"
import { View, Image, Dimensions, FlatList, Modal } from "react-native"
import Button from "../component/Button"
import CarDescription from "../component/CarDescription"
import FilterModal from "../component/FilterModal"
import Header from "../component/Header"
import Tabs from "../component/Tabs"
import { LoginPicture } from "../constants/Images"
import { selectToken } from "../redux/slices/MainSlice"
import { useDispatch, useSelector } from "react-redux"
import { setMainId } from "../redux/slices/MainSlice"

import axios from "axios"

const InspectionCompleteScreen = ({ navigation }) => {
    const token =useSelector(selectToken)
    const dispatch = useDispatch()

    const [carDetails, setCarDetails] = useState([{
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Tata Hexa 2016-2020 XE',
        model: 'KA03AE7835',
        time: '9:00 AM MON, NOV 28',
        status: 'Completed'
    }, {
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Tata Hexa 2016-2020 XE',
        model: 'KA03AE7835',
        time: '9:00 AM MON, NOV 28',
        status: 'Completed'
    }

    ])
    const [isFilterModal, setIsFilterModal] = useState(false)
    const [filterVehicleNumber, setFilterVehicleNumber] = useState('')
    const [suggestionVehicleNumberData, setSuggestionVehicleNumberData] = useState(["KA03AE7835", "KA03AE7835", "KA03AE7835", "KA03AE7835"])
    const [date, setDate] = useState(moment(new Date()).format('l'))
    const [suggestionUserName, setSuggestionUserName] = useState(["Test", "Test",])
    const [userName, setUserName] = useState("Deepak")

    const [suggestionlocation, setSuggestionLocation] = useState(["B1 Yard", "B1 Yard",])
    const [location, setLocation] = useState("B1 Yard")

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    useEffect(()=>{
        axios.get('https://evaluationapi.riolabz.com/v1/inventory/fetch?status=Verified',{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{
        console.log(response.data.data)
         setCarDetails(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
            <Header
                title={'Inspection Completed'}
                onBackPress={() => { navigation.goBack() }}
                FilterIcon
                onFilterPress={() => { setIsFilterModal(true) }}
            />
            <FilterModal
                setIsFilterModal={setIsFilterModal}
                isFilterModal={isFilterModal}
                value={filterVehicleNumber}
                setFilterVehicleNumber={setFilterVehicleNumber}
                suggestionData={suggestionVehicleNumberData}
                date={date}
                setDate={setDate}
                suggestionUserName={suggestionUserName}
                setSuggestionUserName={setSuggestionUserName}
                userName={userName}
                setUserName={setUserName}

                suggestionlocation={suggestionlocation}
                setSuggestionLocation={setSuggestionLocation}
                location={location}
                setLocation={setLocation}
                setFilterCarDetails={setCarDetails}
            />
            <View style={{ flex: 1, paddingHorizontal: 12, marginTop: -40, paddingBottom: 20, }}>
                <FlatList
                    data={carDetails}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        if(item.assignedTo ==undefined){ 
                            return (<></>)
                         }else{
                            return (<>
                                <CarDescription
                                     onPressDetail={() =>{dispatch(setMainId(item._id)) ;navigation.navigate("ViewCarDetailScreen")}}
                                   
                                     image={item.vehicleImages.profile.image}
                               
                                     name={"item.assignedTo.name"}
                                   
                                     model={"item.model.name"}
                            
                                    time={new Date(item.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })+' '+days[new Date(item.createdAt).getDay()] +", "+monthNames[new Date(item.createdAt).getMonth()+1]+" "+new Date(item.createdAt).getDate()}
                                   
                                    status={item.status}
                                />
                                <View style={{ marginBottom: 12 }} />
                            </>
                            )
                         }
                      
                    }}
                />
            </View>
            <View style={{ position: 'absolute', bottom: 20, width: '100%', paddingHorizontal: 12, }}>
                <Button

                    backgroundColor="#F5B00F"
                    textColor={'black'}
                    title="New Inspection"
                    borderRadius={12}
                   onPress={() => navigation.navigate('CarBasicInputScreen')}

                />
            </View>
        </View>
    )
}
export default InspectionCompleteScreen