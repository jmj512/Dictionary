// dictionary.js
import {db} from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";


// Actions
const LOAD   = 'dictionary/LOAD';       // 파이어스토어에서 데이터 갖고오기 -> 리듀서에 넣음
const CREATE = 'dictionary/CREATE';     // 추가하기
// const UPDATE = 'dictionary/UPDATE';
// const REMOVE = 'dictionary/REMOVE';

const initialState = {
  list: [{word: "어쩔티비", desc: "123", ex: "qwertyyuu"}, {word: "낄낄빠빠", desc: "뿌엥", ex: "999999"}],   
  // 데이터 구상 생각하기
  // 배열 안에 유사배열 여러 개를 넣어둠. {key: value}
  // [{word: "어쩔티비", desc: "~~", ex: "---"}, {word: "어쩔티비", desc: "~~", ex: "---"}(2번째 카드)]
  // console에 객체로 출력됨. 그냥 추가하기 페이지에서 입력하면 하나하나가 유사배열로 되지 않고 대괄호 안에 출력.
};

// Action Creators
export function loadDictionary(dict_list) {
  return { type: LOAD, dict_list };
}

export function createDictionary(dictionary) {
  // console.log("액션을 생성할거야");
    return { type: CREATE, dictionary }; 
}

// export function updateDictionary(dictionary) {
//   return { type: UPDATE, dictionary };
// }

// export function removeDictionary(dictionary) {
//   return { type: REMOVE, dictionary };
// }


// middlewares
export const loadDict = () => {
  return async function (dispatch) {
    const dict_data = await getDocs(collection(db, "dict"));
    // console.log(dict_data);

    let dict_list = [];

    dict_data.forEach((b) => {
      // console.log(b.id, b.data());
      dict_list.push({id: b.id, ...b.data()});
    });

    // console.log(dict_list);
 
    dispatch(loadDictionary(dict_list));
  };
};

export const addDict = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dict"), dictionary);
    // const _dictionary = await getDoc(docRef);
    // const dictionary_data = {id: docRef.id, ...dictionary};
    
    // console.log(docRef);                   // 읽기 어려운 데이터로 콘솔에 찍힘
    // console.log((await getDoc(docRef)).data());     // {desc: '~', ex: '~', word: '~'}로 찍힘.
    // console.log(dictionary_data);        // {id: ~, desc: ~, ex: ~, word: ~}로 찍힘
    
    // dispatch(createDictionary(dictionary_data));    // store에 집어넣어라. 2번 반복되는 이유가 load도 잇어서!!
  }
};



// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "dictionary/LOAD": {
        // console.log(action.dict_list);
        return {list: action.dict_list};
      } 
      case "dictionary/CREATE": {
        // console.log("이제 값을 바꿀거야");
        const new_dictionary_list = [...state.list, action.dictionary];   
        // 원래 있던 리스트에 새로운 걸 추가한 게 새 딕션리스트
        return {list : new_dictionary_list};                           
    }
      default: return state;
    }
  }
