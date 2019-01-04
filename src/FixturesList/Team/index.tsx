import * as React from "react";
import { UnderlineAnimation, styles } from '@npm.tangocode/tc_ui_components';
import { NavLink } from 'react-router-dom';
import FixturePicks from '../FIxturePicks/index';
import { TeamContainer, TeamName, TeamBadge, TeamBadgeContainer } from './style';


export namespace Team {

    export interface Props {
        team: any //TODO: Team
    }
    export interface State {
    }

}

export class TeamComponent extends React.Component<Team.Props, Team.State>{
    constructor(props: Team.Props) {
        super(props);

    }

    //make navlink take you too the specific match
    render(): JSX.Element {
        return (
            <TeamContainer >
                <TeamBadgeContainer>
                    <TeamBadge src={"https://restcountries.eu/data/ury.svg"} />
                </TeamBadgeContainer>
                <TeamName>{this.props.team.name}</TeamName>
            </TeamContainer>
        )
    }

}

