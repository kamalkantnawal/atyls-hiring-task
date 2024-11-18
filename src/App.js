import React, { useState } from "react";
import {
  BackgroundLayout,
  AppContainer,
  InitialInput,
  FinalOutput,
  ChainContainer,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  FinalOutputContainer,
  OutputLabel,
  Output,
} from "./Style";
import FunctionCard from "./Components/FunctionCard";

function App() {
  const [initialValue, setInitialValue] = useState(2);
  const [functions, setFunctions] = useState(["", "", "", "", ""]);
  const [result, setResult] = useState(120);

  const handleInputChange = (e) => {
    setInitialValue(+e.target.value);
    calculateResult(+e.target.value, functions);
  };

  const handleEquationChange = (index, equation) => {
    const updatedFunctions = [...functions];
    updatedFunctions[index] = equation;
    setFunctions(updatedFunctions);
    calculateResult(initialValue, updatedFunctions);
  };

  const calculateResult = (value, equations) => {
    try {
      let currentResult = value;
      const order = [0, 1, 3, 4, 2]; // Processing order of functions
      for (const i of order) {
        if (equations[i]) {
          // Replace 'x' in the equation with the current result value
          currentResult = eval(equations[i].replace(/x/g, currentResult));
        }
      }
      setResult(currentResult);
    } catch (error) {
      console.error("Invalid equation format", error);
    }
  };

  return (
    <AppContainer>
      <BackgroundLayout />

      <InitialInput>
        <label className="label">Initial value of x</label>
        <input
          className="input"
          type="number"
          value={initialValue}
          onChange={handleInputChange}
        />
      </InitialInput>

      <ChainContainer>
        <Function1>
          <FunctionCard
            index={0}
            equation={functions[0]}
            onEquationChange={(eq) => handleEquationChange(0, eq)}
          />
        </Function1>
        <Function2>
          <FunctionCard
            index={1}
            equation={functions[1]}
            onEquationChange={(eq) => handleEquationChange(1, eq)}
          />
        </Function2>
        <Function3>
          <FunctionCard
            index={2}
            equation={functions[2]}
            onEquationChange={(eq) => handleEquationChange(2, eq)}
          />
        </Function3>
        <Function4>
          <FunctionCard
            index={3}
            equation={functions[3]}
            onEquationChange={(eq) => handleEquationChange(3, eq)}
          />
        </Function4>
        <Function5>
          <FunctionCard
            index={4}
            equation={functions[4]}
            onEquationChange={(eq) => handleEquationChange(4, eq)}
          />
        </Function5>
      </ChainContainer>

      <FinalOutputContainer>
        <OutputLabel>Final Output y</OutputLabel>
        <Output>{result}</Output>
      </FinalOutputContainer>
    </AppContainer>
  );
}

export default App;
