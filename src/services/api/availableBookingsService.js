import ApiService from './api'


const apiService = new ApiService();

export default class AvailableBookingsServiceController {
    constructor() {
    }

    getState = () => {
        console.log('IN service');
        return apiService.getRequest('https://ancient-atoll-80049.herokuapp.com/request/getstates',{},'');
    }

    getCities = (stateObj) => {
        console.log('IN service');
        return apiService.postRequest('https://ancient-atoll-80049.herokuapp.com/request/getCities',stateObj,'');
    }

    getAllVehicle = (token,reqPhoneNumberObj) => {
        return apiService.postRequest('https://ancient-atoll-80049.herokuapp.com/vehicle/getVehicle',reqPhoneNumberObj,token);
    }

    AddNewVehicle = (vehicledetailsObject,token) => {
        return apiService.postRequest('https://ancient-atoll-80049.herokuapp.com/vehicle',vehicledetailsObject,token);
    }

    updateVehicle = (vehicledetailsObject) => {
        return apiService.postRequest('https://ancient-atoll-80049.herokuapp.com/vehicle',vehicledetailsObject,'');
    }

    getAvailableBookingsFromAgent = (requestStateCityObj,token) => {
        return apiService.postRequest('https://ancient-atoll-80049.herokuapp.com//request/getDriverRequest',requestStateCityObj,token)
    }

}