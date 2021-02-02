var client = require('scp2')
client.scp('./dist/', {
    "host": "121.196.189.165",
    "username": "root",
    "password": "xrth2020@!",
    "path": "/usr/local/nginx/html/crm"
},function(err){
  if(!err){
      console.log("npm run build:prod: 上传完毕,远端服务路径: /usr/local/nginx/html/crm")
  }else{
      console.log("err",err)
  }
})