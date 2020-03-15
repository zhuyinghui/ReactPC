import axios from './axios'

    let getLimit=()=>{
        return axios.get('/limits')
    }
    let addLimit=(data)=>{
        console.log(data);
        
    }

export { getLimit,addLimit }