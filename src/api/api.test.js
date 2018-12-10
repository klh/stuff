import {getWeatherForCity} from "./endpoints";

// A simple example test
describe('#getWeatherForCity', () => {
    it('should load weather data', () => {
        return getWeatherForCity('copenhagen')
            .then(response => {
                expect(response.ok).toEqual(true);
                expect(response.data.main).toBeDefined();
            })
    })
});
