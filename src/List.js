import React from "react";
import styled from "styled-components";
import { AddCircle } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {db} from "./firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import {useDispatch} from "react-redux";
import { loadDict} from "./redux/modules/dictionary";

const List = (props) => {
  let navigate = useNavigate();
  // console.log(props);         // console에 ['어쩔티비', '낄낄빠빠', '알잘딱깔센']로 찍힘. -> <List />에 list 안 넘겨주면 {}로 뜸! 주석처리ㄱㄱ

  // const data = useSelector((state) => state);
  // useSelector를 사용하기 위해서는 store 안에 있는 모든 데이터 state(앞)를 state(뒤)로 return해서 상수로 만듦
  // console.log(data);       // console에 bucket 밑에 list 들어옴. bucket = configStore.js에서 만든 모듈, list = 그 모듈의 데이터

  const data = useSelector((state) => state.dictionary.list);   // store 안의 모든 데이터 state에서 configStore에서 만든 dictionary 리듀서에 있는 list 꺼낸다!
  // console.log(data[0].word);   // 어쩔티비 만 출력됨!
  // data의 자료형=배열. data.index[0]?? 배열에는 . 으로 인덱스 못 가져와. data[0] 이렇게! 
  // 유사배열=object 에서는 . 으로 써도 속성 접근 가능!

  // jsx에서는 for문 못 씀. 그래서 map. 추가하는 걸 index 넣어서 map으로 돌리기.


  const dispatch = useDispatch();

  React.useEffect(() => {         // async() 를 await 없이 쓰면 에러남!
    // console.log(db);

    // const query = await getDocs(collection(db, "dict"));  // collection의 정보 db 넣고, collection의 이름 넣으면 모든 문서 docs 가져올 수 있음!
    // console.log(query);   
    // // console에는 promise 뜨는데, 비동기 통신해서 그럼. 서버에 요청하면 바로 주는게 아니라 언젠가는 data 주겠지~ 이 의미!
    // // promise를 확인하는 게 async await임! 기다릴게 라는 약속!
    
    // query.forEach((doc) => {      // doc = dict 라는 collection 안에 있는 모든 문서 하나하나
    //   console.log(doc.id, doc.data());
    // });

    // addDoc(collection(db, "dict"), {word: "어절티비", desc: "뭐", ex: "어쩌라고"});   // 추가할 것 그 다음에 작성

    // // const docRef = doc(db, "dict", "pjkOkpKOQWocEIiSbYIB")   // 뭐 수정할래?
    // updateDoc(docRef, {text:"낄낄빠빠"});

    // const docRef = doc(db, "dict", "r1QJLtrsN7dOwM24ht6Z")   // 뭐 삭제할래?
    // deleteDoc(docRef);

    dispatch(loadDict());
    
  }, []);

  
  return (
    <>
      {data.map(( item, index) => {   // 첫번째 인자=값, 두번째=index, 세번째=배열
        return (
          <Word key={index}>    
            {/* map에는 key 값이 항상 들어가야 함! */}
            <div>단어</div>
            <h4>{item.word}</h4>      
            {/* data[index 번호] = item = data의 요소 */}
            <div>설명</div>
            <p>{item.desc}</p>
            <div>예시</div>
            <Ex>{item.ex}</Ex>
          </Word>
        );
      })}

      <AddCircle
        onClick={() => {
          navigate("/word/add");
        }}
        color="primary"
        aria-label="add"
        style={{
          fontSize: "70px",
          marginLeft: "1200px",
          position: "fixed",
          right: "30px",
          bottom: "50px",
        }}
      />
    </>
  );
};

const Word = styled.div`
  display: inline-flex;
  flex-direction: column; // flex하면 div가 세로로 자동 정렬됨 -> flex-direction으로 가로로 설정해줌!
  width: 400px;
  height: 200px;
  margin: 30px auto 5px 140px;
  padding: 20px;
  border: 2px solid #6a5acd;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: box-shadow 300ms ease-in-out 0s;
  /* div{
    display: block;         // 하위태그에도 display 적용됨. div는 상위태그 적용 안 되게 해줌!
  } */
`;

const Ex = styled.div`
  color: rgb(9, 132, 227);
  margin-top: 10px;
  font-size: 14px;
`;

export default List;
