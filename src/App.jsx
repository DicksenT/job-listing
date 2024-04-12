import { useEffect, useState } from 'react'
import mobileHeader from '/images/bg-header-mobile.svg'
import Joblist from './Joblist'
import axios from 'axios'
function App() {
  const [data, setData] = useState()
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
    console.log(data)
  },[data])
  return (
    <div>
      <header>
        <img src={mobileHeader} alt="" />
      </header>
      <main>
          {data && data.map((dt)=>(
              <Joblist data={dt}/>
          ))}
          
      </main>
    </div>
  )
}

export default App
