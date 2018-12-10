import {create} from 'apisauce';

export const appIDKey = '166d00e26d3ff2c6149e89feccc5c59a';
// define the api
export const api = create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  timeout: 30000,
  headers: {Accept: 'application/json'}
});

/*

    //Uncomment is you want to debug it
    const respMonitor = (response) => console.log('Api returned ', response);
    api.addMonitor(respMonitor);
    const reqMonitor = (request) => console.log('you sent ', request);
    api.addMonitor(reqMonitor);
*/
