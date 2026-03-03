import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)
  const [imgUrl, setImgUrl] = useState("")
  const [country, setCountry] = useState("")

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        console.log(response)
        if(!response.ok) {
          throw new Error("Network response was not ok.")
        }

        const result = await response.json()
        let rand = Math.floor(Math.random() * result.length)
        let url = result[rand].flags.png
        let name = result[rand].name.common

        console.log(result)
        console.log(rand)
        console.log(url)
        console.log(name)

        setData(result)
        setImgUrl(url)
        setCountry(name)
      }
      catch(e) {
        console.log(e.message)
      }
      finally {
        setLoading(false)
      }
    }
    
    getData()
  }, [])

  

  return (
    <>
      {!loading && <h1>{country}</h1>}
      <div className="card">
        {!loading && <img src={imgUrl}></img>}
      </div>
    </>
  )
}

export default App
