import React from 'react'
import {  View } from 'react-native'
import  ClassesCard  from '../../components/Cards/ClassesCard/ClassesCard'
import { ScrollView } from 'react-native-gesture-handler'



const Classes  = ()=> {
const devices = [{temperature:12,humidity:0, batteryPercent: 56, lastUpdate:new Date(), deviceName: "Ani Hsassidden"},
{temperature:25,humidity:65, batteryPercent: 10, lastUpdate:new Date(), deviceName: "Anei Hbdidden"},
{temperature:34,humidity:48, batteryPercent: 100, lastUpdate:new Date(), deviceName: "Anedi Hibdfbdden"},
{temperature:22,humidity:51, batteryPercent: 95, lastUpdate:new Date(), deviceName: "aAni Hdbdsfvidden"},
{temperature:15,humidity:0, batteryPercent: 40, lastUpdate:new Date(), deviceName: "Anxxi Hibdsadden"}]
return <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
    {devices.map(({batteryPercent,humidity,temperature,deviceName,lastUpdate},index)=>{
      return (
        <ClassesCard key={index}  batteryPercent={batteryPercent} temperature={temperature} humidity={humidity} lastUpdate={lastUpdate} className={deviceName}   />
      )
    })}

    </ScrollView>
       

</View>}


export default Classes