<template>
  <form @submit.prevent="handlerSubmit">
    <input type="text" placeholder="display name" required v-model="displayName">
    <input type="text" placeholder="email" required v-model="email">
    <input type="text" placeholder="password" required v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import {ref} from "vue"

export default {
  name: "SignupForm",
  setup(){
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handlerSubmit = () => {
      console.log(displayName, email, password)
    }

    return {
      displayName,
      email,
      password,
      handlerSubmit
    }
  }
}
</script>

<style scoped>

</style>
