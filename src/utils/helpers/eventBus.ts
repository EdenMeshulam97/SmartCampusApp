import {NativeEventEmitter} from 'react-native';
import DeviceEventEmitter from '../../node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter';

const eventEmitter = new NativeEventEmitter(DeviceEventEmitter);
const eventBus = {
  on(event: any, callback: any) {
    eventEmitter.addListener(event, e => callback(e));
  },
  dispatch(event: any, data?: any) {
    eventEmitter.emit(event, {detail: data});
  },
  remove(event: any) {
    eventEmitter.removeAllListeners(event);
  },
};
export default eventBus;
