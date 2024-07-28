import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
function MusicPlayer(){
  const [click, setClick] = useState(0);
  const audioRef = useRef('0');
  // const [playprogress,setPlayprogress] = useState(0);
  const [duration,setDuration] = useState();
  const [min,setMin] = useState(0);
  useEffect(()=>{
    if(click==1){
      load();
      }
      else{
        console.log("clear");
      }
    },[click,setClick]);
    function load(){
      // let sec = audioRef.current.duration;
      // var remainingSeconds = sec % 60;
      // console.log(Math.floor(sec/60)+ ":" + (remainingSeconds).toFixed(0));
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
        setDuration((Math.floor(audioRef.current.currentTime)+1));
          // if(duration>60){
          //   setMin(min=>min+1)
          //   setDuration((Math.floor(audioRef.current.currentTime)+1));
          // }
          console.log(Math.floor(audioRef.current.currentTime));
          if(Math.floor(audioRef.current.currentTime) == Math.floor(audioRef.current.duration)){
            setClick(1);
            console.log("reached");
            clearInterval(intervalId);
          }
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
      <div className="playTime">
      <p>{duration ? (duration<10?min  + " : "+ "0" + duration : min  + " : "+ duration):"00"} - {audioRef.current.duration?Math.floor(audioRef.current.duration/60)+ ":" + (audioRef.current.duration%60).toFixed(0): "00:00"}</p> 
      </div>
        <div className="Control">
          <button><FaAngleDoubleLeft/></button>
          <button onClick={PlayPause}>{click==0?<FaPlay/>:<FaPause/>}</button>
          <button><FaAngleDoubleRight/></button>
        </div>
      </div>
    </>
   );
}
export default MusicPlayer;