<script setup>
// Composition API: <script> 에 반드시 set up 추가
// 적절한 함수를 사용
import { ref, reactive, computed, watch, onBeforeMount } from "vue";
// ref: CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
// CRUD: Create, Read, Update, Delete

let msg = "Hello world"; // 데이터가 변경될 필요가 없는 경우
const now = new Date(); // 현재 일시를 가지는 Date 객체
const nowStr = now.toLocaleTimeString(); // 시간만 문자열로 변환

let timeStr = nowStr;
const timeStrRef = ref(nowStr); // 반응형 객체를 변환 (값을 감싸는 형태)

function changeTime() {
  const newTime = new Date(); // 실행시점 일시
  const newTimeStr = newTime.toLocaleTimeString();
  // 현재시간을 문자열로 반환
  // 반응형 객체 (ref)의 값을 변경
  timeStrRef.value = newTimeStr;
}

setInterval(changeTime, 1000); // 1초마다 (1000 밀리세컨초) 실행
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>현재시간: {{ timeStr }}</p>
  <p>현재시간(ref):{{ timeStrRef }}</p>
</template>

<style scoped></style>
