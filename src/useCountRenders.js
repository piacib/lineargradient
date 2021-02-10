import { useRef } from 'react';
// logs number of renders 
export const useCountRenders = () => {
    const renders = useRef(0);
    console.log("renders ", renders.current++)
}