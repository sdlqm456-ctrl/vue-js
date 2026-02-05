<!--views\member\MemberDetail.vue-->
<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
const member = ref({}); // 회원정보

const route = useRoute(); // 호출당한 정보 (어떠한 정보를 불러올때 사용)
const memId = route.params.id; // 경로에 있는 id 값 불러오기
// console.log(memId);
const server = "https://jsonplaceholder.typicode.com";
const findMemberById = async (memberId) => {
  let info = await fetch(`${server}/users/${memberId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // console.log(info);
  member.value = info;
};
onBeforeMount(() => {
  findMemberById(memId);
});
</script>
<template>
  <h1>회원관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">Top</RouterLink> >
    <RouterLink :to="{ path: '/member/list' }">회원리스트</RouterLink> >
    회원상세 정보
  </p>
  <h3>회원 상세정보</h3>
  <div>
    <div><span>ID</span>{{ member.Id }}</div>
    <div><span>이름</span>{{ member.name }}</div>
    <div><span>이메일 주소</span>{{ member.email }}</div>
    <div><span>연락처</span>{{ member.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
