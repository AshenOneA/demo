<template>
    <div>
        <div class="login" @click="close"></div>
        <div class="form">
            <span @click="close" class="close">x</span>
            <label for="login">用户名：</label><input type="text" name="login" id="login" placeholder="请输入用户名" v-model="name" @keydown="s11"><span v-if="s1">邮箱的格式有误</span><br>
            <label for="password">密码：</label><input type="password" name="password" id="password" placeholder="请输入密码" v-model="password" @keydown="s22"><span v-if="s2">输入的密码大于6位</span><br>
            <p v-if="ss" class="name">输入的用户名或密码错误</p>
            <p v-if="sss" class="password">登录成功</p>
            <a href="#" class="button" @click="login">登录</a>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            name:"",
            password:"",
            ss:false,
            sss:false,
            s1:false,
            s2:false
        }
    },
    methods: {
        s11(){
            let real=/^\w{5,}@[a-z0-9]{2,3}\.[a-z]+$|\,$/;
            if(!real.test(this.name)){
                this.s1=true
            }else{
               this.s1=false
            }
        },
        s22(){
            
            if(this.password.toString().length>5){
                this.s2=true
            }else{
                this.s2=false
            }
            return true;
        },
        close() {

            this.$emit("oclose")
        },
        login(){
            this.$http.get("/api/login").then(
                (res)=>{
                    let name1=this.name.toString()
                    let password1=this.password.toString()
                    if(name1!==res.data[0].name||password1!==res.data[0].password){
                        this.ss=true
                        this.sss=false
                        
                    }else{
                        this.ss=false
                        this.sss=true
                        setTimeout(()=>{
                            this.$emit("oclose",res.data[0].name)
                        },1000)
                        
                    }
                    return true;
                },
                (err)=>{
                    console.log(err)
                }
            )
        }
    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

.login {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0;
    padding: 0;
    z-index: 99;
}


.form {
    background-color: #fff;

    width:700px;
    height: 300px;
    border: 2px solid black;
    position: fixed;
    top: 20%;
    left: 40%;
    z-index: 100;
    padding: 40px 40px;
}

.form label {
    font-size: 16px;
    color: #333;
    display: inline-block;
    width: 80px;
}

.form input {
    border: 1px solid #ccc;
    width: 222px;
    height: 32px;
    line-height: 32px;
    text-indent: 10px;
    margin-bottom: 30px;
    margin-right: 30px;
}

.close {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 16px;
    cursor: pointer;
}

.close:hover {
    color: #4fc08d
}
.form p{
    margin-left: 80px;
    line-height: 50px;
}
.name{
    color:red;
}
.password{
    color:#4fc08d;
}
.form .button {
    display: inline-block;
    font-size: 14px;
    background-color: #4fc08d;
    color: #fff;
    position: absolute;

    left: 120px;
    padding: 10px 20px;
}
</style>

