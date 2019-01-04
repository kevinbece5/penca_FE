import * as React from 'react';
import Fixture from '../Fixture/index';
import ToggleScore from './ToggleScore';
import { PlayerPicksContainer, Player, PlayerPick, PlayerName, PlayerPicks, PicksContainer } from './style';
import UserListComponent from '../../UsersList';
import { WorldCupMatches } from '../../data/data';

export namespace FixturePicks {

    export interface Props {
        playerName?: string;
        match?: any;
    }

    export interface State {

    }

}

export default class FixturePicks extends React.Component<FixturePicks.Props, FixturePicks.State>{
    constructor(props: FixturePicks.Props) {
        super(props);
    }

    render(): JSX.Element {
        const picks = [
            {
                user: "franklin",
                homeTeamScore: 1,
                awayTeamScore: 0,
                winner: null
            },
            {
                user: "kevin",
                homeTeamScore: 1,
                awayTeamScore: 2,
                winner: null
            },
            {
                user: "kurt",
                homeTeamScore: 0,
                awayTeamScore: 1,
                winner: null
            },
            {
                user: "kurt",
                homeTeamScore: 0,
                awayTeamScore: 1,
                winner: null
            },
            {
                user: "franklin",
                homeTeamScore: 1,
                awayTeamScore: 0,
                winner: null
            },
            {
                user: "kevin",
                homeTeamScore: 1,
                awayTeamScore: 2,
                winner: null
            },
            {
                user: "kurt",
                homeTeamScore: 0,
                awayTeamScore: 1,
                winner: null
            },
            {
                user: "kurt",
                homeTeamScore: 0,
                awayTeamScore: 1,
                winner: null
            },
            {
                user: "franklin",
                homeTeamScore: 1,
                awayTeamScore: 0,
                winner: null
            },
            {
                user: "kevin",
                homeTeamScore: 1,
                awayTeamScore: 2,
                winner: null
            },
            {
                user: "kurt",
                homeTeamScore: 0,
                awayTeamScore: 1,
                winner: null
            },
            {
                user: "kurt",
                homeTeamScore: 0,
                awayTeamScore: 1,
                winner: null
            },
        ]
        const trasnformedPicks = picks.map(pick => {
            return {
                prefix: "",
                title: pick.user,
                subtitle: `${pick.homeTeamScore} - ${pick.homeTeamScore}`
            }
        })
        return (
            <PicksContainer>
                <Fixture />
                <PlayerPicksContainer>
                    <UserListComponent listOfUsers={trasnformedPicks} />
                </PlayerPicksContainer>
            </PicksContainer >
        )
    }
}