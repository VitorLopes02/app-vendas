import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../themes/themes";
import LinearGradient from "react-native-linear-gradient";

interface ContainerButtonProps {
    margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;    
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : " " )}
`;

export const GradientButton = styled(LinearGradient)<ContainerButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ButtonSecondary = styled(ContainerButton)<ContainerButtonProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  background-color: transparent;
  background-color: blue;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;