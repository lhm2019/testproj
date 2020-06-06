import axios from 'axios'
export function getRequest(config){
	  const instance=axios.create({
		baseURL:'http://106.14.135.196:8080/',
		url:config.url,
		timeout:5000,
		params:config.params
	  })
	  console.log(config)
	  return instance(config)
    }

