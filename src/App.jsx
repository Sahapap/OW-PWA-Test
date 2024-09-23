import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const callEvoFromPWA = () => {
    console.log("Call")

    try {
      window.location.href = "intent://#Intent;scheme=package;package=com.evopayments.payiso;end";
    } catch (e) {
      alert("Error launching the native app");
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br/>
        <br/>
        <button onClick={callEvoFromPWA}>
          Test Call Evo from PWA.
        </button>
        <br/>
        <br/>
        <a href="intent://#Intent;scheme=package;package=com.evopayments.payiso;end">Link to call Evo</a>
        <br/>
        <br/>
        <a href="intent://#Intent;package=com.evopayments.payiso;end">Link to call Evo (No Schme)</a>
        <br/>
        <br/>
        <a href="intent://#Intent;scheme=evo-payment;package=com.evopayments.payiso;end">Link to call Evo (From GPT)</a>
        <br/>
        <br/>
        <a href="intent://#Intent;scheme=evo-payment;action=android.intent.action.VIEW;end">Link to call Evo (From GPT 2)</a>
        <br/>
        <br/>
        <a href="intent://#Intent;scheme=evo-payment;package=com.evopayments.payiso;action=com.evopayments.payiso.PERFORM_TRANSACTION;end">Link to call Evo (P'Hong)</a>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
