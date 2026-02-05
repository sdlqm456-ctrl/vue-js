import { createRouter, createWebHistory } from "vue-router";
import AppTop from "@/views/AppTop.vue";

const router = createRouter({
  // history 모드를 사용 => Javasript의 history객체와 vue Router 연동
  history: createWebHistory(import.meta.env.BASE_URL),
  // route: 경로를 이용해서 컴포넌트 실행하는 설정
  routes: [
    {
      path: "/", // 라우터의 경로 (필수)
      name: "main", // 라우터의 이름 (선택)
      component: AppTop, // 라우터의 컴포넌트 (필수)
    },
    {
      path: "/member/list",
      name: "memberList",
      // 동적으로 컴포넌트 호출
      component: () => import("@/views/member/MemberList.vue"),
    },
    {
      path: "/member/detail/:id", // params 방식
      name: "memberDetail",
      // 동적으로 컴포넌트 호출
      component: () => import("@/views/member/MemberDetail.vue"),
    },
    {
      path: "/member/add",
      name: "memberAdd",
      // 동적으로 컴포넌트 호출
      component: () => import("@/views/member/MemberAdd.vue"),
    },
  ],
});

export default router;
