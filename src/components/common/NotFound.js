import React from 'react'
import { Link } from 'react-router-dom'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { Gif } from '@giphy/react-components'

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
const gifsArray = ['SnKuXWPgAFkFerONjc', '3zDdFSPALuCe6C43nM', 'FJznB4jaJLckw', 'OfpdDt12u1Psk', '3o6MbphEmqNSt3Equ4', '3o7aTskHEUdgCQAXde', '2t9mb0HwTVn3mHj8AZ', '1bAdvIjqaXCSc', 'l2JehQ2GitHGdVG9y', '26n6WywJyh39n1pBu', 'l1Ku7vCHAoh6qcCaY', 'xT0GqCd3OEQdXNdIME', 'PWwC2oE1oipEs', '93d2t8B7K5jswlC4mO', 'UWJlDGUH5JikuI3PC1']
const randomGifs = gifsArray[Math.floor(Math.random() * gifsArray.length)]

export default function NotFound() {
  const [gif, setGif] = React.useState(null)
  React.useEffect(() => {
    const getGif = async () => {
      const { data } = await giphyFetch.gif(randomGifs)
      setGif(data)
    }
    getGif()
  }, [])
  return (
    <div >
      <div>
        <p>
          Uh oh! The requested URL was not found on our server. <br/>
          Head back to  
          <Link className="homepage-link" to="/"> Zenith homepage</Link> </p>
      </div>
      <div>
        {gif && <Gif gif={gif} width={400} />}
      </div>
    </div>
  )
}

