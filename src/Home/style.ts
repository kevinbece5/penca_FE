import styled from 'styled-components';

export const PathContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    &:hover a{
        color: black;
        text-decoration: none;
    }
    & > a{
        color: black;
        text-decoration: none;
    }
`;

export const Standings = styled.div`
    margin-right: 20px;
    padding:10px;
    background-color: green;
`;

export const Fixtures = styled.div`
    padding: 10px;
    background-color: tomato;
`;

export const Links = styled.span`

`