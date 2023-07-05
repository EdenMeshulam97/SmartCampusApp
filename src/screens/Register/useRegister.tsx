import React, { useState} from 'react';
import {useReduxDispatch} from '../../redux';
import { IRegister } from '../../types/register';
import { serverRegister } from '../../services/serverApi';
import { useNavigation } from '@react-navigation/native';
const useRegister = () => {
const navigation = useNavigation();
const [user,setUser]= useState<IRegister>();
 
const [loading, setLoading] = useState(false);

  const dispatch = useReduxDispatch();


  //Handle the REgister form inputs.
  const handleInputChange = (state:String,value:string)=>{
   setUser((currentUser:any) => ({...currentUser, [state as string]: value}))
  }

  //Submit the form to the server.
  const submitForm =async ()=>{
     try{
      if(!user) return
      setLoading(true);
      console.log(user);
      const serverRequest = await serverRegister(user);
      console.log(serverRequest);
      if(serverRequest.success === true)
      {
        navigation.goBack();
      }
      else
      {

      }
     }
     catch(e){
      console.error(e);
     }
     finally{
      setLoading(false);

     }

  }


  //Validate The unputs value befire submitting.
  const validateForm = ()=>{
   
  }

  return {
   user,
   loading,
   handleInputChange,
   submitForm,
   validateForm
  };
};

export default useRegister;




