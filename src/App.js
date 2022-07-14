import React from "react";
import styled, { keyframes } from "styled-components";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import Add from "./Add";

function App() {

  // const [list, setList] = React.useState(["어쩔티비", "낄낄빠빠", "알잘딱깔센"]); 
  // props로 데이터 넘긴 걸 console로 확인하기 위해서 useState씀!
  // console.log(list);

    return (
    <div className="App">
      <Title>My Dictionary</Title>
      <Line />
      <Routes>
        <Route path="/" element={<List />} 
          // v6에서는 props 데이터 넘기는 방식이 element인 것! (component는 v5)
          // List component에 {list}를 list라는 이름으로 갖다준다. 
          // 하지만 <List ~ />의 ~에 list={list} 썼는데, 이거는 리덕스 쓰는 순간 필요 없어짐. useSelector로 컴포넌트가 리덕스에 있는 데이터를 알아서 가져올 거니까.
          />
        <Route path="/word/add" element={<Add/>}/>
        {/* 주소 입력창에 /word/add라고 치면 Add component에 만들어놨던 창으로 넘어감. */}
      </Routes>
    </div>
  );
}

const Title = styled.h1`
  color: #3143e8;
  text-align: center;
`;

const Line = styled.hr`
  border: 1px solid #6a5acd;
  margin: 20px auto 0px;
`;

export default App;
