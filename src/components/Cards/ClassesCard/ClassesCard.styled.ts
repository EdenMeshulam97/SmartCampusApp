import { HStack } from "native-base";
import styled from "styled-components/native";

export const ClassesCardContainer = styled.View`
width:95%;
align-slef:center;
background-color:white;
margin: ${({theme})=>theme.spacing.sm};
`

export const ContentContainer = styled.View`
padding: ${({theme})=>theme.spacing.md};
`

export const ClassCardHeader = styled(HStack)`
background-color: #838383;
padding-left:${({theme})=>theme.spacing.md};
padding-right: ${({theme})=>theme.spacing.md};
`


export const KpiContainer = styled(HStack)`

`