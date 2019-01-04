import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fixture from './FixturesList/Fixture/index';
import FixturesList from './FixturesList/index';
import Standings from './Standings/index';
import Home from './Home/index';
import FixturePicks from './FixturesList/FIxturePicks/index';
import * as Styles from './styles'
import { Link } from 'react-router-dom';
export namespace App {

    export interface Props {

    }

    export interface State {
        selectedOption: string
    }

}
const MENU_OPTIONS = {
    STANDINGS: "STANDINGS",
    FIXTURE: "FIXTURE"
}
export default class App extends React.Component<App.Props, App.State>{
    constructor(props: App.Props) {
        super(props);
        this.state = {
            selectedOption: MENU_OPTIONS.STANDINGS
        }
        this.onNavButtonClicked = this.onNavButtonClicked.bind(this)
    }

    onNavButtonClicked(option: string) {
        this.setState({
            selectedOption: option
        })
    }

    render(): JSX.Element {
        return (
            <Styles.AppContainer>
                <Styles.AppBar>
                    <Styles.AppBarContainer>
                        <Link to="/standings">
                            <Styles.NavButton selected={this.state.selectedOption === MENU_OPTIONS.STANDINGS} onClick={() => this.onNavButtonClicked(MENU_OPTIONS.STANDINGS)}>
                                Standings
                            </Styles.NavButton>
                        </Link>
                        <Link to="/fixture">
                            <Styles.NavButton selected={this.state.selectedOption === MENU_OPTIONS.FIXTURE} onClick={() => this.onNavButtonClicked(MENU_OPTIONS.FIXTURE)}>
                                Fixture
                            </Styles.NavButton>
                        </Link>
                    </Styles.AppBarContainer>
                </Styles.AppBar>
                <Styles.AppBody>
                    <Styles.Scroller>
                        <Switch>
                            <Route exact path="/standings" component={Standings} />
                            <Route exact path="/fixture" component={FixturesList} />
                            <Route path={`/fixture/:matchID`} component={FixturePicks} />
                        </Switch>
                    </Styles.Scroller>
                </Styles.AppBody>
            </Styles.AppContainer>
        )
    }
}