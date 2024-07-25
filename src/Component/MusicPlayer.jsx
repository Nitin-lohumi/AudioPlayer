import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
function MusicPlayer(){
  const [click, setClick] = useState(0);
  const audioRef = useRef('0');
  const [playprogress,setPlayprogress] = useState(0);
  const [duration,setDuration] = useState(audioRef.current.duration);
  useEffect(()=>{
    if(click==1){
      load();
      }
      else{
        console.log("clear");
      }
    },[click,setClick]);

    function load(){
      let sec = audioRef.current.duration;
      var remainingSeconds = sec % 60;
      console.log(Math.floor(sec/60)+ ":" + (remainingSeconds).toFixed(0));
    }
    // function playTime(){
    //   if(click==0){
    //     console.log(Math.floor(audioRef.current.currentTime));
    //     setDuration(Math.floor(audioRef.current.currentTime));
    //   }
    // }
   function PlayPause(){
    let intervalId;
    if(click==0){
      audioRef.current.play();
      intervalId = setInterval(()=>{
          console.log(Math.floor(audioRef.current.currentTime));
          setDuration(Math.floor(audioRef.current.currentTime));
        },1000);
      setClick(1);
    }
    else{
      audioRef.current.pause();
      setClick(0);
      clearInterval(intervalId);
    }
  }
  
   return (
    <>
      <div className="music_area">
        <img src="./Images/images (1),,.jpg" height={150} width={150} alt="" />
        <h3>music name</h3>
        <audio controlsList="nodownload noplaybackrate" ref={audioRef}>
          <source src="\Audio\music1.m4a"/>
        </audio>
      <p>{duration}</p>  : <p>{Math.floor(audioRef.current.duration/60)+ ":" + (audioRef.current.duration%60).toFixed(0)}</p>
        <div className="Controls">
          <button><FaAngleDoubleLeft/></button>
          <button onClick={PlayPause}>{click==0?<FaPlay/>:<FaPause/>}</button>
          <button><FaAngleDoubleRight/></button>
        </div>
      </div>
    </>
   )
}
export default MusicPlayer;