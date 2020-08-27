import axios from 'axios'

export default{
    validator(param){
        return new Promise((reject,resolve)=>{
            axios.post('http:localhost:3000/api/test',{Respons: param})
                .then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                    else{
                        reject(res.data.meesage)
                    }
                })
                .catch(err=>{
                    reject()
                })
        })
    }
}