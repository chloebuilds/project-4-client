import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


function DailyEnergy() {
// const 
  return (
    <>
      <h5>Energy level</h5>
      <Slider 
        min={1} max={10} step={1}
        marks={{ 10: 10 }}

      
      />

    </>
  )
}

export default DailyEnergy