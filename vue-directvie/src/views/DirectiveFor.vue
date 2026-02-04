<!--views/DirectiveFor.vue-->
<script setup>
import { ref } from "vue";
const aray = ["마우스", "키보드", "USB", "마우스패드"];
const itemList = ref(aray);
const friends = ref(["홍길동", "김길동"]);
let newFriend = ref("이재현");

// 함수
const addFriend = () => {
  friends.value.push(newFriend.value);
  newFriend.value = "";
};
</script>

<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="item in itemList">{{ item }}</li>
  </ul>
  <hr />
  <h2>친구목록</h2>
  새로운 친구:
  <!--inpit에 값을 입력 => newFriend 값 변경  -->
  <input type="text" v-model="newFriend" v-on:change="addFriend" />
  <ul>
    <!--name: 배열의 요소 / idx: 인덱스 번호 -->
    <li v-for="(name, idx) in friends">
      {{ `${idx} : ${name}` }}
    </li>
  </ul>
</template>
