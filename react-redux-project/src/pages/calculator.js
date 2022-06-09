import React from 'react'

const calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const Addition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const substract = () =>{
    setResult(Number(num1) - Number(num2))
  }
  return (
    <div>
        <form>
        <div>
          <div>
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
          </div>
          <div>
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
          </div>
        </div>
      </form>
      <div>
        <button onClick={() => Addition()}>Add</button>
        <button onClick={() =>substract()}>Sub</button>
        <button>mul</button>
        <button>Div</button>
      </div>
      result:{result}
    </div>
  )
}

export default calculator