import * as React from "react";
import { Redirect, Link } from 'react-router-dom';
import FixturePicks from '../FIxturePicks/index';
import { MatchListItem, TeamsContainer, TimeBanner, MatchContainer, TeamContainer, TeamName, TeamBadge, VS, InputContainer, Input, GameTime, MatchInfoContainer } from './style';
import { TeamComponent } from '../Team/index'
import * as moment from 'moment'
import { history } from 'react-router-dom'

export namespace Fixtures {

    export interface Props {
        matchID?: number;
        teamNameHome?: string;
        teamNameAway?: string;
        teamBadgeHome?: any;
        teamBadgeAway?: any;
        gameTime?: string;
        history?: any;
    }
    export interface State {
    }

}

export default class Fixtures extends React.Component<Fixtures.Props, Fixtures.State>{
    constructor(props: Fixtures.Props) {
        super(props);
        this.onClickMatch = this.onClickMatch.bind(this)
    }

    onClickMatch = () => {

    }
    //make navlink take you too the specific match
    render(): JSX.Element {
        const gameTimeDate = moment("2018-09-01T21:00:00+0300").format("dddd - HH:mm")
        return (
            <MatchListItem>
                <MatchContainer >
                    <Link to={`/fixture/${this.props.matchID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <TeamsContainer>
                            <TeamComponent team={{ name: this.props.teamNameHome }} />
                            {
                                this.renderMatchInfo(false)
                            }
                            <TeamComponent team={{ name: this.props.teamNameAway }} />
                        </TeamsContainer>
                        <TimeBanner>
                            <GameTime>{gameTimeDate}</GameTime>
                        </TimeBanner>
                    </Link>
                </MatchContainer >
            </MatchListItem>
        )
    }

    renderMatchInfo(results): JSX.Element {
        return (
            <MatchInfoContainer>
                {
                    results
                        ?
                        <VS>VS</VS>
                        :
                        <>
                            <VS>2</VS>
                            <VS>-</VS>
                            <VS>0</VS>
                        </>
                }
            </MatchInfoContainer>
        )
    }

}

