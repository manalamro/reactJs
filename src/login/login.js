import React from "react";
import '../login/login.css'

const Login = () => 
{
 return(

<div className='body'>

  <div class= "content, panel">
    <h5>تسجيل الدخول </h5>
    <form className="form">
      <h6>ايميل المستخدم</h6>
      <br/>
    <label>

    <input type ="text" required/>
    </label>
    <br/>
    <h6>كلمة السر</h6>
    <br/>
    <label>
    <input
            type ="text"
            required
    />
    </label> 

   <button  type="submit"> تسجيل الدخول</button>
    </form>
  </div>
  <div>
    <div class= "sidebar,panel">
    <img src={require('../assets/ooii.png')} alt=""></img>
    </div>
  </div>
</div>   

)
  
}

export default Login;
