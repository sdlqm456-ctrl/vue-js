<!--views/RefVSReactive.vue-->
<script setup>
// 객체를 반응형 데이터로 만들어주는 역활
import { reactive } from "vue";

// 반응형 객체: 값이 변경되었을대 변화를 vue를 감지하고 화면에 자동으로 다시 그려주는 객체
// Reactive: CRUD가 가능한 반응형 객리를 만드는 함수 중 하나
// Ref와 차이점 : 객체, 배열만 가능 / 재할당 불가

const today = new Date(); // today에는 현재날짜 + 시간 정보가 담김
let timeStr = today.toLocaleTimeString(); // 현재 시간 자르기
const timeStrReactive = reactive({ time: timeStr }); // time: 속성이름 / timeStr: 문자열 값 (현재시간)

function changeTime() {
  const newTimeStr = new Date().toLocaleTimeString();
  timeStrReactive.time = newTimeStr;
}
setInterval(changeTime, 1000); // 1초마다 changeTime 함수를 실행 => 현재시간 계속 갱신
</script>
<template>
  <p>처음시간: {{ timeStr }}</p>
  <p>현재시간(reactive): {{ timeStrReactive.time }}</p>
</template>
