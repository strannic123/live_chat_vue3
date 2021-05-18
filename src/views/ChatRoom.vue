<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import NewChatForm from "../components/NewChatForm";
import getUser from "../composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";


export default {
  name: "ChatRoom",
  components: {
    Navbar,
  NewChatForm,
  ChatWindow
  },
  setup(){
    const {user} = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value){
        router.push({name: 'Welcome'})
      }
    })
    return {

    }
  }

}
</script>

<style scoped>

</style>
