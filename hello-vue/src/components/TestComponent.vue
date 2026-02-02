<!---TextComponent.vue-->
<!---Component: HTML + css + Javscript-->
<script setup>
import { ref } from "vue";
let msg = ref("메시지를 입력해주세요");
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
  </div>
</template>
<style></style>
