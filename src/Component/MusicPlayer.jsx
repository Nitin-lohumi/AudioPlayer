import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { data } from "../App";
function MusicPlayer({DATA,index}){
  // const [indexes,setIndexed] = useState();
  const [count,setCount] = useState(0);
  const [next,setNext] = useState();
  const [click, setClick] = useState(0);
  const audioRef = useRef('0');
  const [duration,setDuration] = useState();
  const [min,setMin] = useState(0);
  useEffect(()=>{
      if(DATA){
          index(DATA);
      }
  },[next,setNext]);
   function PlayPause(){
    let intervalId;
    if(click==0){
      if(DATA){
        audioRef.current.play();
      intervalId = setInterval(()=>{
        setDuration(Math.floor(audioRef.current.currentTime)+1);
        if(Math.floor(audioRef.current.currentTime)>60){
          setMin(Math.floor((audioRef.current.currentTime)/60));
          setDuration((Math.floor(audioRef.current.currentTime)+1)-60);
          if(audioRef.current.currentTime>=120){
            setDuration((Math.floor(audioRef.current.currentTime)+1)-120);
          }
          if(audioRef.current.currentTime>=180){
            setDuration((Math.floor(audioRef.current.currentTime)+1)-180);
          }
          if(audioRef.current.currentTime>=240){
            setDuration((Math.floor(audioRef.current.currentTime)+1)-240);
          }
          if(audioRef.current.currentTime>=300){
            setDuration((Math.floor(audioRef.current.currentTime)+1)-300);
          }
          if(audioRef.current.currentTime>=360){
            setDuration((Math.floor(audioRef.current.currentTime)+1)-360);
          }
        } 
          if(Math.floor(audioRef.current.currentTime) == Math.floor(audioRef.current.duration)){
            setClick(1);
            console.log("reached");
            clearInterval(intervalId);
          }
        },1000);
        setClick(1);
      }else{
        setClick(0);
      }
        }
    else{
      audioRef.current.pause();
      setClick(0);
      clearInterval(intervalId);
    }
  }
  function left(){
    if(DATA){
      if(DATA.id!=1||DATA.id>1){
        setCount(count=>count+1);
        // console.log(DATA.id);
        // console.log(data[DATA.id-count-2]-1);
        setNext(data[DATA.id-1-1]);
        DATA.id=DATA.id-1;
        // console.log(count);
      }
    }
  }
  function right(){
    if(DATA){
      if(DATA.id==6||DATA.id<6){  
        setCount(count=>count+1);
        // console.log(DATA.id);
        // console.log(data[DATA.id]);
        setNext(data[DATA.id]);
        DATA.id=DATA.id+1;
      }
    }
  }
   return (
    <>
     <div className="music_area" key={DATA?data.id:"0"}>
        <img src={next?next.song_photo:(DATA?DATA.song_photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ioL-ybwiSbDViD_60w_gfD9Z2p5vI7SGcQ&s")} height={150} width={150} alt="songg" />
        <h3>{next?next.name:(DATA?DATA.name:"")}</h3>
        <audio controlsList="nodownload noplaybackrate" ref={audioRef}>
          <source src={next?next.url:(DATA?DATA.url:"")}/>
        </audio>
      <div className="playTime">
      <p>{duration? (min+" :" + (duration>60?duration:(duration<10?"0"+duration:duration))):""} 
      - {next?next.duration:(DATA?DATA.duration:"select any song")}</p> 
      </div>

        <div className="Control">
          <button onClick={left} style={DATA?(DATA.id==1||DATA.id<1?{opacity:0.3}:{opacity:1}):{opacity:0.3}}><FaAngleDoubleLeft/></button>
          <button onClick={PlayPause} style={DATA?{opacity:1}:{opacity:0.3}}>{click==0?<FaPlay/>:<FaPause/>}</button>
          <button onClick={right} style={DATA?(DATA.id==7||DATA.id>7?{opacity:0.3}:{opacity:1}):{opacity:0.3}}><FaAngleDoubleRight/></button>
        </div>
      </div>
    </>
   );
}
export default MusicPlayer;