import styled from 'styled-components/native';
import { theme } from '../../themes/themes';
import LinearGradient from 'react-native-linear-gradient';

interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : ' ')}
`;

export const GradientButton = styled(LinearGradient)<ContainerButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ButtonSecondary = styled(ContainerButton)<ContainerButtonProps>`
  ${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : '')}
  background-color: transparent;
  background-color: blue;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const ButtonDisabled = styled(ContainerButton)<ContainerButtonProps>`
  background-color: ${theme.colors.grayTheme.gray100};
`;

export const ActivityIndicatorButton = styled.ActivityIndicator`
  margin-left: 8px;
`;
