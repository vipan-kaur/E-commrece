import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState(true)
const[verifyotp,setverifyotp]=useState("")
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    PhoneNo: "",
    otp:""
  })

  const navigate = useNavigate()

  const handleClick = () => {
    setLogin(prev => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log("name",name)
    console.log("value",value)
    setFormdata(prev => ({
      ...prev,
      [name]: value 
      
    }))
  }

const handleSubmit =async (e) => {
  e.preventDefault()

 

// if (!login) {
//   if (!formdata.name || !formdata.email || !formdata.password || !formdata.confirmPassword) {
//     alert("All fields required");
//     return;
//   }

//   if (formdata.password !== formdata.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   const users = JSON.parse(localStorage.getItem("logininfo")) || [];

//   const userExists = users.some(
//     (user) => user.email === formdata.email
//   );

//   if (userExists) {
//     alert("User already exists");
//     return;
//   }

//   users.push({
//     name: formdata.name,
//     email: formdata.email,
//     password: formdata.password,
//   });

//   localStorage.setItem("logininfo", JSON.stringify(users));

//   alert("Signup successful");
//   setLogin(true);
//   return;
// }
if (!login) {
  if (!formdata.name || !formdata.email || !formdata.password || !formdata.PhoneNo) {
    alert("All fields required");
   
  }


  try {
    const response = await fetch("http://localhost:1208/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
                },
      body: JSON.stringify({ 
        name: formdata.name,
        email: formdata.email,
        password: formdata.password,
        PhoneNo: formdata.PhoneNo
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Signup successful");
    setLogin(true);

  } catch (error) {
    console.error(error);
    alert("Server error");
  }

  return;
}


  // ===== LOGIN =====
  if (!formdata.email || !formdata.password) {
    alert("All fields required")
    return
  }

 try{
  const response= await fetch("http://localhost:1208/api/Loginss",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
     name: formdata.name,
     email: formdata.email,
     PhoneNo:formdata.PhoneNo,
     password:formdata.password
    })
    
  })
  const data = await response.json()
  if(!response.ok){
    alert(data.message|| "invalid email or password")
    return;
  }
  alert("otp sent")
  setverifyotp("otp")
 }catch(error){
  console.log(error.message)
 }
}

 const handleverifyOtp =async(e)=>{
  e.preventDefault();
  if(!formdata.otp){
    alert("please enter OTP")
    return;
  }
try{
  const response=await fetch("http://localhost:1208/api/verify",{
    method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({
    otp:formdata.otp,
    email:formdata.email
  })
  })
  const data=await response.json()
  if(!response.ok){
    alert(data.message || "otp verification failed")
    return;
  }
  alert("otp verified successfully")
  navigate("/")
}catch(error){
  console.log(error.message)
  alert("server error")
}
 }


// if (!formdata.email || !formdata.password) {
//   alert("All fields required");
//   return;
// }

// const users = JSON.parse(localStorage.getItem("logininfo")) || [];

// if (users.length === 0) {
//   alert("No user found. Please sign up.");
//   return;
// }

// const loggedInUser = users.find(
//   (user) =>
//     user.email === formdata.email &&
//     user.password === formdata.password
// );

// if (loggedInUser) {
//   alert("Login successful");

//   // optional: store logged-in user
//   localStorage.setItem("users", JSON.stringify(loggedInUser));

//   navigate("/");
// } else {
//   alert("Invalid email or password");
// }




  return (
   <div className="min-h-screen mt-2 flex items-center justify-center px-4">
  <div className="flex flex-col md:flex-row w-full max-w-4xl">

    <div className="relative bg-black text-white p-6 md:p-10 w-full md:w-1/2">
      <p className="text-sm font-semibold mb-6">COMPANY LOGO</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to...</h1>
      <p className="opacity-50 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <div className="w-full md:w-1/2 p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
        {login ? "Login" : "Signup"}
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>

        {!login && (
          <div>
            <label className="text-gray-600">User Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}

        <div>
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {verifyotp === "otp" && (
          <div className="otp-section">
            <label className="text-gray-600">OTP</label>
            <input
              type="number"
              name="otp"
              value={formdata.otp}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            <button
              onClick={handleverifyOtp}
              className="w-full bg-black text-white py-2 mt-2 rounded"
            >
              Verify OTP
            </button>
          </div>
        )}

        {!login && (
          <div>
            <label className="text-gray-600">Phone NO</label>
            <input
              type="Number"
              name="PhoneNo"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}

        <button className="w-full bg-black text-white py-3 rounded">
          {login ? "Login" : "Signup"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        New User?
        <button onClick={handleClick} className="text-blue-500 ml-1">
          {login ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  </div>
</div>)
}

export default Login
