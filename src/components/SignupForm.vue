<template>
  <form @submit.prevent="handlerSubmit">
    <input type="text" placeholder="display name" required v-model="displayName">
    <input type="text" placeholder="email" required v-model="email">
    <input type="text" placeholder="password" required v-model="password">
    <button>Sign Up</button>
    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import {ref} from "vue"
import useSignup from "../composables/useSignup";

export default {
  name: "SignupForm",
  setup(){
    const {error, signup} = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handlerSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log("юзер зарегистрирован")
    }

    return {
      displayName,
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
