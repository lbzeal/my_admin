const tableModel = require('../models/table')
const moment = require('moment')
module.exports = {
    async list(req, res, next) {
        let { list, total } = tableModel.find(req.query);
        if (await list) {
            res.render('succ', {
                data: JSON.stringify({
                    list: await list,
                    total: await total
                })
            })
        }
    },
    async save(req, res, next) {
        let result = await tableModel.save({
            ...req.body,
            createTime: moment().format('YYYY-MM-DD hh:mm:ss')
        })
        if (result) {
            res.render('succ', {
                data: JSON.stringify({
                    msg: '数据添加成功'
                })
            })
        } else {
            res.render('fail', {
                data: JSON.stringify({
                    msg: '数据添加失败'
                })
            })
        }
    },
    async findone(req, res, next) {
        let result = await tableModel.findOne(req.body.id);
        if (result) {
            res.render('succ', {
                data : JSON.stringify(result)
            })
        }

    },
    async put (req,res,next){
        let result = await tableModel.put({
            ...req.body,
            createTime : moment().format('YYYY-MM-DD hh:mm:ss')
        })

        res.render('succ',{
            data : JSON.stringify({
                msg :'数据修改成功',
            })
        })
    },
    async delete(req,res,next){
        console.log(req.body.id)
        let result = await tableModel.delete(req.body.id);
        res.render('succ',{
            data : JSON.stringify({
                msg : '删除数据成功',
            })
        })
    }
}