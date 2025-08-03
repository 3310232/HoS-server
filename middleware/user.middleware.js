const UserService = require("../service/user.service");
const mad5Password = require("../utils/md5-password")

const verifyUser = async (ctx, next) => {

    const { userName, password } = ctx.request.body

    const userNames = await UserService.queryByName(userName)

    if (userNames.length) {
        return ctx.app.emit('error','userName已经存在',ctx)
        
    }
    await next()

}

const verifyLogin = async (ctx, next) => {

    const { userName, password } = ctx.request.body

    const userNames = await UserService.queryByName(userName)

    if (!userNames.length) {
        return ctx.app.emit('error','userName不存在',ctx)
    }else if(userNames[0].password!==password){
        return ctx.app.emit('error','password错误',ctx)
    }
    
    await next()

}

const verifyIsLogin = async (ctx, next) => {
    console.log('aaaa')
    console.log('aaaa',ctx.request.body)

    const {token} = ctx.request.body

    

    const userNames = await UserService.queryByName(userName)

    if (!userNames.length) {
        return ctx.app.emit('error','userName不存在',ctx)
    }else if(userNames[0].password!==password){
        return ctx.app.emit('error','password错误',ctx)
    }
    
    await next()

}


const handlePassword = async(ctx,next)=>{
    const {password} = ctx.request.body

    ctx.request.body.password = mad5Password(password)

    await next()
}


module.exports = {verifyUser,handlePassword,verifyLogin,verifyIsLogin}