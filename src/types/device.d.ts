

export interface ISmartRoomDevice {
    name:string,
    lastTransmit:Date,
    id?:string,
    battaryVolt?:number,
    battaryLevel:number,
    temerature:number,
    humidity:number
}

export interface IThingsBoardGetDevicesResponse {
    data: IThingsBoardGetDevicesResponseData[];
    totalPages: number;
    totalElements: number;
    hasNext: boolean;
  }
  export interface IThingsBoardGetDevicesResponseData { 
    id: {
      entityType: string;
      id: string;
    };
    createdTime: number;
    additionalInfo: {
      gateway: boolean;
      overwriteActivityTime: boolean;
      description: string;
    };
    tenantId: {
      entityType: string;
      id: string;
    };
    customerId: {
      entityType: string;
      id: string;
    };
    name: string;
    type: string;
    label: string;
    deviceProfileId: {
      entityType: string;
      id: string;
    };
    deviceData: {
      configuration: {
        type: string;
      };
      transportConfiguration: {
        type: string;
      };
    };
    firmwareId: null | string; // Assuming these could potentially be strings
    softwareId: null | string; // Adjust types as needed based on your actual data
    externalId: null | string; 
  }

  interface ISensorData {
    data_humidity: ISensorDatum[];
    data_temperature: ISensorDatum[];
    dr: ISensorDatum[];
    fcnt: ISensorDatum[];
    fport: ISensorDatum[];
    rssi: ISensorDatum[];
    snr: ISensorDatum[];
    data_bytes: ISensorDatum[];
    data_decode_data_hex: ISensorDatum[];
    data_battery_voltage: ISensorDatum[];
    data_reed_count: ISensorDatum[];
    data_external_input_count: ISensorDatum[];
    data_activity_count: ISensorDatum[];
  }
  
  interface ISensorDatum {
    ts: number;
    value: string;
  }
  
