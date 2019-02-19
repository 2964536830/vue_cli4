# caimiao

> 财喵项目

## 使用vue-cli3搭建

1. 使用less编写css代码
2. src/views/是用来存放网页代码
3. class目录是存放 -课程- 模块网页
4. user目录是存放 -我的- 模块网页
5. src/assets/是用来存放资源,css/js/img/font等

## src/api存放的请求文件

> 按照第一个样式进行写
``` //引入 import api from '@/api/user'
    api.XXX()
    .then((res)=>{
        xxx
    })
```
## 请求拦截器在utils/request.js下
> 可做相应配置
vue-cli3官网 [Configuration Reference](https://cli.vuejs.org/config/).