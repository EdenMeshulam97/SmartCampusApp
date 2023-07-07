import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRegister } from "../types/register";
import { ISensorData, IThingsBoardGetDevicesResponse } from "../types/device";
import { delay } from "@reduxjs/toolkit/dist/utils";

const mongoServerUrl = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-utuik/endpoint';
const thingsBoardServerUrl = 'https://app.hittest.smarty.camp/api';
const customerId = "6a655e90-020e-11ee-a00e-098052e37df7"


  const serverRequest = async (
    url: string,
    command: string,
    data: any,
    token?: boolean | null,
    isMongo?: boolean | true
  ) => {
    const headers: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
    };
    if (token) {
      const token = await AsyncStorage.getItem('@token');
      headers.authorization = `Bearer ${token}`;
    }
    const params: any = {
      method: command,
      mode: 'cors',
      cache: 'no-cache',
      headers: headers,
    };
    if (data) {
      params.body = JSON.stringify(data);
    }
    try {
      const response = await fetch((isMongo ? mongoServerUrl : thingsBoardServerUrl) + url, params);
      const res = await response.json();
      console.log("respone : "+response);
  await delay(10000)
      if (response.status === 500) {
        throw res;
      }
      
      return res;
    } catch (e) {
      throw e;
    }
  };
  
  export const serverLogin = async (email: string, password: string) => {
    const response = {
      email: email,
      password : password,
      token : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFZGVubWVzaHVsYW05N0BnbWFpbC5jb20iLCJ1c2VySWQiOiI1OTRlMmI1MC1iNmJlLTExZWQtYWE1NS00YmM1N2Y4NWI2ZmYiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6IjQwYjdkNmMzLTc1NDMtNGQ0Mi05YWNjLWIyMTk0ZTBmYzJmZiIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjg4NzA0MzM5LCJleHAiOjE2ODg3MTMzMzksImZpcnN0TmFtZSI6IkVkZW4iLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiYzhmNjJlZjAtMTAxOC0xMWVkLThhNjItNzU1MTM5Yjc2MTkxIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCJ9.Rc00dpvoUrSdnNknP40FiWGOPVYJ768WEZALM9sZYDcA_rF7lIVJvIHmsdSzpcW_F9AMS8nACUYTVTlxDBjkLQ",
      success: true,
      firstName: "eden",
      lastName: "meshualm",
      error : ""  ,    
    };
    return response;
  };



export const serverRegister = async (user:IRegister) =>{
  const registerRequest = serverRequest("/register","POST",user,false)
  return registerRequest;
  }
  export const GetSmartRoomDevices = async ()=>{
    const response = JSON.stringify(serverRequest(`/customer/${customerId}/devices?pageSize=100&page=0&type=SmartRoom&sortProperty=name&sortOrder=ASC`,"GET",null,true, true))
    console.log("GetSmartRoomDevices : "+response)
    const GetSmartRoomDevicesrRequest: IThingsBoardGetDevicesResponse = JSON.parse(response);
    return GetSmartRoomDevicesrRequest;
    }
    export const GetSmartRoomDevice = async (deviceID:String) => {
      const response = JSON.stringify(serverRequest(`/plugins/telemetry/DEVICE/${deviceID}/values/timeseries`,"GET",null,true, true))
      console.log("GetSmartRoomDevice : "+response)

      const GetSmartRoomDevicesrRequest : ISensorData =  JSON.parse(response);
      return GetSmartRoomDevicesrRequest;
      }
