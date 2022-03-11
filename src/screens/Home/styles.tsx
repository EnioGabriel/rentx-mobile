import styled from 'styled-components/native';
import { useTheme } from 'styled-components';

const theme = useTheme();

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${theme.colors.main};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.secondary_600};
`