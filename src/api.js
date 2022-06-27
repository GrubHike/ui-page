import axios from 'axios';


// Creating Instance of Axios API
const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_IP}:3000/`,
    timeout: 1000,
    
});


// Add a request interceptor
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config.url.includes("guest")){
      Object.assign(config,{"baseURL":`http://${process.env.REACT_APP_IP}:3000/`})
    }
    if(config.url.includes("host")||config.url.includes("kitchen")||config.url.includes("menueCard")){
      Object.assign(config,{"baseURL":`http://${process.env.REACT_APP_IP}:8000/`})
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});



export default api;

/*

dinorae7@delaysrnxf.com
testaccount123

*/