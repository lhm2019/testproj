import axios from 'axios'

export function postRequest(config,data) {
    const instance=axios.create({
        baseURL:'http://106.14.135.196:8080/',
        timeout:5000,
        method:'POST',
        data:{
            data
        }
    })
    return instance
} 