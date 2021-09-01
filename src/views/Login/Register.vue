<template>
    <div style="text-align: center;">
        <div>註冊</div>
        <div>
            <span style="color: red;">*</span><span style="margin-right: 40px;">帳號</span><input class="username-input" v-model="username" type="text" @input="checkUserName"/>
        </div>
        <div><span v-show="checkUserNameStr" style="font-size: 12px; color: red;">不符合email格式</span></div>
        <div>
            <span style="color: red;">*</span><span style="margin-right: 40px;">密碼</span><input v-model="password" type="password" id="id_password"/>
            <i class="far fa-eye" id="togglePassword1" style="margin-left: -20px; cursor: pointer;"></i>
        </div>
        <div>
            <span style="color: red;">*</span><span style="margin-right: 10px;">確認密碼</span><input v-model="checkPassword" type="password" id="id_check_password"/>
            <i class="far fa-eye" id="togglePassword2" style="margin-left: -20px; cursor: pointer;"></i>
        </div>
        <p><span style="color: deepskyblue; cursor: pointer;" @click="toLogin">返回登入</span></p>
        <button class="register-button" @click="onRegister">註冊</button>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return {
                username: '',
                password: '',
                checkPassword: '',
                checkUserNameStr: false
            }
        },
        methods: {
            onRegister(){
                this.$api.Login.userRegister({
                    username: this.username,
                    password: this.password
                })
            },
            toLogin() {
                this.$router.push('/')
            },
            checkUserName() {
                console.log('change');
                var emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if(!emailRule.test(this.username)){
                    const input = document.getElementsByClassName('username-input')
                    console.log(input[0].style);
                    input[0].style.border = '2px solid red'
                    this.checkUserNameStr = true
                }else{
                    const input = document.getElementsByClassName('username-input')
                    input[0].style.border = ''
                    this.checkUserNameStr = false
                }
            }
        },
        mounted() {
            const togglePassword1 = document.querySelector('#togglePassword1');
            const password = document.querySelector('#id_password');
            const togglePassword2 = document.querySelector('#togglePassword2');
            const checkPassword = document.querySelector('#id_check_password');

            // eslint-disable-next-line no-unused-vars
            togglePassword1.addEventListener('click', function (e) {
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
            });

            // eslint-disable-next-line no-unused-vars
            togglePassword2.addEventListener('click', function (e) {
                const type = checkPassword.getAttribute('type') === 'password' ? 'text' : 'password';
                checkPassword.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
            });
        }
    }
</script>

<style scoped>
.register-button{
    background-color: #007ED2;
    border: none;
    color: white;
    padding: 12px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
}
</style>