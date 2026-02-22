<script setup>
import MaterialButton from "@/components/MaterialButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goplan = () => {
  router.push("/work/plan");
};

const gopriority = () => {
  router.push("/work/priority");
};

const gorecord = () => {
  router.push("/work/record");
};
const gorepresentative = () => {
  router.push("/work/representative");
};
</script>
<template>
  <div class="nav">
    <div class="button-wrapper">
      <div class="side-group">
        <material-button @click="gorepresentative" size="lg">
          HOME
        </material-button>
        <material-button @click="gopriority" size="lg">
          지원자 관리
        </material-button>
      </div>

      <div class="side-group">
        <material-button @click="gorecord" size="lg">
          마이페이지
        </material-button>
        <material-button @click="goplan" size="lg"> 로그아웃 </material-button>
      </div>
    </div>
    <div class="content-view">
      <RouterView name="right" />
    </div>
  </div>
</template>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  border-radius: 15px;
  margin: 10px;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}
.side-group {
  display: flex;
  gap: 10px;
}
.content-view {
  margin-top: 60px;
  text-align: center;
}
</style>
