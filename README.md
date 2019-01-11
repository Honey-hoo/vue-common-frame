# vue-common-frame
***
> 这是一个基础的vue-cli项目，包含vuex、less-loader、axios,并且引用了elementUI框架。

> axios方法全局的封装，使用方便。

> 下载项目，按照以下步骤安装依赖，启动服务。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 注意事项

1. 在`config/index`中修改`proxyTable`的`target`为你本地开发连接的api域名；

2. 在`config/dev.env.js`中添加`API_HOST`:

    ``` bash
    module.exports = merge(prodEnv, {
      NODE_ENV: '"development"',
      API_HOST: '"/api"' // 开发环境的api域名
    })
    
3. 在`config/prod.env.js`中添加`API_HOST`:
    ``` bash
    module.exports = merge(prodEnv, {
      NODE_ENV: '"development"',
      API_HOST: '"http://xxx.xxx.xxx.xxx:8080"' // 生产环境的api域名
    })

4. `src/api`为axios请求方法的封装，具体的参数判断，结合自身项目情况修改；

5. 页面放在`src/views`目录下，组件放在`src/components`目录下；

6. 外部`js/css/img`资源放置在`static`对应的文件目录下；

7. 登录页增加了canvas动效背景，[canvas动效github地址](https://github.com/jc1144096387/canvas_nest "悬停显示")

***

## 结束 :blush:

如果你觉得这个项目对你有用，请给我小心心:star::star:哦
