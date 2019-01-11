// 在需要http请求的页面引入api
import api from '../../api'

export default {
    name: "login",
    data() {
        return {
            formData: {
                account: '',
                password: ''
            },
            formRule: {
                account: [{required: true, message: '请输入账号', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            },
            script: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.script = document.createElement('script');
            this.script.setAttribute('src', './static/js/test-clear.js');
            document.head.appendChild(this.script)
        })
    },
    beforeDestroy() {
        document.head.removeChild(this.script);
        var canvas = document.getElementById('c_n2');
        document.body.removeChild(canvas);
    },
    methods: {
        Login() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    // api调用
                    // let params = this.formData;
                    // api.Login(params).then((res) => {
                    //     if(res) {
                    //         console.log('请求成功', res)
                    //         window.localStorage.setItem('AUT_TOKEN', 'token string');
                    //         this.$router.push({path: '/'})
                    //     }
                    // })

                    // 登录成功 将token存在本地 跳转到首页
                    window.localStorage.setItem('AUT_TOKEN', 'token string');
                    this.$router.push({path: '/'})
                } else {
                    return false;
                }
            });
        },
    }
}