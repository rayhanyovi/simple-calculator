import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (num) => {
    if (display === "0" || currentValue === "0") {
      setDisplay(num.toString());
      setCurrentValue(num.toString());
    } else {
      setDisplay((prevDisplay) => prevDisplay.toString() + num);
      setCurrentValue((prevValue) => prevValue.toString() + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentValue) {
      setOperator(op);
      setPreviousValue(currentValue);
      setCurrentValue("");
      setDisplay("0");
    }
  };

  const handlePercentageClick = () => {
    let result;
    if (previousValue && currentValue && operator) {
      result = (parseFloat(previousValue) * parseFloat(currentValue)) / 100;
    } else {
      result = parseFloat(currentValue) / 100;
    }
    setDisplay(result.toString());
    setCurrentValue(result.toString());
  };

  const handleEqualsClick = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case "x":
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case "÷":
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
      default:
        result = parseFloat(currentValue);
    }

    setDisplay(result.toString());
    setCurrentValue(result.toString());
    setPreviousValue("");
    setOperator("");
  };

  const handleClearEntryClick = () => {
    setDisplay("0");
    setCurrentValue("");
  };

  const handleClearClick = () => {
    setDisplay("0");
    setCurrentValue("");
    setPreviousValue("");
    setOperator("");
  };

  const handleReciprocalClick = () => {
    const result = 1 / parseFloat(currentValue);
    setDisplay(result.toString());
    setCurrentValue(result.toString());
  };

  const handleSquareClick = () => {
    const result = Math.pow(parseFloat(currentValue), 2);
    setDisplay(result.toString());
    setCurrentValue(result.toString());
  };

  const handleSquareRootClick = () => {
    const result = Math.sqrt(parseFloat(currentValue));
    setDisplay(result.toString());
    setCurrentValue(result.toString());
  };

  const handleNegateClick = () => {
    const result = -parseFloat(currentValue);
    setDisplay(result.toString());
    setCurrentValue(result.toString());
  };

  return (
    <div className="bg-cyan-950 w-screen h-screen flex items-center justify-center font-mono">
      <div className="border-4 h-4/5 w-96 bg-slate-100 rounded-3xl p-4 flex flex-col gap-2">
        <p className="border-4 bg-gray-800 h-16 text-green-400 rounded-xl text-center vertical-center flex items-center justify-end p-4 text-xl">
          {display}
        </p>
        <div className="grid grid-cols-4 w-full h-full gap-4">
          <button
            onClick={handlePercentageClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            %
          </button>
          <button
            onClick={handleClearEntryClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            CE
          </button>
          <button
            onClick={handleClearClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            C
          </button>
          <button className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50">
            ←
          </button>
          <button
            onClick={handleReciprocalClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            1/x
          </button>
          <button
            onClick={handleSquareClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            x²
          </button>
          <button
            onClick={handleSquareRootClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            2√x
          </button>
          <button
            onClick={() => handleOperatorClick("÷")}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            ÷
          </button>
          <button
            onClick={() => handleNumberClick(7)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            7
          </button>
          <button
            onClick={() => handleNumberClick(8)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            8
          </button>
          <button
            onClick={() => handleNumberClick(9)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            9
          </button>
          <button
            onClick={() => handleOperatorClick("x")}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            x
          </button>
          <button
            onClick={() => handleNumberClick(4)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            4
          </button>
          <button
            onClick={() => handleNumberClick(5)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            5
          </button>
          <button
            onClick={() => handleNumberClick(6)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            6
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            -
          </button>
          <button
            onClick={() => handleNumberClick(1)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            1
          </button>
          <button
            onClick={() => handleNumberClick(2)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            2
          </button>
          <button
            onClick={() => handleNumberClick(3)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            3
          </button>
          <button
            onClick={() => handleOperatorClick("+")}
            className="shadow rounded-lg text-cyan-950 bg-orange-500/50 active:bg-orange-700/50 hover:bg-orange-600/50"
          >
            +
          </button>
          <button
            onClick={handleNegateClick}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            +/-
          </button>
          <button
            onClick={() => handleNumberClick(0)}
            className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200"
          >
            0
          </button>
          <button className="shadow rounded-lg text-cyan-950 active:bg-slate-300 hover:bg-slate-200">
            ,
          </button>
          <button
            onClick={handleEqualsClick}
            className="shadow rounded-lg text-cyan-950 bg-orange-500 active:bg-orange-700/75 hover:bg-orange-00"
          >
            =
          </button>
        </div>{" "}
        <p className="opacity-20">Yovi's Simple Calculator</p>
      </div>
    </div>
  );
}

export default App;
