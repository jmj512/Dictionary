import React from "react";
import styled from "styled-components";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {createDictionary, addDict} from "./redux/modules/dictionary";

const Add = (props) => {
    let navigate = useNavigate();

    const word = React.useRef(null);    // 정의를 했으면, 이 이름표를 어디에다 갖다 붙여야함! 그리고 console로 확인! 
    const desc = React.useRef(null);
    const ex = React.useRef(null);

    const dispatch = useDispatch();
    
  return (
    <>
      <Box>
        <Name>단어 추가하기</Name>
        <form onSubmit={(e) => {
          console.log(word.current.value);    // 각각의 input 값이 console로 찍힘
          console.log(desc.current.value);
          console.log(ex.current.value);

          let new_word = {word: word.current.value, desc: desc.current.value, ex: ex.current.value}

          e.preventDefault();  // onSubmit으로 새로고침 기본으로 된 거 막음. 그러면 console에 각각의 input 값 확인 가능! (새로고침 안되서) 그러고 나서 navigate(-1)해주면 전 페이지로 돌아감!
          navigate(-1);      // form 양식 사용 안 한다면, button 태그 안에 onClick으로 화살표함수 써서 할 수 있음.
          // form에는 onSubmit으로 화살표함수 안의 내용이 자동으로 실행되니까, onSubmit이 onClick 역할 대신 수행! 그래서 여기에 navigate(-1)을 쓸 수 있는 것임!
          // addEventListener로 하게 되면 form 양식이 필요없지만, form에는 다양한 기능들이 존재
          // form에는 onSubmit말고도 label이나 email 같은 기능들이 존재해서 문서화하기에 좋음.

          // dispatch(createDictionary(new_word));  //.current.value하면 에러남. 객체로 정의한 new_word에는 current 라는 key 값이 없어!
          dispatch(addDict(new_word));         
        }}> 
          <div style={{ margin: "20px"}}>
          <Label>단어</Label>
          <input type="text" ref={word} style={{ width: "350px", height: "20px", borderColor: "#4F6293", borderTop: "0px", borderLeft: "0px", borderRight: "0px", outline: "none", fontSize: "15px"}}/>
          <Label>설명</Label>
          <input type="text" ref={desc} style={{ width: "350px", height: "20px", borderColor: "#4F6293", borderTop: "0px", borderLeft: "0px", borderRight: "0px", outline: "none", fontSize: "15px" }}/>
          <Label>예시</Label>
          <input type="text" ref={ex} style={{ width: "350px", height: "20px", borderColor: "#4F6293", borderTop: "0px", borderLeft: "0px", borderRight: "0px", outline: "none", fontSize: "15px" }}/>
        </div>
        <Button type="submit" variant="contained"
          style={{ background: "#4169e1", marginTop: "40px", marginLeft: "150px"}}
          // button + input = form. button을 누르면 form에 자동적으로 전달(submit이 작동)하고, 전달받으면 form이 onSubmit을 작동함.
          // onSubmit이 작동되면 새로고침 자동으로 됨. 새로고침 자동으로 되는 거 막아야함. 그래서 위로 올라가서 preventDefault 설정하게 됨!
          // button 누르면 form에서 onSubmit 발동함!
          > 
            추가하기
          </Button>
        </form>                 
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 400px;
  height: 600px;
  border: 2px solid #6a5acd;
  border-radius: 10px;
  margin: 30px auto 0px auto;
`;

const Name = styled.h2`
  color: #ff69b4;
  text-align: center;
`;

const Label = styled.h5`
  color: #6a5acd;
  margin-top: 50px;
`;

export default Add;