import React from 'react'
import { Link } from 'react-router-dom'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'

import ErrorPage from '../../styles/styled-components/ErrorPage'
import Section from '../../styles/styled-components/GradientBackground'

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
const gifsArray = [
  'SnKuXWPgAFkFerONjc',
  '3zDdFSPALuCe6C43nM',
  'FJznB4jaJLckw',
  'OfpdDt12u1Psk',
  '3o6MbphEmqNSt3Equ4',
  '3o7aTskHEUdgCQAXde',
  '2t9mb0HwTVn3mHj8AZ',
  '1bAdvIjqaXCSc',
  'l2JehQ2GitHGdVG9y',
  '26n6WywJyh39n1pBu',
  'l1Ku7vCHAoh6qcCaY',
  'xT0GqCd3OEQdXNdIME',
  'PWwC2oE1oipEs',
  '93d2t8B7K5jswlC4mO',
  'UWJlDGUH5JikuI3PC1'
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
              <h1>Uh oh, the requested URL was not found on our server!</h1>{' '}
              <br />
              <h2>
                Best head back to
                <Link className="homepage-link" to="/">
                  {' '}
                  Zenith homepage
                </Link>{' '}
              </h2>
              <div className="gif">{gif && <Gif gif={gif} width={400} />}</div>
            </div>
          </div>
        </ErrorPage>
      </Section>
    </>
  )
}
