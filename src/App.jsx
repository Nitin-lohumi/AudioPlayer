import Music from "./Component/Music";
import './App.css';
export const data =[
  {
   id:1,
   name:'flow',
   url: '/public/Audio/flow-211881.mp3',
   song_photo: "./Images/images (1),,.jpg",
   duration:"2:11"
  },
  {
      id:2,
      name:'amalgam',
      url: '/public/Audio/amalgam-217007.mp3',
      song_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JFyVMUGB2hCmAhFXOdCydqzgsCHd2BAzEA&s",
      duration:"4:14"
     },
  {
      id:3,
      name:'slow-motion',
      url: '/public/Audio/in-slow-motion-inspiring-ambient-lounge-219592.mp3',
      song_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF8dc5Huhb3LPZhiMnnoJYbnaO97FZIlb-A&s",
      duration: "1:58"
  },
  {
      id:4,
      name:'night-detective',
      url: '/public/Audio/night-detective-226857.mp3',
      song_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s",
      duration : "1:55"
  },
  {
      id:5,
      name:'nightfall-future',
      url: '/public/Audio/nightfall-future-bass-music-228100.mp3',
      song_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBII0zkwUkElw0wYDIqqsgqJM3qPQiPWCvqMrAY1BuYZSABzyL1dlMsCDmxXcEbhfJcpE&usqp=CAU",
      duration:"2:21"
  },
  {
      id:6,
      name:'no-place-to-go',
      url: '/public/Audio/no-place-to-go-216744.mp3',
      song_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnZ414OXBVvKccqMHO8voOrYLV9VYxDdU_PwJdLHVxhfQG2QV-hJMsOk-JMGAYwTFqUM&usqp=CAU",
      duration:"5:37"
  },
  {
    id:7,
    name:'demo',
    url: '/public/Audio/no-place-to-go-216744.mp3',
    song_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnZ414OXBVvKccqMHO8voOrYLV9VYxDdU_PwJdLHVxhfQG2QV-hJMsOk-JMGAYwTFqUM&usqp=CAU",
    duration:"5:37"
}
];
function App(){
  return(
    <>
    <div className="music_system">
    <Music/>
    </div>
    </>
  )
}
export default App;