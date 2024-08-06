import { View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/themes';
import { useLogin } from '../hooks/useLogin';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const {
    email,
    password,
    errorMessage,
    loading,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnPress,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 8px"
          placeholder="Digite seu email"
          placeholderTextColor={theme.colors.grayTheme.gray100}
          title="Email:"
          onChange={handleOnChangeEmail}
        />

        <Input
          value={password}
          errorMessage={errorMessage}
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor={theme.colors.grayTheme.gray100}
          title="Senha:"
          onChange={handleOnChangePassword}
        />

        <Button
          type={theme.buttons.buttonsTheme.primary}
          loading={loading}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
