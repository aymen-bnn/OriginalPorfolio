//Get Ip address
const axios = require('axios')

export const SendEmail = async ({fullname,email,emailObject,message}) => {

    try{
        const data = {fullname,email,emailObject,message}
        //let res = await axios.post('http://localhost:5000/send',data)
        console.log('messga sent from api')

    }catch(error){
        alert(error.response.data.message)
    }
}  