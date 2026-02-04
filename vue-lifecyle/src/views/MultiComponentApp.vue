<!--views/MultiComponentApp.vue-->

<script setup>
// 자식 컴포넌트는 <template> 안에서 태그로 인식됨
import OneSection from "@/components/OneSection.vue";
</script>
<template>
  <section>
    <h1>컴포넌트 기초</h1>
    <section>
      <h2>컴포넌트 1개</h2>
      <!--자식 컴포넌트는 부모 컴포넌트의 화면을 구성하는 일부-->
      <OneSection />
    </section>
  </section>
  <section>
    <section>
      <h2>컴포넌트 여러개</h2>
      <OneSection />
      <OneSection />
      <OneSection />
    </section>
  </section>
</template>
