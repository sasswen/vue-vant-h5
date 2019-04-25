import axios from 'axios';

let http = axios.create({
    baseURL: procsss.env.VUE_APP_URL,
    timeout: 50000,
    headers: {
        headers: {'Content-Type': 'application/json'},
    }
})

http.interceptors.response.use(response => {
    let {data} = response
    return data
  }, (error) => {
    console.log(error);
});

export default http;