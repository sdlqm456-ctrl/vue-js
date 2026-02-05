<!--views/OneSection.vue-->
<script setup>
import { defineProps, defineEmits } from "vue";
// const content = ref("");
// props: 변수로 인식,  단 readOnly
// defineProps(["content"]);
const props = defineProps({
  title: {
    type: String,
    default: "No title", // 기본값
  },
  // 무조건 받아야하는 값
  content: {
    type: [String, Object],
    required: true, // 필수값
  },
});
// emit: 자식 =>  부모, 메세지 혹은 데이터
// 1. event(message) 정의 (= 선언)
const emit = defineEmits(["sendMsg", "callStartPoint"]);
// 2. event를 발생
const emitTest = () => {
  emit("sendMsg");
};
// 메세지 전달 시  전달할 데이터
// script에서 선언을 하지않고 데이터 작성시 객체안의 필드로 인식하게 됨
// 화면에 컴포넌트의 버튼 클릭시 부모/별점: 0 에서 부모부분 안바뀌는 이유 찾아보기
const randomVal = () => {
  emit("callStartPoint", "자식", props.content); // 부모에게 전달할 데이터
};
</script>
<template>
  <section class="box">
    <h4>한개의 컴포넌트</h4>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
    <!--<input v-model="content" />-->
    <!--mouseover: 마우스를 올렸을때 이벤트 발생-->
    <button v-on:mouseover="emitTest()" v-on:click="randomVal()">클릭</button>
  </section>
</template>
<style>
.box {
  border:
    1px,
    dashed green;
  margin: 10px;
}
</style>
