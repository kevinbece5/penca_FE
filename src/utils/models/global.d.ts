declare type RootState = {
    standings: StandingsState
    matches: MatchesState
}

declare type StandingsState = {
    players: PlayerState[]
    playersloaded: boolean
}

declare type MatchesState = {
    matches: MatchState[]
    matchesLoaded: boolean
}

declare type PlayerState = {
    player: string
    points: number
}

declare type MatchState = {
    teamNameHome: string
    teamNameAway: string
    matchID: string

}