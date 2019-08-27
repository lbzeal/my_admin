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
        console.log(req.filename);
        console.log(req.body);

        let result = await tableModel.save({
            ...req.body,
            companyLogo: req.filename,
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
                data: JSON.stringify(result)
            })
        }

    },
    async patch(req, res, next) {
        console.log(req.body)
        console.log(req.filename)
        console.log(req.body.companyLogo)
        let data = {
            ...req.body,
            createTime: moment().format('YYYY-MM-DD hh:mm:ss')
        }

        if(req.filename) {

            data['companyLogo'] = req.filename
        }

        let result = await tableModel.patch(data)
        // console.log(result)
        res.render('succ', {
            data: JSON.stringify({
                msg: '数据修改成功',
            })
        })
    },
    async delete(req, res, next) {
        let result = await tableModel.delete(req.body.id);
        // console.log(result)
        res.render('succ', {
            data: JSON.stringify({
                msg: '删除数据成功',
            })
        })
    },
    async search(req, res, next) {
        res.set('content-type', 'application/json;charset=utf-8')
        let { keywords } = req.body
        let list = await tableModel.search(keywords);
        res.render('succ', {
            data: JSON.stringify({
                list,
                total: -1
            })
        })
    }
}