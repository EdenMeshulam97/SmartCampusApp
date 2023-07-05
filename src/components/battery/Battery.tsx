import React from 'react'
import { BatteryContainer, BatteryFill, BatteryFillContainer, BatteryNipple } from './Battery.styeld'
import { BATTERY_LOW_PERCENT, BATTERY_MEDIUM_PERCENT } from '../../utils/consts/global'
import { AppTypography } from '../../styles/global.styled'
import { TypographyBold, TypographyColor, TypographySize } from '../../types/styles.d'
import { Text } from 'react-native'
import theme from '../../styles/theme'


interface BatteryProps {
    percent:number
}
const Battery: React.FC<BatteryProps>= ({percent})=>{
  

    const getBatteryBackgroundColorByPercent = ()=>{
        if(percent <= BATTERY_LOW_PERCENT)
        {
            return "red"
        }
        else if(percent <= BATTERY_MEDIUM_PERCENT)
        {
            return "#F0F330"

        }
        else
        return "green"
    }

    return (
        <BatteryContainer>
            <BatteryFillContainer>
              <BatteryFill percent={percent} color={getBatteryBackgroundColorByPercent()} />
              <AppTypography style={{position:'absolute',alignSelf:'center'}} textColor={TypographyColor.black} bold={TypographyBold.md}>{percent + '%'}</AppTypography>
            </BatteryFillContainer>
            <BatteryNipple />

      </BatteryContainer>
    )


}


export default Battery