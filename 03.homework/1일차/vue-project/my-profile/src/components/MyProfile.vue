<script setup>
import { ref, reactive } from 'vue';
const isDisabled = ref(true)
const imgAttributes = reactive({
  src: "https://picsum.photos/200",
  alt: "프로필 사진"
  width: "50px"
});


const link = "https://ko.vuejs.org/tutorial/#step-1"
/*
  사용할 데이터 참고
  프로필 이미지 : https://picsum.photos/200
  공식사이트    : https://ko.vuejs.org/tutorial/#step-1
*/
</script>

<template>
  <div class="card">
    <img alt="프로필 사진" class="profile-img" src="imgAttributes.src" />
    <h1>장수연</h1>
    <p>반갑습니다 Vue.js 1일차 학습중입니다</p>
    <a target="_blank" class="link-btn" href="link">공식 문서 방문하기</a>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: sans-serif;
  background-color: #f9f9f9;
}
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b883;
}
.link-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
