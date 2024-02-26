import { useEffect, useState, useRef } from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function useKey(key, cb){
  const callbackRef = useRef(cb);
  useEffect(()=>{
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event){
      if (event.key === key){
        callbackRef.current(event);
      }
    }
    document.addEventListener("keypress", handle)
    return () => document.removeEventListener("keypress", handle)
  },[key]) ;
}

function App() {
  // const [num, setNum] = useState(1)
  // const [username, setUsername] = useState('Code with Yuki')
  function handleEnter(){
    
    console.log("1 Key is Press");
  };
  useKey("1", () => setValue(value + "1"));
  useKey("2", () => setValue(value + "2"));
  useKey("3", () => setValue(value + "3"));
  useKey("4", () => setValue(value + "4"));
  useKey("5", () => setValue(value + "5"));
  useKey("6", () => setValue(value + "6"));
  useKey("7", () => setValue(value + "7"));
  useKey("8", () => setValue(value + "8"));
  useKey("9", () => setValue(value + "9"));
  useKey("0", () => setValue(value + "0"));
  useKey("+", () => setValue(value + "+"));
  useKey("-", () => setValue(value + "-"));
  useKey("/", () => setValue(value + "/"));
  useKey("*", () => setValue(value + "*"));
  useKey("Enter", () => setValue(eval(value)));
  useKey("Backspace", () => setValue(typeof value === 'string' && value.length > 0 ? value.slice(0, -1) : ''));
  const [value, setValue] = useState('');

  return (
    <>
      <Header />
        <div className="container">
          <div className="calculator">
            <form action="">
              <div className='display'>
                <input type="text" value={value} />
              </div>
              <div>
                <input type="button" value="AC" onClick={e => setValue('')}/>
                <input type="button" value="DE" onClick={() => setValue(typeof value === 'string' && value.length > 0 ? value.slice(0, -1) : '')}/>
                <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
              </div>
              <div>
                <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
              </div>
              <div>
                <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
              </div>
              <div>
                <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
              </div>
              <div>
                <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="="  className='equal' onClick={e => setValue(eval(value))}/>
              </div>
            </form>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default App;
