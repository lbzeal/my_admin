const mongoose = require('../utils/db');

//在数据库中创建一个集合;
const Users = mongoose.model('usersInfo', {
    username: String,
    password: String,
    email: String
})

module.exports = {
    save({ username, password, email }) {
        //向集合中插入数据;
        const users = new Users({
            username,
            password,
            email
        })
        return users.save();
    },

    findOne(username) {
        return Users.findOne({ username });
    }
}