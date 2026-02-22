<script>
export default {
  data() {
    return {
      searchName: "",
      searchPriority: "",
      isOpen: true,
      currentTab: "list",
      supported: [
        {
          sup_num: 1,
          sup_name: "홍길동",
          priority: "계획",
          progress: "검토중",
          sup_reg_date: "25.12.04",
          plan_manager: "김하나",
        },
        {
          sup_num: 2,
          sup_name: "김철수",
          priority: "긴급",
          progress: "검토완료",
          sup_reg_date: "24.02.16",
          plan_manager: "강남구",
          documents: "",
          plans: "",
          results: "",
        },
        {
          sup_num: 3,
          sup_name: "오영희",
          priority: "중점",
          progress: "대기중",
          sup_reg_date: "23.03.05",
          plan_manager: "허길동",
          documents: "",
          plans: "",
          results: "",
        },
        {
          sup_num: 4,
          sup_name: "최00",
          priority: "대기",
          progress: "검토중",
          sup_reg_date: "23.03.21",
          plan_manager: "박00",
          documents: "",
          plans: "",
          results: "",
        },
        {
          sup_num: 5,
          sup_name: "박00",
          priority: "긴급",
          progress: "검토완료",
          sup_reg_date: "22.03.05",
          plan_manager: "허길동",
          documents: "",
          plans: "",
          results: "",
        },
        {
          sup_num: 6,
          sup_name: "홍00",
          priority: "계획",
          progress: "대기중",
          sup_reg_date: "22.10.05",
          plan_manager: "김하나",
          documents: "",
          plans: "",
          results: "",
        },
      ],
    };
  },
  computed: {
    filteredMembers() {
      return this.supported.filter((member) => {
        const nameMatch = member.sup_name.includes(this.searchName);

        const priorityMatch =
          this.searchPriority === "" || member.priority === this.searchPriority;

        return nameMatch && priorityMatch;
      });
    },
  },

  methods: {
    resetSearch() {
      this.searchName = "";
      this.searchPriority = "";
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<template>
  <div class="layout-wrapper">
    <aside class="sidebar-container">
      <div class="management-box">
        <div class="box-header" @click="toggleMenu">
          지원자 관리 <span class="arrow">{{ isOpen ? "▼" : "▶" }}</span>
        </div>
        <ul v-if="isOpen" class="menu-list">
          <li
            :class="{ active: currentTab === 'list' }"
            @click="currentTab = 'list'"
          >
            - 지원자 목록
          </li>
          <li
            class="sub-item"
            :class="{ active: currentTab === 'info' }"
            @click="currentTab = 'info'"
          >
            - 지원자 정보
          </li>
        </ul>
      </div>

      <div class="search-box">
        <h3 class="search-title">지원자 검색</h3>
        <div class="search-form">
          <div class="form-group">
            <label>지원자 명</label>
            <input type="text" v-model="searchName" />
          </div>
          <div class="form-group">
            <label>성별</label>
            <div class="gender-btns">
              <button class="active">전체</button>
              <button>남성</button>
              <button>여성</button>
            </div>
          </div>
          <div class="form-group">
            <label>장애유형</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label>담당자</label>
            <input type="text" v-model="counsel_manager" />
          </div>
          <button class="search-btn" @click="resetSearch">검색</button>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <div v-if="currentTab === 'list'"></div>
      <div class="content-header">
        <h2 class="page-title">지원자 목록</h2>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>지원자명</th>
              <th>대기단계</th>
              <th>최근 서류작성일</th>
              <th>작성 서류상태</th>
              <th>담당자 배정일</th>
              <th>담당자</th>
              <th>신청서</th>
              <th>계획서</th>
              <th>결과서</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in supported" :key="member.sup_num">
              <td>{{ member.sup_num }}</td>
              <td>{{ member.sup_name }}</td>
              <td>{{ member.priority }}</td>
              <td>{{ member.sup_reg_date }}</td>
              <td>{{ member.progress }}</td>
              <td>{{ member.sup_reg_date }}</td>
              <td>{{ member.plan_manager }}</td>
              <td>{{ member.documents || "-" }}</td>
              <td>{{ member.plans || "-" }}</td>
              <td>{{ member.results || "-" }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pagination">
        <button>이전</button>
        <span class="pages">
          <span class="active">1</span> <span>2</span> <span>3</span>
        </span>
        <button>다음</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  padding: 15px;
  gap: 15px;
  background-color: #eee; /* 배경 회색 */
  min-height: 100vh;
}

/* 사이드바 컨테이너: 내부 박스들을 세로로 나열 */
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 15px;
  flex-shrink: 0;
}

/* 1. 지원자 관리 (노란색) */
.management-box {
  background-color: #fdfdb1;
  border: 1px solid #080808;
  padding: 15px;
}
.box-header {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 10px;
}
.menu-list {
  list-style: none;
  padding-left: 5px;
}
.menu-list li {
  cursor: pointer;
  margin-bottom: 5px;
}
.sub-item {
  padding-left: 10px;
}

/* 2. 지원자 검색 (파란색) */
.search-box {
  background-color: #cfe2f3;
  border: 1px solid #999;
  padding: 15px;
}
.search-title {
  font-size: 1rem;
  margin-bottom: 15px;
}
.form-group {
  margin-bottom: 10px;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 4px;
  font-weight: bold;
}
.form-group input {
  width: 100%;
  padding: 4px;
  border: 1px solid #999;
}

.gender-btns {
  display: flex;
  gap: 2px;
}
.gender-btns button {
  flex: 1;
  padding: 2px;
  font-size: 0.75rem;
  background: #fff;
  border: 1px solid #999;
}
.gender-btns button.active {
  background: #54b066;
}

.search-btn {
  width: 100%;
  margin-top: 10px;
  background-color: #b6d7a8;
  padding: 5px;
  border: 1px solid #999;
}

/* 오른쪽 메인 영역 */
.main-content {
  flex: 1;
  background: #fff;
  border: 1px solid #000000;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

/* 테이블 스타일링 */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
th,
td {
  border: 1px solid #666;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #3d85c6;
  color: white;
}

.view-btn {
  background: #b6d7a8;
  border: 1px solid #999;
  padding: 2px 8px;
  border-radius: 4px;
}
.edit-btn {
  background: #fdfdb1;
  border: 1px solid #999;
  padding: 5px;
  border-radius: 4px;
}

/* 페이지네이션 */
.pagination {
  margin-top: auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
}
.pagination .active {
  color: red;
  font-weight: bold;
}
</style>
