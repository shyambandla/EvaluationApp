import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@reduxjs/toolkit";
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
                
                if (res.data.status == 200) {
                    alert(res.data.message)
                   dispatch(setAuthData(res.data.data))
                }
                
            }
            ).catch((err) => {
                console.log(err)
            }
            );
            navigation.navigate('InspectionScreen')
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
