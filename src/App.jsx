import { useRef, useState } from 'react';
import './App.css';

const arr = []
function App() {
  const [render, setRender] = useState(true)
  const inpRef = useRef()
  function setMeva(){
    arr.push(inpRef.current.value);
    setRender(!render)
    inpRef.current.value = ''
  }
  return (
    <section>
      <div className="container">
        <h1 className='text-center mt-5'>To do list</h1>
        <div className='d-flex justify-content-center'>
          <input ref={inpRef} className='form-control w-50' type="text" />
          <button onClick={setMeva} className='btn btn-primary'>add</button>
        </div>
        <ul>
          {
            arr.map((item)=> (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default App;
