import styled from 'styled-components';
import { COLOR_PALETTE } from '@npm.tangocode/tc_ui_components/constants/colors';


export const _Button = styled.button`
    padding:0px;
    margin: 0px;
    text-align: center;
    outline: none;
    background: none;
    border:none;
`

export const AppBar = styled.nav`
    background-color: #182939;
    display:flex;
    align-items: center;
    height: 80px;
    padding-left: 24px;

`
export const AppBarContainer = styled.div`
    display:flex;
    height: 40px;
    width: 104px;;
    font-family: Avenir;
    font-size: 23px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: center;
    // color: #ffffff;
    // background: green;
`

export const AppContainer = styled.div`
    display:flex;
    height:100%;
    width:100%;
    flex-flow: column;
    background: red;
    font-family: Khula;
    overflow:hidden;
`

interface NavButtonProps {
    selected: boolean;
}

export const NavButton = _Button.extend`
    width: 120px;
    font-size: 23px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #ffffff;
    margin-right: 24px;
    border-bottom: ${(props: NavButtonProps) => props.selected ? '6px solid #7e90f6' : '' };
`

export const AppBody = styled.div`
    display:flex;
    background: yellow;
    justify-content: center;
    flex:1;
`

export const Scroller = styled.div`
    display:flex;
    height:100%;
    overflow:scroll;
    padding: 40px;
    width:100%;
    background: #F0F0F0;
    
    @media (max-width: 465px){
        padding: 0;
    }

`

export const Content = styled.div`
    height:900px;
    width:400px;
    background:brown;
`