// 当我们使用mockjs的方法进行数据模拟时，需要创建这个文件
import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id": 12,
    "username": "admin",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})