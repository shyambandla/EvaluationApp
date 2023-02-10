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

                console.log(res,"c dataddddddddd")
                
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
