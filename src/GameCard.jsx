function GameCard ({countryData}) {
  console.log(countryData)
  let url = countryData.flags.png
  let name = countryData.name.common


  return (
    <>
      <div>
        <h1>{name}</h1>
        <div>
          <img src={url}></img>
        </div>
      </div>
    </>
  )
}

export default GameCard