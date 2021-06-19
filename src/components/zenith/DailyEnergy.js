import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


function DailyEnergy() {
// const 
  return (
    <>
      <h5>Energy level</h5>
      <Slider 
        min={1} max={11} step={1}
        // marks={}
      
      />

    </>
  )
}

export default DailyEnergy