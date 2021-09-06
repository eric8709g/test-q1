<template>
    <div style="text-align: center;">
        <h1 class="text-blue-400">登入</h1>
        <div>
            <span style="margin-right: 10px;">帳號</span><input v-model="username" type="text"
                                  placeholder='請輸入帳號' style="border: 2px solid black; width: 280px; font-size: 12px;"/>
        </div>
        <div>
            <span style="margin-right: 10px;">密碼</span><input v-model="password" type="password" id="id_password"
                                  placeholder='請輸入密碼' style="border: 2px solid black; width: 280px; font-size: 12px;"/>
            <i class="far fa-eye" id="togglePassword" style="margin-left: -20px; cursor: pointer;"></i>
        </div>
        <p><span style="color: deepskyblue; cursor: pointer;" @click="toRegisterPage">註冊</span></p>
        <button class="login-button" @click="onLogin">登入</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            toRegisterPage(){
                this.$router.push('/register')
            },
            onLogin(){
                this.$api.Login.userLogin({
                    username: this.username,
                    password: this.password
                }).then(res=>{
                    alert(res.data.message)
                    this.$router.push('/home')
                })
            }
        },
        mounted() {
            this.username = this.$store.state.userName
            this.password = this.$store.state.password
            const togglePassword = document.querySelector('#togglePassword');
            const password = document.querySelector('#id_password');

            // eslint-disable-next-line no-unused-vars
            togglePassword.addEventListener('click', function (e) {
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
            });
        }
    }
</script>

<style scoped>
.login-button {
    background-color: #007ED2;
    border: none;
    color: white;
    padding: 12px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
}
</style>