import axios2 from './axios' 

    let getLimit=()=>{
        return axios2.get('/limits')
    }
    let addLimit=(data)=>{
        console.log(data);
        
    }

export { getLimit,addLimit }