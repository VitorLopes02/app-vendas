import styled from "styled-components/native"
import { theme } from "../../../shared/themes/themes"

export const ContainerLogin = styled.View`
    height: 100%;
    width: 100%;
    padding: 16px;
    background-color: ${theme.colors.neutralTheme.white};
    justify-content: center;
    align-items: center;    
`
export const ImageLogo = styled.Image`
    width: 150px;
    height: 100px;
    margin-bottom: 24px;
`;