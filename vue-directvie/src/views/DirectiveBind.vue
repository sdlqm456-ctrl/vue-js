<!--veiw/DirectiveBind.vue-->
<script setup>
// Directive(디렉티브): HTML Tag를 제어하는 명령어, 데이터 바인딩
// v-bimd: HTML Tag의 속성에 데이터를 바인트 하는 디렉티브
// 단방향 바인딩만 가능 (변수 => HTML)
import { ref, reactive, computed } from "vue";
const info = ref("<strong>http://vuejs.org</strong>");
const url = ref("http://vuejs.org");
// isDisabled: 요소의 비활성화 상태를 제어하는 반응형 변수
// true: 버튼 비활성화 false: 버튼 활성화
const isDisabled = ref(true);
const imgAttributes = reactive({
  // 필드명 => 속성이름
  // 객체가 가진 필드 명이 그 객체의 속성이 됨
  src: "./src/assets/logo.svg",
  alt: "vue 기본로고",
  width: "150px",
});
// style 속성: css 기반 적용하는 항목, 값은 모두 정해져 있음
// 단일 반응형 값
const txtcolor = ref("pink");
const backColor = ref("green");
const styleAttributes = reactive({
  color: "pink",
  backgroundColor: "green", // background-color
});
// class 속성
const classInfo = ref("txtColorRed txtSize24"); // 여러 개의 css 클래스를 문자열로 묶어서 적용하는 반응형 변수
// 특정 class의 적용 여부를 판단
const isTxtColorRed = ref(true);
const isBgColorBlue = ref(true);
const classStyles = reactive({
  txtColorRed: true,
  bgColorBlue: false,
  txtSize24: true,
});
const msg = ref("Hello, World");
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
    <a
      v-bind:href="url"
      v-bind:style="{ color: txtcolor, backgroundColor: backColor }"
      >Vue.js 사이트</a
    >
  </p>
  <p>
    <a
      v-bind:href="url + '/guide/introdution.html'"
      v-bind:style="styleAttributes"
    >
      Vue.js 가이드 페이지
    </a>
  </p>
  <p>
    <!--isDisabled: is(상태를 나타냄) / disabled: 비활성화 => 지금 비활성화 상태인지? true 또는 false  -->
    <button v-bind:disabled="isDisabled">동의합니다</button>
  </p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
  <hr />
  <h3>Class 속성</h3>
  <p id="cp" v-bind:class="classInfo">{{ msg }}</p>
  <p v-bind:class="{ txtColorRed: isTxtColorRed, bgColorBlue: isBgColorBlue }">
    {{ msg }}
  </p>
  <p v-bind:class="classStyles">{{ msg }}</p>
</template>

<style scoped>
.txtColorRed {
  color: red;
}
.txt-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.txtSize24 {
  font-size: 24px;
}
</style>
