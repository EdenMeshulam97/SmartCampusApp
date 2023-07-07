import React, { useState} from 'react';
import {useReduxDispatch} from '../../redux';
import { GetSmartRoomDevice, GetSmartRoomDevices } from '../../services/serverApi';
import { List } from 'native-base';
import { ISmartRoomDevice } from '../../types/device';



const useClasses = () => {
const deviceList: ISmartRoomDevice[] = [];
const [loading, setLoading] = useState(false);
const dispatch = useReduxDispatch();

const getDevices =async ()=>{
    try{
     setLoading(true);
     console.log("pulling class devices");
     const serverRequest = await GetSmartRoomDevices();
     console.log(serverRequest);
     if(serverRequest != null)
     {

       
        
        serverRequest.data.forEach(async element => {
             const deviceData = await GetSmartRoomDevice(element.id.id);
             const device: ISmartRoomDevice = {
                name : element.name,
                id:element.id.id,
                lastTransmit : new Date(deviceData.data_temperature[0].ts),
                battaryVolt:Number(deviceData.data_battery_voltage[0].value),
                battaryLevel:80,
                temerature:Number(deviceData.data_temperature[0].value),
                humidity:Number(deviceData.data_humidity[0].value)

             };
            deviceList.push(device);
        });
     }
    }
    catch(e){
     console.error(e);
    }
    finally{
     setLoading(false);
    return deviceList;
    }

 }
 return {
    getDevices
 };
};

export default useClasses;