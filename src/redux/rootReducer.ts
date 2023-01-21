
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthenticationReducer';
//import { deviceReducer } from './DeviceSlice';
//import { customerReducer } from './CustomerSlice';
//import { siteReducer } from './SitesSlice';
//import { userReducer } from './UserReducer';
//import { notificationReducer } from './NotificationSlice';
//import { harvestReducer } from './HarvestSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  //harvest: harvestReducer,
  //user: userReducer,
  //site: siteReducer,
  //devices: deviceReducer,
  //customers: customerReducer,
  //notifications: notificationReducer
});

export default rootReducer;