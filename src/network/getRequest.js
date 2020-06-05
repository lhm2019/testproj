import axios from 'axios'
export function getRequest(config){
	  const instance=axios.create({
		baseURL:'http://106.14.135.196:8080/',
		timeout:5000
	  })
	  return instance(config)
    }

