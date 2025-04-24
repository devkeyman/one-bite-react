/*
1. 이름
2. 생년월일
3. 국적
4. 자기소개
*/

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("홍길동");
  const [birth, setBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [introduction, setIntroduction] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeNationality = (e) => {
    setNationality(e.target.value);
    console.log(nationality);
  };

  const onChangeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div>
        <input type="date" placeholder="생년월일" onChange={onChangeBirth} />
      </div>
      <div>
        <select onChange={onChangeNationality}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="cn">중국</option>
          <option value="jp">일본</option>
        </select>
      </div>
      <div>
        <textarea placeholder="자기소개" />
      </div>
    </div>
  );
};

export default Register;
