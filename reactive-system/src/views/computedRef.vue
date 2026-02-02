<!--views/computedRef.vue-->
<script setup>
import { ref, computed } from "vue";
// computed: ReadOnly만 가능한 반응형 객체를 만드는 함수 => 다른 반응형 객체와 연동

// 원의 면적 = 반지름 x 반지름  x PI
const rediusInit = Math.round(Math.random() * 10);
const radius = ref(rediusInit);
const area = computed(() => {
  return radius.value * radius.value * Math.PI;
});
// 영수증
// 노트가 10,000원 일때 => 소비자 (공급가액 9,000원 + 부가세: 1000원)
const price = ref(0);
const supply = computed(() => {
  return price.value * 0.9;
});
const tax = computed(() => {
  return price.value - supply.value;
});
</script>
<template>
  <h2>
    원의 면적
    <p>반지름이 {{ radius }} 이고</p>
    <p>원의 면적은 {{ area }}</p>
  </h2>
  <h2>영수증</h2>
  <span>제품가격</span>
  <input type="number" v-model="price" />
  <p>공급가액: {{ supply }}</p>
  <p>부가세: {{ tax }}</p>
  <p>소비자가: {{ price }}</p>
</template>
