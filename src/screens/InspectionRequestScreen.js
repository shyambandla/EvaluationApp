// import moment from "moment"
// import { useState } from "react"
// import { View, Image, Dimensions, FlatList } from "react-native"
// import Button from "../component/Button"
// import CarRequest from "../component/CarRequest"
// import FilterModal from "../component/FilterModal"
// import Header from "../component/Header"

// const InspectionCompleteScreen = ({ navigation }) => {
//     const [carDetails, setCarDetails] = useState([{
//         day: 'MON',
//         date: '30',
//         Month: 'Nov',
//         time: '12:00 PM',
//         userName: 'GOWRISH',
//         model: 'KA03AE7835',
//         carName: 'Tata NEXON 2020 XE',
//         location: 'JP Parking Yard, B1',


//     }, {
//         day: 'MON',
//         date: '30',
//         Month: 'Nov',
//         time: '12:00 PM',
//         userName: 'GOWRISH',
//         model: 'KA03AE7835',
//         carName: 'Tata NEXON 2020 XE',
//         location: 'JP Parking Yard, B1',
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
//                 title={'Inspection Request ( 2 )'}
//                 onBackPress={() => { navigation.goBack() }}
//                 FilterIcon
//                 onFilterPress={() => setIsFilterModal(true)}

//             />
//             <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10, borderTopRightRadius: 18, borderTopLeftRadius: 18, marginTop: -40, paddingBottom: 20, }}>
//                 <FilterModal
//                     setIsFilterModal={setIsFilterModal}
//                     isFilterModal={isFilterModal}
//                     value={filterVehicleNumber}
//                     setFilterVehicleNumber={setFilterVehicleNumber}
//                     suggestionData={suggestionVehicleNumberData}
//                     date={date}
//                     setDate={setDate}
//                     suggestionUserName={suggestionUserName}
//                     setSuggestionUserName={setSuggestionUserName}
//                     userName={userName}
//                     setUserName={setUserName}

//                     suggestionlocation={suggestionlocation}
//                     setSuggestionLocation={setSuggestionLocation}
//                     location={location}
//                     setLocation={setLocation}
//                 />

//                 <View style={{ paddingHorizontal: 12, }}>


//                     <FlatList
//                         data={carDetails}
//                         showsVerticalScrollIndicator={false}
//                         renderItem={({ item }) => {
//                             return (<>
//                                 <CarRequest
//                                     // onPressDetail={() => { navigation.navigate('ViewCarDetailScreen') }}
//                                     day={item.day}
//                                     date={item.date}
//                                     Month={item.Month}
//                                     time={item.time}
//                                     userName={item.userName}
//                                     model={item.model}
//                                     carName={item.carName}
//                                     location={item.location}
//                                     onCheckInPress={() => navigation.navigate("InspectBasicCarDetail")}
//                                     onPressUpdate={() => navigation.navigate("CarBasicInputScreen")}
//                                 />
//                                 <View style={{ marginBottom: 12 }} />
//                             </>
//                             )
//                         }}
//                     />
//                 </View>
//             </View>

//         </View>
//     )
// }
// export default InspectionCompleteScreen




import moment from "moment"
import { useEffect, useState } from "react"
import { View, Image, Dimensions, FlatList } from "react-native"
import Button from "../component/Button"
import CarRequest from "../component/CarRequest"
import FilterModal from "../component/FilterModal"
import Header from "../component/Header"
import axios from "axios"
import { useSelector } from "react-redux"
import { selectToken } from "../redux/slices/MainSlice"

const InspectionCompleteScreen = ({ navigation }) => {
    const token =useSelector(selectToken)
    
    const [carDetails, setCarDetails] = useState([{
        day: 'MON',
        date: '30',
        Month: 'Nov',
        time: '12:00 PM',
        userName: 'GOWRISH',
        model: 'KA03AE7835',
        carName: 'Tata NEXON 2020 XE',
        location: 'JP Parking Yard, B1',


    }, {
        day: 'MON',
        date: '12',
        Month: 'Nov',
        time: '12:00 PM',
        userName: 'GOWRISH',
        model: 'KA03AE7835',
        carName: 'Tata NEXON 2020 XE',
        location: 'JP Parking Yard, B1',
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
        axios.get('https://evaluationapi.riolabz.com/v1/inventory/fetch?status=Pending',{ headers: {"Authorization" :`Bearer ${token}`}}).then((response)=>{
            
         setCarDetails(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
 

    return (
        <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
            <Header
                title={`Inspection Request ( ${carDetails.length} )`}
                onBackPress={() => { navigation.goBack() }}
                FilterIcon
                onFilterPress={() => setIsFilterModal(true)}

            />
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10, borderTopRightRadius: 18, borderTopLeftRadius: 18, marginTop: -40, paddingBottom: 20, }}>
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
                />

                <View style={{ paddingHorizontal: 12, }}>


                    <FlatList
                        data={carDetails}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => {
                            if(item.assignedTo ==undefined){ 
                               return (<></>)
                            }else{
                            return (<>
                            
                                <CarRequest
                                     onPressDetail={() => { navigation.navigate('ViewCarDetailScreen') }}
                                     day={days[new Date(item.createdAt).getDay()] }

                                     date={new Date(item.createdAt).getDate()}
                                     Month={monthNames[new Date(item.createdAt).getMonth()+1]}
                               
                                   
                                    //  time={new Date(item.createdAt).getHours()+':'+new Date(item.createdAt).getMinutes()}
                                    time={new Date(item.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                    userName={item.assignedTo.username}
                                    // model={item.model}
                                       model={item.model.name}
                                    // carName={item.carName}
                                 carName={item.version.name}
                                    // location={item.location}
                                    location={"no location"}
                                     onCheckInPress={() => navigation.navigate("InspectBasicCarDetail")}
                                    onPressUpdate={() => navigation.navigate("CarBasicInputScreen")}
                                />
                                <View style={{ marginBottom: 12 }} />
                            </>
                            )
                            }
                        }}
                    />
                </View>
            </View>

        </View>
    )
}
export default InspectionCompleteScreen