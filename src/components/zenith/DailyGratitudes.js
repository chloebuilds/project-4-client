import React from 'react'

function DailyGratitudes() {

  const [ gratitudes, setGratitudes ] = React.useState({
    gratitude1: { draft: '', final: '' },
    gratitude2: { draft: '', final: '' },
    gratitude3: { draft: '', final: '' },
  })

  const handleChange = (e) => {
    setGratitudes({ ...gratitudes, [e.target.name]: { draft: e.target.value, final: '' } })
  }

  const handleBlur = (e) => {
    setGratitudes({ ...gratitudes, [e.target.name]: { draft: '', final: e.target.value } })
  }

  return (
    <>
      <h3>Daily Gratitude</h3>
      <label>1.</label>
      {gratitudes.gratitude1.final ? <p>{gratitudes.gratitude1.final}</p> : <input 
        placeholder="I am grateful for.." 
        name="gratitude1" 
        value={gratitudes.gratitude1.draft} 
        onChange={handleChange} 
        onBlur={handleBlur} 
        onKeyDown={e => e.key === 'Enter' && handleBlur()}
      />}
      <label>2.</label>
      {gratitudes.gratitude2.final ? <p>{gratitudes.gratitude2.final}</p> : <input 
        placeholder="I am grateful for.." 
        name="gratitude2" 
        value={gratitudes.gratitude2.draft} 
        onChange={handleChange} 
        onBlur={handleBlur} 
      />}
      <label>3.</label>
      {gratitudes.gratitude3.final ? <p>{gratitudes.gratitude3.final}</p> : <input 
        placeholder="I am grateful for.." 
        name="gratitude3" 
        value={gratitudes.gratitude3.draft} 
        onChange={handleChange} 
        onBlur={handleBlur} 
      />}
    </>
  )
}

export default DailyGratitudes