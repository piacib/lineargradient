import './css/canvas.css';
import {useMousePosition} from './useMousePosition.js'
import {useWindowDimensions} from './useWindowDimensions'
import useMousetrap from 'react-hook-mousetrap';
import { useState } from 'react';
import {canvasDisplay} from './canvasDisplay.js'
import Sidebar from './Sidebar.js'

const ToggleDisplay = (props) => {
    // set colors
    let topColorSet = props.topColorSet;
    let bottomColorSet = props.bottomColorSet;
    
    // variable colors
    let topColorVar = props.topColorVar;
    let bottomColorVar = props.bottomColorVar;

    if        (topColorSet === false && bottomColorSet === false){
        return canvasDisplay(topColorVar, bottomColorVar);
    } else if (topColorSet === false && bottomColorSet !== false) {
        return canvasDisplay(topColorVar,bottomColorSet)
    } else if (topColorSet !== false && bottomColorSet === false) {
        return canvasDisplay(topColorSet,bottomColorVar)
    }
    return (<h1>ERROR</h1>)
}

const Canvas = () => {
    // set States
    const [topColorSet, setTopColorSet] = useState(false)
    const [bottomColorSet, setBottomColorSet] = useState(false)
    
    // color measurements
    const mousePosition = useMousePosition();
    const {height,width} = useWindowDimensions();
    let sidebarWidthCSSVar = getComputedStyle(document.documentElement).getPropertyValue('--grid-template-column').split(' ')[1];
    let sidebarWidth = parseFloat(sidebarWidthCSSVar.substring(0,sidebarWidthCSSVar.length-2));
    let r = mousePosition.y / height * 255;
    let g = mousePosition.x/ (width * (1-sidebarWidth/100)) * 255;
    if (g > 255) {
        g = 255;
    }

    // set as state so it can be changed with + and -
    let [b,setB] = useState(0);
    let increaseB = (b) => {
        if (b < 255) {
            setB(b+3);
        } 
    };
    let decreaseB = (b) => {
        if (b > 1) {
            setB(b-3);
        } 
    };
    
    let topColorVar = [Math.floor(r), Math.floor(g), Math.floor(b)]
    let bottomColorVar = [Math.floor(g), Math.floor(r), Math.floor(b)]
    
    // key commands
    useMousetrap('+', () => increaseB(b));
    useMousetrap('-', () => decreaseB(b));
    useMousetrap('t',() => setTop());
    useMousetrap('b',() => setBottom());
    useMousetrap('r',() => reset());
    
    // key command functions
    let setTop = () => {
        setTopColorSet(topColorVar)
        setBottomColorSet(false)
    };
    let setBottom = () => {
        setTopColorSet(false)
        setBottomColorSet(bottomColorVar)
    };
    let reset = () => { 
        setTopColorSet(false);
        setBottomColorSet(false);
    };
    
    // change text color  
    if ((r+g+b)< 150 ) {
      Array.from(document.getElementsByClassName('display')).map(x=> x.style.color = 'white')
    } else {
      Array.from(document.getElementsByClassName('display')).map(x=> x.style.color = 'black')
    }
    return (
      <div className="App" > 
      <ToggleDisplay topColorSet={topColorSet} bottomColorSet={bottomColorSet} topColorVar={topColorVar} bottomColorVar={bottomColorVar} />
      <Sidebar />
      </div>
      );
}

export default Canvas;