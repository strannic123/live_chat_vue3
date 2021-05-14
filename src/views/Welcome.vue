<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="!showLogin">
      <h2>Sign Up</h2>
      <SignupForm/>
      <p>Alredy register ? <span @click="showLogin=!showLogin">Login</span> instead</p>
      <p></p>
    </div>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>No accounts ? <span @click="showLogin=!showLogin">Sign Up</span> instead</p>
    </div >

  </div>

</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import {ref} from "vue";

export default {
  name: "Welcome",
  components: {
    SignupForm,
    LoginForm
  },
  setup(){
    const showLogin = ref(false)
    return {
      showLogin
    }
  },
}
</script>

<style >
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;

}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
.welcome span{
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}


</style>
