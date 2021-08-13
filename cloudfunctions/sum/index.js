// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
 var a=1
 var b=2
 var sum=a+b
 var result={}
 result.sum=sum
 return result
}