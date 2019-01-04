import styled from 'styled-components';
import { COLOR_PALETTE } from '@npm.tangocode/tc_ui_components/constants/colors';

export const PlayerPicksContainer = styled.div`
`;

export const Player = styled.div`

`;

export const PlayerName = styled.span`
    width: 50px;
    font-size: 20px;
    margin-left: 20px;
`;

export const PlayerPicks = styled.div`
    color: ${COLOR_PALETTE.BLACK};
    font-size: 15px;
    margin-left: 50px;
`;

export const PlayerPick = styled.span`
    padding: 0 42px 0 41px
`;

export const ScoreContainer = styled.span`
    padding: 10px;
`;

export const ScoreButton = styled.button`
    background-color: ${COLOR_PALETTE.GREEN};
    border-radius: 50%;
    font-size: 10px;
    margin: 5px;
`;

export const PicksContainer = styled.div`
    width:100%;
`