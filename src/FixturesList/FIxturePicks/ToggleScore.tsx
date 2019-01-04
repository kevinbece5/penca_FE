import * as React from 'react';
import { ScoreContainer, ScoreButton } from './style';

export namespace ToggleScore {

    export interface Props {
        minusScore?: any;
        plusScore?: any;
        score?: number;
    }

    export interface State {

    }

}

export default class ToggleScore extends React.Component<ToggleScore.Props, ToggleScore.State>{
    constructor(props: ToggleScore.Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <ScoreContainer>
                <ScoreButton type='button' onClick={this.props.minusScore}>-</ScoreButton>
                {this.props.score}
                <ScoreButton type='button' onClick={this.props.minusScore}>+</ScoreButton>
            </ScoreContainer>
        )
    }

}