import ApiService from './api'


const apiService = new ApiService();

export default class VehicleDetailsController {
    constructor() {
    }

    getState = () => {
        console.log('IN service');
        return apiService.getRequest('https://ancient-atoll-80049.herokuapp.com/request/getstates');
    }

    getCities = () => {
        console.log('IN service');
        return apiService.postRequest('https://ancient-atoll-80049.herokuapp.com/request/getCities',stateObj);
    }

}