import styled from "styled-components/native";
import { BATTERY_LOW_PERCENT, BATTERY_MEDIUM_PERCENT } from "../../utils/consts/global";

export const BatteryContainer = styled.View`
flex-direction:row;
align-items:center;
justify-content:center;
`

export const BatteryFillContainer = styled.View`
width:50px;
height:20px;
border-color:black;
border-width:1px;
border-radius:5px;
background-color:white;
`

export const BatteryFill = styled.View<{color:string,percent:number}>`
width: ${props=>props.percent}%;
height:100%;
background-color: ${props=>{
    const percent = props.percent
    if(percent <= BATTERY_LOW_PERCENT)
        {
            return "red"
        }
        else if(percent <= BATTERY_MEDIUM_PERCENT)
        {
            return "#FFDD00"

        }
        else
        return "green"
}};
opacity:0.7;
`

export const BatteryNipple = styled.View`
background-color:black;
border-top-right-radius: 2px; 
border-bottom-right-radius: 2px; 

height:7px;
width:3px;
`


