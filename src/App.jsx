import reactLogo from './assets/react.svg'
import './App.css'
import TimerComponent from './concepts/5.hooks/2.useEffect/index3'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello React Guys</h1>
      <TimerComponent />
    </>
  )
}

export default App
