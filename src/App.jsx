import reactLogo from './assets/react.svg'
import './App.css'
import TimerComponent from './concepts/5.hooks/2.useEffect/index3'
import { AuthProvider } from './concepts/9.state-management/1.context/2.authentication-context'
import { ThemeProvider } from './concepts/9.state-management/1.context/1.theme-context'
import ControlledForm from './concepts/4.controlled-uncontrolled/index1'
import TitleUpdater from './concepts/5.hooks/2.useEffect/index1';

function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello React Guys</h1>
      <TitleUpdater />
      <TimerComponent />
      <ControlledForm />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
