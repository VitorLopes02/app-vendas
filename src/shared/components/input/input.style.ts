import styled from 'styled-components/native';
import { theme } from '../../themes/themes';
import { Icon } from '../../icon/Icon';

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  padding-right: ${(props: { hasSecureTextEntry: any }) =>
    props.hasSecureTextEntry ? '50px' : '16px'};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props: { isError: any }) =>
    props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
  color: ${theme.colors.neutralTheme.black};
  background-color: ${theme.colors.neutralTheme.white};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;
