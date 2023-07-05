import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRegister } from "../types/register";

const serverUrl = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-utuik/endpoint';



  const serverRequest = async (
    url: string,
    command: string,
    data: any,
    token?: boolean | null,
  ) => {
    const headers: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
    };
    if (token) {
      const token = await AsyncStorage.getItem('@token');
      headers.authorization = `Token ${token}`;
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
      const response = await fetch(serverUrl + url, params);
      const res = await response.json();
  
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
      token : "1q2w3e4r5t",
      success: true,
      firstName: "eden",
      lastName: "meshualm",
      error : ""
      
      
    };
    return response;
  };



export const serverRegister = async (user:IRegister) =>{
  const registerRequest = serverRequest("/register","POST",user,false)
  return registerRequest;
}