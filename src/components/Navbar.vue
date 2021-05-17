<template>
  <nav>
    <div>
      <p>Какой то почтовый ящик</p>
      <p class="email">Какая то почта</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
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
