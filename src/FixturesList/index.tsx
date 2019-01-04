import * as React from "react";
import Fixtures from './Fixture/index';
import FixturePicks from './FIxturePicks/index';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { WorldCupMatches } from '../data/data';
import * as Styles from './styles'
export namespace FixturesComponent {
    export interface Props {
        data?: any;
    }

    export interface State { }
}

export default class FixturesComponent extends React.Component<FixturesComponent.Props, FixturesComponent.State> {
    constructor(props: FixturesComponent.Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Styles.FixtueContainer>
                {
                    WorldCupMatches.map((matches) => {
                        return (
                            <Fixtures
                                matchID={matches.num}
                                gameTime={matches.time}
                                teamNameAway={matches.team2.name}
                                teamNameHome={matches.team1.name}
                                key={matches.num}
                            />
                        )
                    })
                }
            </Styles.FixtueContainer>
        )
    }
}

