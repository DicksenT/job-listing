import { useEffect, useState } from 'react'
import mobileHeader from '/images/bg-header-mobile.svg'
import desktopHeader from '/images/bg-header-desktop.svg'
import Joblist from './Joblist'
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const getData = async() =>{
      try{
        const response = await axios.get('/data.json')
        setData(response.data)
      }
      catch(error){
        console.error(error);
      }
    }
    getData()
  },[])

  useEffect(() =>{
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () =>{
      window.removeEventListener('resize', handleResize)
    } 
  },[])

  return (
    <div className='mainApp'>
      <header>
        <img src={width < 1024 ? mobileHeader : desktopHeader} alt="" />
      </header>
      <main>
          {data && data.map((dt)=>(
              <Joblist data={dt} width={width}/>
          ))}
          
      </main>
    </div>
  )
}

export default App
