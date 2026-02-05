<!--views/OneSection.vue-->
<script setup>
// defineProps, defineEmits: 부모 => 자식데이터를 정의 할때 사용
// defineEmits: 자식 => 부모 (이벤트 전달용)
import { defineProps } from "vue";
// const content = ref("");
// props: 변수로 인식,  단 readOnly (부모가 내려주는 데이터)
// defineProps(["content"]);
const props = defineProps({
  title: {
    type: String,
    default: "No title", // 기본값 (부모가 안주면 No title )
  },
  // 무조건 받아야하는 값 (문자열, 객체 허용)
  content: {
    type: [String, Object],
    required: true, // 필수값
  },
});
// emit: 자식 =>  부모, 메세지 혹은 데이터
// 1. event(message) 정의 (= 선언)
const emit = defineEmits(["sendMsg", "callStartPoint"]); // emit가 [ ]안에 적은 이벤트들을 부모에게 보낼수 있다고 선언
// 2. event를 발생
// emit: 부모에게 이벤트를 발사하는 함수
const emitTest = () => {
  emit("sendMsg");
};
// 메세지 전달 시  전달할 데이터
// script에서 선언을 하지않고 데이터 작성시 객체안의 필드로 인식하게 됨
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
