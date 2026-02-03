<!--views/DirectiveOn.vue-->
<script setup>
import { ref } from "vue";
const randValue = ref(0);
// 이벤트 핸들러: 이벤트 발생시 작동할 함수
// Vue 에선 이벤트 객체를 사용할 일이 거의 없음
const onClickFunc = (enent) => {
  randValue.value = parseInt(Math.random() * 100);
};
const selectTag = (selectedTag) => {
  alert(`Tag: ${selectedTag}`);
};
</script>
<template>
  <h3>On 디렉티브 기본</h3>
  <button
    type="button"
    v-on:click="onClickFunc()"
    @mouseover="randValue = '멀티이벤트'"
  >
    클릭
  </button>
  <p>결과: {{ randValue }}</p>
  <br />
  <div v-on:click="selectTag('div')">
    div
    <form v-on:click.self.stop="selectTag('form')">
      from
      <a
        href="http://www.naver.com"
        style="display: block"
        v-on:click.prevent="selectTag('a')"
      >
        a 태그
        <p v-on:click.once="selectTag('p')">네이버</p>
      </a>
    </form>
  </div>
  <input @keyup.ctrl.enter="selectTag('input')" />
</template>
<style scoped>
div,
div * {
  border: 1px solid rgb(135, 166, 222);
}
</style>
