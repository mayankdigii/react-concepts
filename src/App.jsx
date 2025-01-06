import reactLogo from './assets/react.svg'
import './App.css'
import FunctionalComponent from './concepts/functional-component/index1'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello React Guys</h1>
      <FunctionalComponent />
    </>
  )
}

export default App
