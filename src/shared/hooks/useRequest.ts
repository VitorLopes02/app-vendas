import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UseUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";


export const useRequest = () => {
    const { setUser } = UseUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('http://172.19.128.1:8080/auth', body)
        .then((result) => {
            setUser(result.user)
        })
        .catch(() => {
            setModal({
                visible: true,
                title: 'Erro',
                text: 'Usuário ou senha inválidos',
            });
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