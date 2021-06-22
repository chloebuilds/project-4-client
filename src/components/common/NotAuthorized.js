import React from 'react'
import { Link } from 'react-router-dom'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'

import ErrorPage from '../../styles/styled-components/ErrorPage'
import Section from '../../styles/styled-components/GradientBackground'

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
const gifsArray = [
  'X2xRuxdeNpIBi',
  'slk6MVFMfWShG',
  'InjEt0ISby6iKdiP7b',
  'bQloCmn3sCDeDbTsl1'
]
const randomizedGifs = gifsArray[Math.floor(Math.random() * gifsArray.length)]

export default function NotFound() {
  const [gif, setGif] = React.useState(null)
  React.useEffect(() => {
    const getGif = async () => {
      const { data } = await giphyFetch.gif(randomizedGifs)
      setGif(data)
    }
    getGif()
  }, [])
  return (
    <>
      <Section>
        <ErrorPage>
          <div className="light-card">
            <div className="error-card-container">
              <h1>uh-oh, you just made an unauthorized request!</h1>
              <div className="gif">{gif && <Gif gif={gif} width={400} />}</div>
              <p>
                You&apos;re not allowed to visit that page. Please{' '}
                <Link to="/login">Login</Link> in order to try again.
                <br />
                Otherwise, you can head back to the <Link to="/">homepage</Link>
              </p>
            </div>
          </div>
        </ErrorPage>
      </Section>
    </>
  )
}
