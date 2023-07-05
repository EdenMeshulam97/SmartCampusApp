import React from 'react'
import { ClassCardHeader, ClassesCardContainer, ContentContainer, KpiContainer } from './ClassesCard.styled'
import { CARD_STYLE } from '../../../utils/consts/card'
import Battery from '../../battery/Battery'
import Kpi, { IconProvider } from '../../Kpi/Kpi'
import { kpiUnits } from '../../../utils/consts/kpis'
import { AppTypography } from '../../../styles/global.styled'
import { getReadableDate } from '../../../utils/helpers/date'
import { TypographyBold, TypographyColor, TypographySize } from '../../../types/styles.d'
import { Flex, HStack } from 'native-base'
import { typography } from 'native-base/lib/typescript/theme/styled-system'



interface ClassesCardProps {
    batteryPercent:number,
    temperature:number,
    humidity:number,
    className:string,
    lastUpdate:Date
}

const ClassesCard:React.FC<ClassesCardProps   > = ({lastUpdate,className,humidity,temperature,batteryPercent})=>{
return (
    <ClassesCardContainer style={CARD_STYLE}>
      
        <ClassCardHeader justifyContent={'space-between'}>
        <AppTypography size={TypographySize.lg} bold={TypographyBold.md} textColor={TypographyColor.white}>{className}</AppTypography>
        <Battery percent={batteryPercent} />
        </ClassCardHeader> 
        <ContentContainer>
        <KpiContainer justifyContent={'space-between'} >
            <Kpi color={'red'} value={temperature} unit={kpiUnits.TEMPERATURE} iconProvider={IconProvider.FontAwesome5} icon='temperature-high' />
            <Kpi color={'blue'} value={humidity} unit={kpiUnits.HUMIDITY} iconProvider={IconProvider.Entypo} icon='drop' />
        </KpiContainer>
         <AppTypography>{getReadableDate(lastUpdate)}</AppTypography>
         </ContentContainer>
    </ClassesCardContainer>
)
}

export default ClassesCard