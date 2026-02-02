<!---TextComponent.vue-->
<!---Component: HTML + css + Javscript-->
<!--<script setup>: 화면에서 사용할 데이터와 기능을 미리 선언해두는 영역-->
<script setup>
import { ref } from "vue";
let msg = ref("메시지를 입력해주세요");
</script>
<!--<template>: 위에서 선언된 내용을 사용해 화면 구성--->
<!---v-modle: 입력창에 적은 내용 + 선언값을 연결-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
  </div>
</template>
<style></style>
