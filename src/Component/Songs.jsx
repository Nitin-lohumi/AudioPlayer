import { useEffect, useState } from "react";
import { data } from "../App";
// import { indexes } from "./MusicPlayer";
function Songs({setData,indexes}) {
    const[selected,setSelected] = useState(10);
    const [move,setmove] = useState(0);
     useEffect(()=>{
         if(indexes){
            setmove(indexes);
         }
     },[indexes]);
  let store;
  return (
    <>
      <div className="song_list">
        {data.map((value,index) => {
          store = (
            <div
              className={move.id-1==index?"selected":"song_"}
              key={value.name}
              onClick={() =>
              { 
                setSelected(index);
                 return setData(value);
              }
              }
            >
              <img src={value.song_photo} alt="song image" />
              <h2>{value.name}</h2>
              <p>{value.duration}</p>
            </div>
          );
          return store;
        })}
      </div>
    </>
  );
}
export default Songs;
