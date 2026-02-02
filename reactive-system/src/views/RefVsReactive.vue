<!--views/RefVSReactive.vue-->
<script setup>
import { reactive } from "vue";

// Reactive: CRUD가 가능한 반응형 객리를 만드는 함수 중 하나
// Ref와 차이점 : 객체, 배열만 가능 / 재할당 불가

const today = new Date();
let timeStr = today.toLocaleTimeString();
const timeStrReactive = reactive({ time: timeStr });

function changeTime() {
  const newTimeStr = new Date().toLocaleTimeString();
  timeStrReactive.time = newTimeStr;
}
setInterval(changeTime, 1000);
</script>
<template>
  <p>처음시간: {{ timeStr }}</p>
  <p>현재시간(reactive): {{ timeStrReactive.time }}</p>
</template>
