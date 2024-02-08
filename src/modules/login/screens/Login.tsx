import { View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";

const Login = () => {

    const handleOnPress = () => {
        console.log("Clico");
    }

    return (
        <View>
            <ContainerLogin>                
                <Input />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px"
                    title="ENTRAR"
                    onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    );
};

export default Login;