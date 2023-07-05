
import React from 'react'
import { KpiContainer } from './Kpi.styled'
import { AppTypography } from '../../styles/global.styled'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { ICON_DEFAULT_SIZE } from '../../utils/consts/global'
import { TypographyBold, TypographySize } from '../../types/styles.d'

export enum IconProvider {Entypo, FontAwesome5}

interface KpiProps{
    value:string | number,
    unit: string,
    icon:string,
    color?:string,
    iconProvider: IconProvider
}
const Kpi:React.FC<KpiProps> = ({value,unit,icon,color,iconProvider})=>{
return (
    <KpiContainer>
        {IconProvider.Entypo === iconProvider && <EntypoIcon size={ICON_DEFAULT_SIZE} color={color}  name={icon} />}
        {IconProvider.FontAwesome5 === iconProvider && <FontAwesome size={ICON_DEFAULT_SIZE} color={color}  name={icon} />}
        <AppTypography size={TypographySize.lg} bold={TypographyBold.md}>{`${value} ${unit}`}</AppTypography>
    </KpiContainer>
)

}


export default Kpi