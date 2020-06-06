import axios from 'axios'
import qs from 'qs'

export function postRequest(config) {
    const instance=axios.create({
        baseURL:'http://106.14.135.196:8080/',
        url:config.url,
        timeout:5000,
        method:'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded'},
        data:config.data
        
    })
    return instance(config)
} 