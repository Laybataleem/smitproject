import React from "react";
import { Link } from 'react-router-dom';
import QuizResult from "./result";
 const MainPage=()=>{
return(

<div style={{
display:"flex",
backgroundImage:"linear-gradient(to right,rgb(222,217,217),#0874B9)",
width:"100%",
justifyContent:"space-between"
}}>
<navbar>
 <p>Blog App</p>
</navbar>


<div style={{display:"flex", width:"50%",justifyContent:"space-around"}}>

<p>
<Link to="/">Home</Link>
</p>
<p>
<Link to="/announcement">Announcement</Link>
</p>
<p>
<Link to="/showStu">StudentList</Link>
</p>\
<p>
<Link to="/ShowResult">Result</Link> 
</p>
<p>
<Link to="/StudentCreate">StudentCreate</Link>
</p>
<p style={{listStyle:"none",textDecoration:"none"}}>
<Link to="/login">Login</Link>
</p>
<p>
<Link to="/signup">Signup</Link>
</p>
{/* <div>
    <QuizResult/>
 </div> */}

</div>



</div>





)
}

export default MainPage