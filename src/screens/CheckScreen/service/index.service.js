import axios from "axios";
import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { selectToken } from "../../../redux/slices/MainSlice";
import { useDispatch, useSelector } from "react-redux";
const CheckServiceComponent = ({ children, navigation, route }) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
useEffect(() => {
    console.log(route.params.page)
},[])

const [steps,setSteps]=React.useState([])
    const [currentPage,setCurrentPage]=React.useState(route.params.page)



    const token = useSelector(selectToken);



    useEffect(() =>{
        console.log(token)
        if(token){
            axios.get('https://evaluationapi.riolabz.com/v1/question_category/fetch',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }).then(response =>{
                console.log(response.data)
                if(response.status == 200){
                    const categories = response.data.data.map((item,index) =>{
                    
                        return {
                            title:item.name,
                            id:item._id,
                        }
                    });
                    setSteps(categories)
                }
            }).catch(error =>{
                console.log(error)
            }
            )
        }
    },[token]);   

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    const [documentation, setDocumentation] = useState([
        {
            title: 'Immobilizer',
            selected: '',
            buttonValues: ["Available", "Not Available", "Not Applicable"]

        }
        , {
            title: 'Road Tax',
            selected: '',
            buttonValues: ["Paid", "Not paid", "Expired"]

        }
        , {
            title: 'Vehicle Towed',
            selected: '',
            buttonValues: ["Yes", "No"]

        }
    ])

    const [exterior, setExterior] = useState([
        {
            title: 'Bonnet Quality',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'Front Bumper',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'Head Light Left',
            selected: '',
            buttonValues: ["Ok", "Foggy", "Broken", "Cracked", "Repainted"]

        }
        , {
            title: 'Head Light Right',
            selected: '',
            buttonValues: ["Ok", "Foggy", "Broken", "Cracked", "Repainted"]

        }
        , {
            title: 'Front Panel (Crossmember)',
            selected: '',
            buttonValues: ["Good", "Scratched", "Dented", "Rusted", "Repaired"]

        }
        , {
            title: 'Front Windscreen',
            selected: '',
            buttonValues: ["Good", "Spotted", "Cracked", "Scratched", "Replaced"]

        }
        , {
            title: 'Fog Light Left',
            selected: '',
            buttonValues: ["Ok", "Broken", "Foggy", "Not Available",]

        }
        , {
            title: 'Fog Light Right',
            selected: '',
            buttonValues: ["Ok", "Broken", "Foggy", "Not Available",]

        }
        , {
            title: 'Roof Quality',
            selected: '',
            buttonValues: ["Good", "Scratched", "Dented", "Rusted", "Repaired"]

        }
        , {
            title: 'Sun Roof',
            selected: '',
            buttonValues: ["Working", "Not Working", "Not Applicable",]

        }
    ])

    const [exteriorBack, setExteriorBack] = useState([
        {
            title: 'Dickey Floor',
            selected: '',
            buttonValues: ["Good", "Repaired", "Dented", "Rusted",]

        }
        , {
            title: 'Tail Light Right',
            selected: '',
            buttonValues: ["Ok", "Broken", "Cracked",]

        }
        , {
            title: 'Tail Light Left',
            selected: '',
            buttonValues: ["Ok", "Broken", "Cracked",]

        }
        , {
            title: 'Spare Tyre',
            selected: '',
            buttonValues: ["Available", "Not Available",]

        }
        , {
            title: 'Spare Tyre Tread',
            selected: '',
            buttonValues: ["0-20%", "20-40%", "40-60%", "60-80%", "80+%"]

        }
        , {
            title: 'Rear Bumper',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'Rear Windscreen',
            selected: '',
            buttonValues: ["Good", "Spotted", "Cracked", "Scratched", "Replaced"]

        }
        , {
            title: 'Dickey Door',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'Tall Light Right',
            selected: '',
            buttonValues: ["OK", "Broken", "Cracked",]

        }

    ])

    const [exteriorRight, setExteriorRight] = useState([
        {
            title: 'Front Door Right',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'Front Door Left',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'Fender Right',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'C Pillar Right',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted",]

        }
        , {
            title: 'Front Door Glass Right',
            selected: '',
            buttonValues: ["Good", "Rusted", "Dented", "Repaired", "Repainted", "Scratched"]

        }
        , {
            title: 'Quarter Panel Glass Right',
            selected: '',
            buttonValues: ["Good", "Broken", "Replaced", "Scratched", "Not Applicable",]


        }
        , {
            title: 'Quarter Panel Right',
            selected: '',
            buttonValues: ["Good", "Rusted", "Dented", "Repaired", "Repainted", "Scratched"]


        }
        , {
            title: 'OVRM Right Availability',
            selected: '',
            buttonValues: ["Available", "Not Available", "Broken"]
        }
        , {
            title: 'Front Right Tyre Tread',
            selected: '',
            buttonValues: ["0-20%", "20-40%", "40-60%", "60-80%", "80+%"]
        }
        , {
            title: 'Front door glass Right',
            selected: '',
            buttonValues: ["Good", "Scratched", "Broken", "Replaced", "Not Applicable",]

        }
        , {
            title: 'B Pillar Right',
            selected: '',
            buttonValues: ["Good", "Rusted", "Dented", "Repaired", "Repainted"]

        }
        , {
            title: 'Rear door glass Right',
            selected: '',
            buttonValues: ["Good", "Rusted", "Broken", "Replaced",]

        }
        , {
            title: 'A Pillar Right',
            selected: '',
            buttonValues: ["Good", "Rusted", "Dented", "Repaired", "Repainted",]

        }
        , {
            title: 'Running Board Right',
            selected: '',
            buttonValues: ["Good", "Rusted", "Dented", "Repaired", "Repainted", "Scratched"]

        }

    ])
    const [exteriorLeft, setExteriorLeft] = useState([
        {
            title: 'A Pillar Left',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted",]

        }
        , {
            title: 'B Pillar Left',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted",]

        }
        , {
            title: 'Rear Door Left',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", "Scratched", "Replaced"]

        }
        , {
            title: 'C Pillar Left',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted",]

        }
        , {
            title: 'Rear Door Right',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Repainted", 'Scratched', "Replaced"]

        }
        , {
            title: 'Quarter Panel Glass Left',
            selected: '',
            buttonValues: ["Good", "Scratched", "Broken", "Replaced", "Not Applicable"]

        }
        , {
            title: 'Rear Door Glass Left',
            selected: '',
            buttonValues: ["Good", "Scratched", "Broken", "Replaced",]

        }
        , {
            title: 'Front Door Glass Left',
            selected: '',
            buttonValues: ["Good", "Scratched", "Broken", "Replaced",]

        }
        , {
            title: 'ORVM Left Availability',
            selected: '',
            buttonValues: ["Available", "Not Available", "Broken",]

        }
        , {
            title: 'Front Right Tyre Tread',
            selected: '',
            buttonValues: ["0-20%", "20-40%", "40-60%", "40-60%", '80+%']

        }
        , {
            title: 'No. of Alloy wheels',
            selected: '',
            buttonValues: ["4", "S", "Not Available"]

        }
    ])
    const [exteriorOther, setExteriorOther] = useState([
        {
            title: 'Apron Right',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Cracked",]

        },
        {
            title: 'Apron Left',
            selected: '',
            buttonValues: ["Good", "Dented", "Repaired", "Rusted", "Cracked",]

        }


    ])

    const [interiorAc, setInteriorAc] = useState([
        {
            title: 'Air Condition',
            selected: '',
            buttonValues: ["Available", "Not Available",]

        },

    ])
    const [interiorEvaluation, setInteriorEvaluation] = useState([
        {
            title: 'ABS',
            selected: '',
            buttonValues: ["Available", "Not Available",]

        },
        {
            title: 'Music system',
            selected: '',
            buttonValues: ["Working", "Not Working", "Not Available",]

        },
    ])

    const [recomendation, setRecomendation] = useState([
        {
            title: 'Other Details',
            selected: '',
            buttonValues: ["Accidental/Structural damage", "Good", "Flooded", "Need Refurb", "Poor Mechanical Condition"]

        },
        {
            title: 'Comments',
            selected: '',
            // buttonValues: ["Accidental/Structural damage", "Good", "Flooded", "Need Refurb", "Poor Mechanical Condition"]

        },
    ])




    const [data, setData] = useState([])

    

    useEffect(() => {
        if(steps.length>0&&currentPage<steps.length-1){
            axios.get(`https://evaluationapi.riolabz.com/v1/inventory_question/fetch?categoryIds=${steps[currentPage].id}`,{
                headers:{
                    'Authorization': 'Bearer ' + token
                }
            }).then((res)=>{
                const datachoice=[];
                res.data.data.map((item)=>{
                    datachoice.push({
                        id:item._id,
                        title:item.name,
                        buttonValues:item.choices.map((item)=>item.value),
                        selected:""
                    })
                })
                setData(datachoice)
                
            }
            ).catch((err)=>{
                console.log(err)
                setData([])
            }
            )
        }
    }, [steps,currentPage])

    // useEffect(() => {
    //     console.log('page changed', currentPage)
    //     setData(steps[currentPage] == "Docomentation" ?
    //     documentation : steps[currentPage] == "Exterior - Front" ?
    //         exterior : steps[currentPage] == "Exterior - Back" ?
    //             exteriorBack : steps[currentPage] == "Exterior - Right" ?
    //                 exteriorRight : steps[currentPage] == "Exterior - Other" ?
    //                     exteriorOther : steps[currentPage] == "Interior AC" ?
    //                         interiorAc : steps[currentPage] == "Recommendation" ?
    //                             recomendation : steps[currentPage] == "Exterior - Left" ?
    //                                 exteriorLeft : steps[currentPage] == 'Interiors In Elevation' ? interiorEvaluation : [])
    // }, [currentPage])


    return children({
        route,
        navigation,
        data,
        setData,
        setCurrentPage,
        currentPage,
        setSteps,
        steps
        , isKeyboardVisible
    });

}


export default CheckServiceComponent;
