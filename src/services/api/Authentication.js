import ApiService from './api'


const apiService = new ApiService();

export default class AuthenticationController {
    constructor() {
    }

    registerUser(userData) {
        console.log('entered');
        fetch('https://gentle-oasis-28246.herokuapp.com/user/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then((response) => {
            console.log(response.json().then(data=>data));
            return response.json();
        }).catch(error=>{
            console.log(error);
        })

    }

    loginUser(userData) {
        console.log('entered');
        fetch('https://gentle-oasis-28246.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then(function (response) {
            console.log(response);
            return response.json();

        })
            .catch(function (error) {
                console.log(response);
                alert('There is some error on Page, Please try again..');
                return;
            });

    }

    
}