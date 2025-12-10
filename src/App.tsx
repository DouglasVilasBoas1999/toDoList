import './global.css'
import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import { RegisteredTask } from './components/RegisteredTask'

function App() {

  return (
    <div>
      < Header />
      < CreateTask />
      < RegisteredTask />
    </div>
  )
}

export default App
 