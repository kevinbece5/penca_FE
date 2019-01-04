import * as React from 'react';
import { PathContainer, Standings, Fixtures, Links } from './style';
import { Link } from 'react-router-dom';


export namespace Home {
    export interface Props { }
    export interface State { }
}

export default class Home extends React.Component<Home.Props, Home.State>{
    constructor(props: Home.Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <PathContainer>
                <Link to="/standings" >
                    <Standings>
                        <Links>Standings</Links>
                    </Standings>
                </Link>
                <Link to="/fixtures">
                    <Fixtures>
                        <Links>Fixtures</Links>
                    </Fixtures>
                </Link>
            </PathContainer>
        )
    }
}