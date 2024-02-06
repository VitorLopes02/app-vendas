import styled from "styled-components/native";

interface ContainerButtonProps {
    margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: blue;
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : " " )}
`;