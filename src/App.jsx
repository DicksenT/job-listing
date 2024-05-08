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

  const [search, setSearch] = useState([])
  const [filteredData, setFilteredData] = useState()
  useEffect(() =>{
    setFilteredData(data)
  },[data])
    const addSearch = (newSearch) =>{
      if(!search.includes(newSearch)){
        setSearch(prevSearch => [...prevSearch, newSearch])
      }
  }
  const deleteSearch =(del) =>{
    setFilteredData(data) 
    setSearch(prevSearch => prevSearch.filter(item => item != del))
       
  }
    
  useEffect(() =>{
    search.map((s) => {
      setFilteredData(prevFilteredData => prevFilteredData.filter(data =>
        data.role === s ||
        data.level === s ||
        data.languages.includes(s) ||
        data.tools.includes(s)
      ))
    })
  },[search])
  

  return (
    <div className='mainApp'>
      <header>
        <img src={width < 1024 ? mobileHeader : desktopHeader} alt="" />
      </header>
      <main>
          <div className="searchBar">
            <div className="searchList">
            {search.map((s) =>(
              <div key={s} className="searchInd">
                <p className="searchText">
                {s}
                </p>
                <button onClick={() => deleteSearch(s)} className="deleteBtn">X</button>
                </div> 
            ))}
            </div>
            <p className="clearBtn">Clear</p>
          </div>
          {filteredData && filteredData.map((dt)=>(
              <Joblist data={dt} width={width} key={dt.id} addSearch={addSearch}/>
          ))}
          
      </main>
    </div>
  )
}

export default App
