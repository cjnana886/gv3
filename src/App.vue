<script setup lang="ts"></script>

<template lang="pug">
header
  img(
    alt="Vue logo"
    class="logo"
    src="@/assets/logo.svg"
    width="125"
    height="125"
  )

  //- 標題
  .title Welcome to vue3 world!!

//- Route
router-view
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: #01b468;
  }
}
</style>
