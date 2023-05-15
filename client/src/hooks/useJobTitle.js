import {useEffect, useState} from 'react';

export const useJobTitle = () =>{
    const period = 350;
      const deletingPeriod = 100;
      const [loopNum,setLoopNum] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      const [delta,setDelta] = useState(period);
      const [text,setText] = useState('');
      const toRotate = ['Web Developer', "Software Developer", "Full-Stack Developer"];
  
  
  
      useEffect(()=>{
          let ticker = setInterval(()=>{
              tick();
          },delta)
  
          return ()=>{ clearInterval(ticker)};
          // eslint-disable-next-line react-hooks/exhaustive-deps
      },[text]);
  
      const tick = ()=>{
        
          let i = loopNum % toRotate.length;
          let fullText = toRotate[i];
          let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length + 1);
  
          setText(updatedText);
  
          if(isDeleting){
              setDelta(deletingPeriod);
          }
  
          if(!isDeleting && updatedText === fullText){
              setIsDeleting(true);
              setDelta(deletingPeriod);
          } else if(isDeleting && updatedText === ''){
              setIsDeleting(false);
              setLoopNum(loopNum + 1);
              setDelta(period);
            } else {
              
            }
      }
  return text;
  }