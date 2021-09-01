<template>
    <div style="text-align: center;">
        <div>登入</div>
        <div>
            <span>帳號</span><input v-model="username" type="text" />
        </div>
        <div>
            <span>密碼</span><input v-model="password" type="password" id="id_password"/>
            <i class="far fa-eye" id="togglePassword" style="margin-left: -20px; cursor: pointer;"></i>
        </div>
        <p><span style="color: deepskyblue; cursor: pointer;" @click="toRegisterPage">註冊</span></p>
        <button class="login-button">登入</button>
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
            }
        },
        mounted() {
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