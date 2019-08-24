
const nodemailer = require('nodemailer');

module.exports = {
    sendEmail(mail_address, content) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.qq.com',
            port: 465,
            secure: true, 
            auth: {
                user: '1145037541@qq.com',
                pass: 'ytcyzjxxpssxbacj'
            }
        });
        //邮件信息;
        let main_info = {
            from: '"信息管理系统" <1145037541@qq.com>', 
            to: mail_address, 
            subject: '邮箱验证', 
            text: `验证码:${content}`, 
        }
        transporter.sendMail(main_info);
     
    }
}


