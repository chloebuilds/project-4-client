import React from 'react'
import axios from 'axios'


function ZenQuote() {
  const [quoteData, setQuoteData] = React.useState([])
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          'https://zenquotes.io/api/random'
        )
        setQuoteData(response.data)
        
      } catch (e) {
        console.log(e)
        setError(e.response.data.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <>
      <h3>Daily Inspiration</h3>
      <div>
        {loading && <p className="loading-error">Loading..</p>}
        {error && <p className="loading-error">Cannot retrieve zen quote, sorry!</p>}
      return (
        <p>{quoteData.h}</p>
      )
      </div>
    </>
  )
}

export default ZenQuote