import copyToClipboard from './copyToClipboard.js'
import './css/canvasDisplay.css'
export const canvasDisplay = (topColor, bottomColor) =>  {
    let top = `rgb(${topColor[0]},${topColor[1]},${topColor[2]})`;
    let bottom = `rgb(${bottomColor[0]},${bottomColor[1]},${bottomColor[2]})`;
    
    return (
      <div className='canvas-display'>
        <div className='display color1'>Color: {`${top}`}</div>
            <canvas 
                    style={{backgroundImage:`linear-gradient(${top},${bottom})`}} 
                    id='canvas' onClick={() => copyToClipboard([top,bottom])}>
            </canvas>
            <div className='display color2'>Color: {`${bottom}`}</div>
      </div>)
}
