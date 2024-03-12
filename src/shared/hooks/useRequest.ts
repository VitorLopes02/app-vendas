import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";


export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<UserType>();

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('http://172.19.128.1:8080/auth', {
            body
        })
        .then((result) => {
            setUser(result.user);
        })
        .catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        }) ;    

        setLoading(false);
    };

    return {
        loading,
        user,
        errorMessage,
        authRequest,
        setErrorMessage
    };
};