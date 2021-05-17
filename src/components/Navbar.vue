<template>
  <nav v-if="user">
    <div >
      <p>Пользователь вошел под ником {{ user.displayName }}</p>
      <p class="email">Ваша почта {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  name: "Navbar",
  setup(){
    const {logout, error} = useLogout()
    const { user} = getUser()

    const handleClick = async () => {
      await logout()
      if(!error.value){
        console.log('user Logout')
      }
    }

    console.log(user)

    return {
      error,
      handleClick,
      user
    }
  }

}
</script>

<style >
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}

</style>
