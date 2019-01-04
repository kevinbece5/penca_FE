import * as React from 'react';
import { 
    PlayerRanking,
    Standings,
    PlayerRank,
    PlayerName,
    PlayerScore } from './style';

export namespace UserList {

    export interface Props {
        listOfUsers: {prefix:string, title:string, subtitle:string}[]
    }
    export interface State {

    }
}

export default class UserListComponent extends React.Component<UserList.Props, UserList.State>{
    constructor(props: UserList.Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Standings>
                {
                    this.props.listOfUsers.map((userListItem, index) => {
                        return (
                            <PlayerRank key={`${userListItem.title}`}>
                                <PlayerRanking>{userListItem.prefix}</PlayerRanking>
                                <PlayerName> {userListItem.title}</PlayerName>
                                <PlayerScore>{userListItem.subtitle}</PlayerScore>
                            </PlayerRank>
                        )
                    })
                }
            </Standings>
        )
    }
}

