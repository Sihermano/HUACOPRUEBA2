import { useEffect, useState } from "react"

const calcTimeLeft = t => {
    if (!t) return 0;
    const left = t - new Date().getTime();

    if (left < 0) return 0;
    return left;
}

export default function useCountdownr(endtime){
    const [ end,setEndTime] = useState(endtime);
    const [timeleft,setTimeleft] = useState(()=> calcTimeLeft(end));

    useEffect(() => {
        setTimeleft(calcTimeLeft(end));

        const timer = setInterval(() => {
           const targetLeft= calcTimeLeft(end);
           setTimeleft(targetLeft)
           if(targetLeft === 0){
            clearInterval(timer);

           } 
        });

        return () => clearInterval(timer);
    },  [end]);
    
    

    return [timeleft,setEndTime];

}