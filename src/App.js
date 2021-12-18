import React, {useEffect, useState} from "react";
//1단계:그리고 useState를 선언해준다. 질문 : useState를 처음에 선언해주는 이유는?
//4단계 : 그런다음에 useEffect를 선언해준다.

const App = () => {
    const [seones, setSeones] = useState([])
    //선언을 하기 위해서 일단 이름을 정해준다. 복수니까 es
    //{}안에는 함수와, 상태값들이 들어간다.
    //이름 임의 지정 a라고 해도되고 셋a라고 해도됨.

    useEffect(() =>{
        console. log("bvshvbshvbsvhjasbshvbjbvljsb")
    },[])
    //4단계는 위에 useEffect를 선언해주고, useEffect함수를 입력해준다.
    //그럼다음에 4단계 다음 실행을 진행한다. console. log를 선언해주고. 표현 문구를 입력해준다.

    return (
        <div>
            <h1>
                
            </h1>
        </div>
    );
};

export default App;