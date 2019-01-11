// import引入页面或组件时 路径 /XX/XX/XX.vue 要有vue后缀 如果文件夹下并不是只有一个vue文件时就会报错（默认import引入了文件下的同名js文件）
// meta.requiresAuth 页面是否需要授权验证
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Index from '@/views/index/index.vue'
import Home from '@/views/home/home.vue'
import Setting from '@/views/setting/setting.vue'
import ListOne from '@/views/listOne/listOne.vue'
import ListTwo from '@/views/listTwo/listTwo.vue'

Vue.use(Router)

const vueRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: '/listOne',
                    name: 'listOne',
                    component: ListOne,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: '/listTwo',
                    name: 'listTwo',
                    component: ListTwo,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: Setting,
                    meta: {
                        requiresAuth: true
                    }
                }
            ],
            redirect: '/home' // 默认index重定向到home页面
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false
            }
        }
    ]
})

vueRouter.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 从本地取token 如果存在则可以登录 如果不存在 则跳回到登录页
        if (localStorage.getItem('AUT_TOKEN')) {
            next()
        } else {
           next('/login')
        }
    } else {
        next();
    }
})
export default vueRouter;
