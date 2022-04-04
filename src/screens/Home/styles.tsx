import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.colors.main};

`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
`