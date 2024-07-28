import MusicPlayer from "./MusicPlayer";
import Songs from "./Songs";
function Music(){
    return(
        <>
         <div className="music_player">
            <div className="player">
            <MusicPlayer/>
            </div>
            <div className="Music">
            <Songs/>
            </div>
         </div>
        </>
    )
}
export default Music;

