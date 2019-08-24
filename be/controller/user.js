const emailer = require('../utils/email');

module.exports = {
    resolveMa(req,res,next){
        let req_data = req.body;
        let req_arr = Object.keys(req_data);
        let ma_content = '';
        if(req_arr.length == 1){
            ma_content  = '1234'; 
            let email_address = req_data.email;
            emailer.sendEmail(email_address,ma_content);
        }
        else{
            
        }
       
   
    }
}