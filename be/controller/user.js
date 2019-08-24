const emailer = require('../utils/email');

module.exports = {
    sendMa(req,res,next){
        let ma_content = '1234' 
        let email_address = req.body.email;
        emailer.sendEmail(email_address,ma_content);
   
    }
}