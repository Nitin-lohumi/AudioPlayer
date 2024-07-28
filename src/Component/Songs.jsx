
function Songs(){
    const data =[
        {
         id:1,
         name:'song1',
         url: '#',
         song_photo: "",
         duration: "2:30"
        },
        {
            id:2,
            name:'song2',
            url: '#',
            song_photo: "",
            duration: "2:30"
           },
        {
            id:3,
            name:'song3',
            url: '#',
            song_photo: "",
            duration: "2:30"
        },
        {
            id:3,
            name:'song3',
            url: '#',
            song_photo: "",
            duration: "2:30"
        },
        {
            id:3,
            name:'song3',
            url: '#',
            song_photo: "",
            duration: "2:30"
        },
        {
            id:3,
            name:'song3',
            url: '#',
            song_photo: "",
            duration: "2:30"
        }
    ];
    let store;
    data.map((value)=>{
        console.log(value);
    })
   return (
    <>
    
        <h1>songs</h1>
        <div className="song_list" >
            {data.map((value)=>{
               store = <div className="song_" key={value.id}>
               <img src="./Images/images (1),,.jpg" alt="song image" />
               <h2>{value.name}</h2>
               <p>{value.duration}</p>
           </div>
           return store;
             })}
        </div>
    </>
   )

}
export default Songs;