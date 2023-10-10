<template>
  <div class="main">
    <header class="header">
      <slot name="navbar"></slot>
    </header>

    <main class="body">
      <slot></slot>
    </main>
    
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main{
  height: 95vh;
  padding: 15px;
  background-color: bisque;
}
.header{
  height: 15vh;
}
.body{
  height: 75vh;
}
.footer{
  height: 10vh;
}
</style>