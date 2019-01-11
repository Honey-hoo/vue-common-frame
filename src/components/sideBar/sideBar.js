export default {
    name: "sideBar",
    data() {
        return {
            menuList: [
                {
                    title: '首页',
                    icon: 'home-icon',
                    index: 'home',
                    route: '/home',
                    subs: []
                },
                {
                    title: '列表',
                    icon: 'list-icon',
                    index: 'listOne',
                    route: '/listOne',
                    subs: [
                        {
                            index: 'listOne',
                            title: '列表一',
                            route: '/listOne',
                        },
                        {
                            index: 'listTwo',
                            title: '列表二',
                            route: '/listTwo',
                        }
                    ]
                },
                {
                    title: '设置',
                    icon: 'setting-icon',
                    index: 'setting',
                    route: '/setting',
                    subs: []
                }
            ]
        }
    },
    computed: {
        onRoutes() {
            console.log(this.$route.path)
            return this.$route.path;
        }
    }
}