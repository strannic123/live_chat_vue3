<template>
  <form @submit.prevent="handlerSubmit">
    <input type="text" placeholder="email" required v-model="email">
    <input type="text" placeholder="password" required v-model="password">
    <button>Log in</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import {ref} from "vue"
import useLogin from "../composables/useLogin";

export default {
  name: "LoginForm",
  setup(){
    const email = ref('')
    const password = ref('')

    const {error, signIn} = useLogin()

    const handlerSubmit = async () => {
      await signIn(email.value, password.value)
      if(!error.value){
        console.log('User logged in')
      }
    }

    return {
      email,
      password,
      handlerSubmit,
      error
    }
  }
}
</script>

<style scoped>

</style>
