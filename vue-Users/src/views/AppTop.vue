<!--views/AppTop.vue-->
<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <h1>Top</h1>
  <p>Top</p>
  <!--RouterLink: 라우터 설정을 참고해서 그 경로로 화면을 변경-->
  <!--RouterLink to = 에서 to는 라우터가 어떤 화면으로 이동할지 알려주는 정보 -->
  <p><RouterLink to="/member/list">회원관리는 여기서</RouterLink></p>
</template>
