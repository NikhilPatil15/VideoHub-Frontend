
import { useSelector } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'

export function App() {
  const darkTheme = useSelector((state:any) => state.DarkTheme.dark)  

  return (
    <>
    <Navbar/>
      <div className={`${darkTheme ? 'bg-[#1f1f1f]':'bg-white'}  text-white`}>
       Helo
      </div>
    </>   
  )
}

