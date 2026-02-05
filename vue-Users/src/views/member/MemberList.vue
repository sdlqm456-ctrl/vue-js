<!--views/member/MemberList.vue-->
<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
// memberDetail에서 membersId 값 불러오기
// goToDetail: 상세 페이지(memberDetail) 이동
// membersId 클릭한 회원의 id 값
const goToDetail = (membersId) => {
  router.push({ name: "memberDetail", params: { id: membersId } });
};

// onBeforeMount: 화면에 그려지기 직전 맴버목록을 미리 가져오기
// 화면이 먼저뜨고 데이터가 나중에 오면 사용자가 깨진화면을 보게 되서 먼저 불러오기
import { onBeforeMount, ref } from "vue";

// member의 정보를 서버에서 받아오기 (fetch 함수 사용)
const members = ref([]);
const server = "https://jsonplaceholder.typicode.com"; // 가져오는 url정보
const findMemberList = async () => {
  const list = await fetch(`${server}/users`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  // console.log(list);
  members.value = list;
};
// Lifecycle Hook 중 가장먼저 실행 (가장 마지막에 작성)
onBeforeMount(() => {
  findMemberList();
});
</script>

<template>
  <h1>회원관리</h1>
  <p>
    <!--v-bind: 속성 사용시 무조건 객체를 사용해야 정상적으로 데이터를 가져올 수 있음-->
    <RouterLink v-bind:to="{ name: 'main' }"> Top </RouterLink>> 회원 리스트
  </p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은 <RouterLink :to="{ path: '/member/add' }">여기</RouterLink>를
    클릭하세요
  </p>
  <ul>
    <li v-for="info in members" v-on:click="goToDetail(info.id)">
      ID가 {{ info.id }} 인 {{ info.name }}님
    </li>
  </ul>
</template>
