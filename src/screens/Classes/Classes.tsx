import React from 'react'
import {  View } from 'react-native'
import  ClassesCard  from '../../components/Cards/ClassesCard/ClassesCard'
import { ScrollView } from 'react-native-gesture-handler'
import useClasses from './useClasses'



const Classes  = async()=> {
  const {
    getDevices,
    } = useClasses();
const devices = await getDevices()
return <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
    {devices.map(({battaryLevel,humidity,temerature,name,lastTransmit},index)=>{
      return (
        <ClassesCard key={index}  batteryPercent={battaryLevel} temperature={temerature} humidity={humidity} lastUpdate={lastTransmit} className={name}   />
      )
    })}

    </ScrollView>
       

</View>}


export default Classes