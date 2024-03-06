import axios from "axios";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useState } from "react";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleOnPress = async () => {
        setLoading(true);
        const resultAxios = await axios.post('http://172.19.128.1:8080/auth', {
            email, 
            password
        }).catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        }) ;
        setLoading(false);
        console.log("Clico");
    
    }

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    }

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setPassword(event.nativeEvent.text);
    }

    return {
        email,
        password,
        errorMessage,
        loading,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleOnPress
    }
} 