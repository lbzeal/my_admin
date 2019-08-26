const mongoose = require('../utils/db');

//在数据库创建一个集合;

const Table = mongoose.model('tabledata',{
    companyLogo : String,
    companyName : String,
    positionName : String , 
    city : String,
    createTime : String,
    salary : String

})

module.exports = {
    save(data){
        let table = new Table(data)
        return table.save();
    },
    find({start , count}){
        return {
            list : Table.find({}).sort({_id: -1}).skip(~~start).limit(~~count),
            total : Table.count()

        }
    },
    findOne(id){
        return  Table.findById(id);
    },
    patch(data){
        return Table.updateOne({_id : data.id},data);
    },
    delete(id){
        return Table.deleteOne({_id : id})
    },
    search(keywords){
        return Table.find({
            $or : [
                {
                    companyName : new RegExp(keywords,'gi')
                },
                {
                    positionName : new RegExp(keywords,'gi')
                }
            ]
        }).sort({_id : -1})
    }

}