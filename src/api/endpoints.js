import {api, appIDKey} from './api';

export const getWeatherForCity = (city) => {
    const options = {
        headers: {
            // potential headers here, such ass appId (unfortunately this API doesnøt support header based id/auth
        }
    };
    return api.get(`/weather?appid=${appIDKey}&q=${city}&units=metric`, null, options)
};
