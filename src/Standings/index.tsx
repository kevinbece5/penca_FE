import * as React from 'react';
import { PlayerRanking, LeaderBoardListContainer, LeaderboardContainer, LeaderBoardHeader, HeaderText, Standings, PlayerRank, PlayerName, PlayerScore } from './style';
import UserListComponent from '../UsersList';
import { connect } from 'react-redux';
import * as StandingsActions from './actions';
import { bindActionCreators } from 'redux';

export namespace LeaderBoard {

    export interface Props {
        getStandings: () => void;
        standings: any;
    }
    export interface State { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStandings: bindActionCreators(StandingsActions.getStanding as any, dispatch)
    }
}

const mapStateToProps = (state, props) => {

}

@connect(mapDispatchToProps)
export default class LeaderBoard extends React.Component<LeaderBoard.Props, LeaderBoard.State>{
    constructor(props: LeaderBoard.Props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getStandings();
    }

    render(): JSX.Element {
        const dataStandings = [
            {
                user: "franklin",
                points: 44,
                key: 1
            },
        ]
        const userListTrasnformed = dataStandings.map((standing, index) => {
            return {
                prefix: this.getEmojiForIndex(index + 1),
                title: standing.user,
                subtitle: `${standing.points}pts`
            }
        })
        return (
            <LeaderboardContainer>
                <LeaderBoardHeader>
                    <HeaderText>
                        NAME
                    </HeaderText>
                    <HeaderText>
                        PTS
                    </HeaderText>
                </LeaderBoardHeader>
                <LeaderBoardListContainer>
                    <UserListComponent listOfUsers={userListTrasnformed} />
                </LeaderBoardListContainer>
            </LeaderboardContainer>
        )
    }

    getEmojiForIndex(position) {
        if (position === 1) {
            return "🥇"
        } else if (position === 2) {
            return "🥈"
        } else if (position === 3) {
            return "🥉"
        }
        return `${position}`
    }
}