> CLI3 项目

## 使用 vue-cli3 搭建

1. 使用 less 编写 css 代码
2. src/views/是用来存放网页代码
3. src/assets/是用来存放资源,css/js/img/font 等

## src/api 存放的请求文件

> 首先在 index.js 放入需要请求的 URL ,然后在 user.js 里引入
> 按照第一个样式进行写

```//引入 import api from '@/api/user'
    api.XXX()
    .then((res)=>{
        xxx
    })
```

## 按需加载

> 添加了按需加载

```
    如果不需要把babel.config.js里的pulgin注释掉就好了
    如果需要就在main.js里去
    相同,如果你需要哪个库按需加载就把ant-design-vue替换成哪个
    import { DatePicker } from 'ant-design-vue';
```
## CND预加载

> 添加了CND预加载

```
    在vue.config.js里 , 分别放入插件名称,css文件和js文件,减少打包体积
    const externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        iview: 'iview'
        // 'mint-ui': 'MINT',
        // 'element-ui': 'ELE'
        //   'js-cookie': 'Cookies',
        //   'nprogress': 'NProgress'
    }
    css: [
      'http://unpkg.com/iview/dist/styles/iview.css'
      // 'https://unpkg.com/mint-ui/lib/style.css',
      // 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'http://unpkg.com/iview/dist/iview.min.js'
      // 'https://unpkg.com/mint-ui/lib/index.js',
      // 'https://unpkg.com/element-ui/lib/index.js'
    ]
```

## 请求拦截器在 utils/request.js 下

> 可做相应配置
> vue-cli3 官网 [Configuration Reference](https://cli.vuejs.org/config/).
