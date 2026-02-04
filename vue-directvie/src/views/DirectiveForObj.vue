<script setup>
import { ref } from "vue";

// Data: 객체 배열일 경우
const friends = ref([
  { id: "01", name: "홍길동", age: 22 },
  { id: "02", name: "김현준", age: 25 },
]);
</script>
<template>
  <h2>친구목록</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>나이</th>
      </tr>
    </thead>
    <tbody>
      <!--v-for = "임시변수 in 배열": 리스트 랜더링, 주로 배열을 기준 -->
      <tr v-for="info in friends" v-bind:key="info.id">
        <!--info: { id: "01", name: "홍길동", age: 22 } 배열의 첫번째 부분을 가져옴-->
        <td>{{ info.id }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
