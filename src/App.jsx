import React, { useEffect, useState } from 'react';
import ColorfulMessage from './components/colorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false)


  const onClickSwitchFaceShowFlag = () =>{
    setFaceShowFlag(!faceShowFlag)
  };

  const buttonClick = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num > 0){
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true)
      } else {
        faceShowFlag && setFaceShowFlag(false)
      }
    }
  },[num])

  
  
  
  return (
    <>
      <ColorfulMessage color='red' fontSize='30px' >Hello React</ColorfulMessage>
      <ColorfulMessage color='blue' fontSize='18px'>こんにちは</ColorfulMessage>
      <button onClick={buttonClick}>ボタン</button>
      < br/>
      <button onClick={onClickSwitchFaceShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(´∀｀*)</p>}
    </>
  );
}

export default App;
