import { View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";

const Login = () => {

    const handleOnPress = () => {
        console.log("Clico");
    }

    return (
        <View>
            <ContainerLogin>                
                <Input />
                <Button title="ENTRAR" margin="8px" onPress={handleOnPress}/>
            </ContainerLogin>
        </View>
    );
};

export default Login;