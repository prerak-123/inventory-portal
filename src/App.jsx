import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home'

function App() {
  return(
    <div style={{backgroundColor: "rgb(219, 220, 227)", minHeight: "100vh"}}>
      <NavigationBar/>
      <Home/>
    </div>
  )
}

export default App
