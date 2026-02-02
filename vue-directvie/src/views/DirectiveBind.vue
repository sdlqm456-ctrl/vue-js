<!--veiw/DirectiveBind.vue-->
<script setup>
// Directive(디렉티브): HTML Tag를 제어하는 명령어, 데이터 바인딩
// v-bimd: HTML Tag의 속성에 데이터를 바인트 하는 디렉티브
// 단방향 바인딩만 가능 (변수 => HTML)
import { ref, reactive, computed } from "vue";
const info = ref("<strong>http://vuejs.org</strong>");
const url = ref("http://vuejs.org");
const isDisabled = ref(true);
const imgAttributes = reactive({
  // 필드명 => 속성이름
  // 객체가 가진 필드 명이 그 객체의 속성이 됨
  src: "./src/assets/logo.svg",
  alt: "vue 기본로고",
  width: "150px",
});
</script>
<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="info"></p>
  <!--v-bind: innnerhtml-->
  <p v-text="info"></p>
  <p>vusjs 공식사이트: {{ info }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="http://vuejs.org">Vue.js 사이트</a></p>
  <p>
    <a v-bind:href="url">Vue.js 사이트</a>
  </p>
  <p>
    <a v-bind:href="url + '/guide/introdution.html'"> Vue.js 가이드 페이지 </a>
  </p>
  <p>
    <!--disabled: 화면에 보이지만 비활성화 상태-->
    <button v-bind:disabled="isDisabled">동의합니다</button>
  </p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
</template>
