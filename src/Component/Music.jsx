import MusicPlayer from "./MusicPlayer";
import Songs from "./Songs";
import { useState } from "react";
function Music(){
    const [DATA,setData] = useState();
    const [indexes,setIndexed] = useState();
    const Renderclick =({data})=>{
        return <MusicPlayer DATA={data} index={setIndexed} />
    }
    // console.log(indexes?indexes:"");
    return(
        <>
         <div className="music_player">
            <div className="Music">
            <Renderclick data={DATA}/>
            <Songs setData={setData} indexes={indexes}/>
            </div>
         </div>
        </>
    );
}
export default Music;

