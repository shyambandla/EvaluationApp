import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "../../../redux/slices/MainSlice";
const LoginServiceComponent = ({ children, navigation, route }) => {

    const [isEnabled, setIsEnabled] = useState(true)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const onSubmit = () => {

        if (email == '') {
            alert('Please enter email')
        } else if (password == '') {
            alert('Please enter password')
        } else {
            axios.post('https://evaluationapi.riolabz.com/v1/auth/login', {
                email: email,
                password: password,


            }).then((res) => {
                
                if (res.status == 200) {
             
                    console.log(res.data)
                   dispatch(setAuthData(res.data.data))
                   navigation.navigate('InspectionScreen')
                //    if(res.data.data.employeeType.name == 'INSPECTION'){
                //     navigation.navigate('InspectionScreen')
                //    }else{
                //     navigation.navigate('ViewCarDetailScreen')
                //    }
                 
                }
             
            
                
            }
            ).catch((err) => {
                console.log(err)
                alert("invalid credentialss")
            }
            );
          
        }

    }

    return children({
        navigation,
        isEnabled,
        setIsEnabled,
        toggleSwitch,
        email,
        setEmail,
        password,
        setPassword,
        onSubmit

    });

}


export default LoginServiceComponent;
