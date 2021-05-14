<template>
  <form @submit.prevent="handlerSubmit">
    <input type="text" placeholder="email" required v-model="email">
    <input type="text" placeholder="password" required v-model="password">
    <button>Log in</button>
  </form>
</template>

<script>
import {ref} from "vue"

export default {
  name: "LoginForm",
  setup(){
    const email = ref('')
    const password = ref('')

    const handlerSubmit = () => {
      console.log(email, password)
    }

    return {
      email,
      password,
      handlerSubmit
    }
  }
}
</script>

<style scoped>

</style>
