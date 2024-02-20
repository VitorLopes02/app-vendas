import styled from "styled-components/native";
import { theme } from "../../themes/themes";

export const ContainerInput = styled.TextInput`
    width: 100%;
    height: 48px;    
    padding: 16px;
    border-radius: 4px;
    border-width: 1px;
    border-color: ${theme.colors.grayTheme.gray80};
    color: ${theme.colors.neutralTheme.black};
    background-color: ${theme.colors.neutralTheme.white};
`;