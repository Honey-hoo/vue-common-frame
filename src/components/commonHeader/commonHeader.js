export default {
    name: "commonHeader",
    methods: {
        Logout() {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push({path: '/login'})
        }
    }
}