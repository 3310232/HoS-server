const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host:'localhost',
  port:3306,
  database:'happyorsad',
  user:'root',
  password:'123456',
  connectionLimit:5
})

connectionPool.getConnection((err,connection)=>{
    if(err){
        console.log('连接失败',err)
        return
    }

    connection.connect(err=>{
        if(err){
            console.log('数据库交互失败',err)
        }else{
            console.log('数据库交互成功')
        }
    })
})

const connection = connectionPool.promise()


module.exports = connection