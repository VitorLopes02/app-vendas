import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";


export const useRequest = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('http://172.19.128.1:8080/auth', {
            body
        })
        .then((result) => {
            dispatch(setUserAction(result.user));            
        })
        .catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        }) ;    

        setLoading(false);
    };

    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage
    };
};