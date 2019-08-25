const bcrypt = require('bcrypt');

module.exports = {
    hash(password) {
        let salt = bcrypt.genSaltSync(10);
        let hash_psd = bcrypt.hashSync(password, salt);
        return hash_psd;
    },
    compare(password , hash_psd){
        return bcrypt.compareSync(password,hash_psd);
    }
}