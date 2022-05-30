import './App.css';
import ColorfulMessage from './components/colorfulMessage';

const App = () => {
  const buttonClick = () =>{
    alert()
  } 

  return (
    <>
      <ColorfulMessage color='red' fontSize='30px' >Hello React</ColorfulMessage>
      <ColorfulMessage color='blue' fontSize='18px'>こんにちは</ColorfulMessage>
      <button onClick={buttonClick}>ボタン</button>
    </>
  );
}

export default App;
