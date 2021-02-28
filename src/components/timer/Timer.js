import React from 'react'
import './Timer.scss'


const Timer = () => {

    const [second, setSecond] = React.useState(120);
    const [miliSecond, setmiliSecond] = React.useState(100)
    
    // const padTime = (time) => {
    //     return String(time).length === 1 ? `0${time}` : `${time}`;
    //   };

    function padTime(num, padlen, padchar) {
        var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
        var pad = new Array(1 + padlen).join(pad_char);
        return (pad + num).slice(-pad.length);
    }
    
    const formatTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${padTime(seconds, 2)}:${padTime(miliSecond, 3)}`;
    }


    React.useEffect(() => {
        let timerSecond,
            timerMiliSecond;

        if(miliSecond > 0) {
          timerMiliSecond =  setTimeout(() => setmiliSecond(miliSecond => miliSecond - 1), 10);
        } else if (miliSecond === 0) {
          setmiliSecond(100)
          setSecond(second => second - 1)
        }
    
        return () => {
          if (timerSecond) {
            clearTimeout(timerSecond);
          } if (timerMiliSecond) {
            clearTimeout(timerMiliSecond);
          }
        };
      }, [miliSecond]);

    return (
        <div className="Timer">
            {second === 0 ? "Time over" : <div>Countdown: {formatTime(second)}</div>}
        </div>
    )
}

export default Timer