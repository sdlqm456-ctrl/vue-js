<!--views\member\MemberAdd.vue-->
<script setup>
// 회원정보
// 서버에서 사용하는 이름과 일치해야 정보를 읽어옴
import { ref } from "vue";
const member = ref({
  id: "",
  name: "",
  email: "",
  phone: "",
});

import { RouterLink, useRouter } from "vue-router";
const router = useRouter(); // vue-router 자제를 호출

// 등록버튼을 통해 맴버를 추가 했을때 정보 출력
// JSON.stringify: 객체를 배열로 변경할때
const server = "https://jsonplaceholder.typicode.com";
const addMember = async () => {
  let info = await fetch(`${server}/users`, {
    method: "post",
    // 통신에서 전송되는 데이터 타입을 알려주는 것
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(member.value),
  })
    .then((res) => res.json)
    .catch((err) => console.log(err));
  let newId = info.id;
  router.push({ name: "memberDetail", params: { id: newId } }); // vue 라우터에 내용을 등록 (params를 통해 id 값을 불러오겠다는 선언)
};
</script>
<template>
  <h1>회원관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">Top</RouterLink> >
    <RouterLink :to="{ path: '/member/list' }">회원리스트</RouterLink> >
    회원정보 추가
  </p>
  <h3>회원정보 추가</h3>
  <div>
    <h4>정보를 입력하고 등록버튼을 클릭</h4>
    <div><span>ID</span><input type="text" v-model="member.id" /></div>
    <div><span>이름</span><input type="text" v-model="member.name" /></div>
    <div>
      <span>이메일 주소</span><input type="email" v-model="member.email" />
    </div>
    <div><span>연락처</span><input type="text" v-model="member.phone" /></div>
    <button type="button" v-on:click="addMember()">등록</button>
  </div>
</template>
