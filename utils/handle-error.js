const app = require("../app/index")

app.on('error',(error,ctx)=>{
    let code = 0
    let message = ''
    switch(error){
        case 'userName已经存在':
            code = -1002
            message = 'userName已经存在'
            break
        case 'userName不存在':
            code = -1003
            message = 'userName不存在'
            break
        case 'password错误':
            code = -1004
            message = 'password错误'
            break
    }

    ctx.body = {code,message}
})
