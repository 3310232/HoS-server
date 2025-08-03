const crypto = require('crypto')

const mad5Password = (password)=>{
    const md5 = crypto.createHash('md5')

    const md5pwd = md5.update(password).digest('hex')

    return md5pwd
}

module.exports = mad5Password