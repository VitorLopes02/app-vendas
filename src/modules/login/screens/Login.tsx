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
            <Input margin="0px 0px 8px 8px" placeholder="Digite seu email" placeholderTextColor={theme.colors.grayTheme.gray100} title="Email:" />
            <Input secureTextEntry placeholder="Digite sua senha" placeholderTextColor={theme.colors.grayTheme.gray100} title="Senha:" />

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