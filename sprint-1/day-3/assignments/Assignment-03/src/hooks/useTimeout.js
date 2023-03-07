import { useEffect, useRef, useState } from "react";

const useTimeout = (delay) => {
    const [ready, setReady] = useState(false)
    // let {current: ready} = useRef(false)
    
    
    useEffect(()=>{
        setTimeout(()=>{
            setReady((prev)=> !prev)
        },delay)
    },[])
    
return ready
};

export default useTimeout;
