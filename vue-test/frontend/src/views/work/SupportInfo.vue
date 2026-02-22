<script>
export default {
  data() {
    return {
      supported: [
        {
          sup_num: 1,
          sup_name: "홍길동",
          birthday: "001203",
          gender: "남성",
          sup_tel: "010-1234-4567",
          sup_address: "대구광역시 00구 00동",
          disability_code: "보기",
          counsel_manager: "김하나",
          counsel_date: "26.02.14",
        },
        {
          sup_num: 2,
          sup_name: "김철수",
          birthday: "990620",
          gender: "남성",
          sup_tel: "010-4567-7890",
          sup_address: "대전광역시 00구 00동",
          disability_code: "보기",
          counsel_manager: "배정요청",
          counsel_date: "25.12.16",
        },
        {
          sup_num: 3,
          sup_name: "오영희",
          birthday: "890304",
          gender: "여성",
          sup_tel: "010-1234-7890",
          sup_address: "부산광역시 00구 00동",
          disability_code: "",
          counsel_manager: "허길동",
          counsel_date: "25.10.05",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="info-container">
    <h2>지원자 목록</h2>
  </div>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>생년월일</th>
        <th>성별</th>
        <th>휴대폰 번호</th>
        <th>주소</th>
        <th>장애유형</th>
        <th>담당자</th>
        <th>등록일</th>
        <th>정보 수정</th>
        <th>정보 수정일</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="member in supported" :key="member.sup_num">
        <td>{{ member.sup_num }}</td>
        <td>{{ member.birthday }}</td>
        <td>{{ member.gender }}</td>
        <td>{{ member.sup_tel }}</td>
        <td>{{ member.sup_address }}</td>
        <td>{{ member.disability_code }}</td>
        <td>{{ member.counsel_manager }}</td>
        <td>{{ member.counsel_date }}</td>
      </tr>
    </tbody>
  </table>
</template>
