const { randomStr, randomType } = require('funny-time-lib');

module.exports = {
    createMa() {
        const { randomStr, randomType } = require('funny-time-lib')
        // 可以任意组合
        // interface randomStrParams {
        //     type?: randomType,          // 随机字符串的类型,包括数字,小写字母,大写字母 ,默认为所有类型
        //     length?: number,            // 生成随机字符串的长度 默认为10
        //     otherSource?: string,       // 其他的的数据源,比如 "~@" 默认为''
        //     overriderSource?: boolean   //是否使用其他数据源覆盖默认的数据源 默认为false
        // }
       return   randomStr({type:randomType.NUMBER| randomType.ALPHA,length:2});
    }

}