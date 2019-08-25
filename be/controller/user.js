const emailer = require('../utils/email');
const userModel = require('../models/user');
const psdConfim = require('../utils/psdConfim');

module.exports = {
  async  resolveMa(req, res, next) {
        res.set('content-type', 'application/json;charset=utf-8');
        let req_data = req.body;
        let req_arr = Object.keys(req_data);
        if (req_arr.length == 1) {
            ma_content = '1234';
            req.session.ma = ma_content;
            let email_address = req_data.email;
            // emailer.sendEmail(email_address,ma_content);
            console.log(ma_content);
            res.render('succ', {
                data: JSON.stringify({
                    msg: '获取验证码成功'
                })
            })
        }
        else {
            let { username, password, email, ma } = req_data;
            console.log(req_data);
            // console.log(req.session.ma);
            if (ma === req.session.ma) {

                let hash_psd = psdConfim.hash(password);
                let result = await userModel.save({
                    username,
                    password: hash_psd,
                    email
                })

                console.log(result);


                res.render('succ', {
                    data: JSON.stringify({
                        msg: '验证码正确'
                    })
                })


            } else {
                res.render('fail', {
                    data: JSON.stringify({
                        msg: '验证码不正确'
                    })
                })
            }
        }


    }
}