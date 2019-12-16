> CLI4 项目

## 使用 vue-cli4 搭建

1. 使用 less 编写 css 代码
2. src/views/是用来存放网页代码
3. src/assets/是用来存放资源,css/js/img/font 等

## src/api 存放的请求文件

> 首先在 index.js 放入需要请求的 URL

```
    R.User.info(data).then(res=>{})
```

## 按需加载

> 添加了按需加载

```
    如果不需要把babel.config.js里的pulgin注释掉就好了
    如果需要就在main.js里去
    相同,如果你需要哪个库按需加载就把ant-design-vue替换成哪个
    import { DatePicker } from 'ant-design-vue';
```

## CND 预加载

> 添加了 CND 预加载

```
    在vue.config.js里 , 分别放入插件名称,css文件和js文件,减少打包体积
    const externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
    }
    css: [],
    js: []
```

## 请求拦截器在 utils/request.js 下
