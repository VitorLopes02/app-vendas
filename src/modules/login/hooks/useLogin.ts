import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const useLogin = () => {
    const { user } = useSelector((state: RootState) => state.userReducer)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();     

    console.log('user', user);

    const handleOnPress = async () => {
        authRequest({
            email,
            password,
        });
    };

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