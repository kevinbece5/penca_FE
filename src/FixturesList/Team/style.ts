import styled from  'styled-components';

export const TeamContainer = styled.div`
    display:flex;
    flex-flow: column;
    align-items: center;
    flex:1;
    margin-top: -16px;
`;

export const TeamName = styled.span`
    margin-top: 24px;   
    @media (max-width: 465px){
        font-size: 14px;

    }
`;

export const TeamBadge = styled.img`
    height:80px;
    width: 80px;
    @media (max-width: 465px){
        height: 65px;
        width: 65px;
    }
`;

export const TeamBadgeContainer = styled.div`
    border-radius: 40px;
    height:80px;
    width: 80px;
    border: 1px solid #F0F0F0;
    overflow: hidden;
    background: #FFF;
    @media (max-width: 465px){
        height: 65px;
        width: 65px;
        }
    }
`;