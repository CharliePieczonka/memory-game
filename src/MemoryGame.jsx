import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GameCard from './GameCard';

function MemoryGame() {
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

        setData(result[rand])
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
      <div className="header">
        <h1>Memory Game</h1>
        <div className="icons-div">
          <a href="https://www.linkedin.com/in/charlie-pieczonka/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="header-icon"/></a>
          <a href="https://github.com/CharliePieczonka" target="_blank"><FontAwesomeIcon icon={faGithub} className="header-icon"/></a>
        </div>
      </div>
      <div className="main">
        {!loading && 
          <GameCard 
            countryData={data}
          />
        }
      </div>
    </>
  )
}

export default MemoryGame
