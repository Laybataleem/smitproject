import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBullseye } from 'react-icons/fa';
import MainPage from '../MainPage'

export default function Announcement() {


const [getAnnouncementValue, setgetAnnouncementValue] = useState([])
const [showcreate, setshowcreate] = useState(false)
const [getValue, setgetValue] = useState("")
const [isEdit, setisEdit] = useState(false)
const [getvaueid, setgetvaueid] = useState("")


const getAnnouncement = ()=>{


  axios.get('https://attendencebackend.vercel.app/alert/getallannouncement')
  .then(function (response) {
    // handle success
    console.log(response.data.announcement);

    setgetAnnouncementValue(response.data.announcement)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


}
const updateAnnouncement=(item)=>{

console.log(item)
setgetValue(item.announcement)
setgetvaueid(item._id)
setshowcreate(true)
setisEdit(true)

}


const createAnnouncement = ()=>{
if(isEdit){

  console.log(getvaueid,getValue)
  axios.post(`https://attendencebackend.vercel.app/alert/updateannounement?id=${getvaueid}`, {
    announcement:getValue
  })
  .then(function (response) {
    console.log(response.data);
    setshowcreate(false)
    getAnnouncement()
// yr kha kia kia liky jarhy? kia samjh nahi aya ?ni kbiuper kia likh rhy kbi khaia  oe voice mas amjha ta hu 
  })
  .catch(function (error) {
    console.log(error.message);
  })
}else{



  axios.post('https://attendencebackend.vercel.app/alert/announcement', {
    announcement:getValue
  })
  .then(function (response) {
    console.log(response.data);
    setshowcreate(false)
    getAnnouncement()

  })
  .catch(function (error) {
    console.log(error.message);
  });

}

}


useEffect(() => {
  getAnnouncement()
}, [])

const deleteAnnouncement =()=>{
  
}
    return (
    <div>
      <MainPage/>
      <div style={{ width: '100%', height: '10%',backgroundColor:"#24aaa3",display:"flex",justifyContent:"space-between" }}>
        <img
          src="https://cwcreative.com/assets/image-cache/blog/Eye_catching_ways_to_make_announcements.2aee7ba1.jpg"
          alt="Announcement Image"
          style={{ width: '30%', height: '100%', objectFit: 'contain' }}
        />
<div style={{alignSelf:"end",paddingBottom:40,paddingRight:30}}>

        <button onClick={()=>setshowcreate(true)} >Create </button>
</div>
      </div>



      <div>


        {
          getAnnouncementValue?
          getAnnouncementValue.map((item,index)=>{
            // console.log(item._id)

            return(
              <div style={{display:"flex" , marginBottom:10,marginTop:30,backgroundColor:"lightblue"}}>

                <p style={{textAlign:"center",width:"90%"}}> 
                
                 {item.announcement}
                </p> 
  
                <button style={{width:300,marginRight:20}} onClick={()=>updateAnnouncement(item)} >
                  Edit
                </button>
             <button  style={{width:300}} >
                  Delete
                </button>


              </div>
            )
          })

          :
          <p style={{textAlign:"center"}}>
                   No Announcement 
                </p>

        }

      </div>



{/*  create announcement/ */}

{showcreate ?
  

      <div style={{position:"absolute",backgroundColor:"rgba(211, 211, 211, 0.8)",width:"100%",height:"100%",top:0,}}>
<div style={{display:"flex"}}>

<div style={{backgroundColor:"gray", width:45,height:45,borderRadius:30,textAlign:'center',cursor:"pointer"}} onClick={()=>setshowcreate(false)} >
<p style={{fontSize:18}}>x</p>

</div>
</div>
<div style={{}}>

<div style={{paddingTop:150}}>
<input type="text" 
                                                placeholder="Enter ANNOUNCEMENT"
                                                value={getValue}
                                                onChange={(e) => setgetValue(e.target.value)}
                                                required
                                                
                                                
                                                
                                                style={{width:"60%",alignSelf:"center"}}            />
<button style={{width:"10%" ,marginLeft:"50%"}} onClick={createAnnouncement}>Submit</button>
</div>



</div>


      </div>

: null
}
    </div>
  );
}
