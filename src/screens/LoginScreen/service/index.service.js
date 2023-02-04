import React, { useEffect, useState } from "react";
const LoginServiceComponent = ({ children, navigation, route }) => {

    const [isEnabled, setIsEnabled] = useState(true)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return children({
        navigation,
        isEnabled,
        setIsEnabled,
        toggleSwitch,
        email,
        setEmail,
        password,
        setPassword

    });

}


export default LoginServiceComponent;
