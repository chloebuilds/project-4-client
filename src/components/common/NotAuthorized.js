import React from 'react'
import { Link } from 'react-router-dom'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { Gif } from '@giphy/react-components'

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
const gifsArray = ['X2xRuxdeNpIBi', 'slk6MVFMfWShG', 'InjEt0ISby6iKdiP7b', 'bQloCmn3sCDeDbTsl1']
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
        <p>Unauthorized request!</p> 
        {gif && <Gif gif={gif} width={400} />}
        <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> in order to proceed. Otherwise, you can head back to the <Link to="/">homepage</Link>.</p>
      </div>
    </div>
  )
}

