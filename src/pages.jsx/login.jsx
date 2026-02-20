import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState(true)

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

const handleSubmit = (e) => {
  e.preventDefault()

 

if (!login) {
  if (!formdata.name || !formdata.email || !formdata.password || !formdata.confirmPassword) {
    alert("All fields required");
    return;
  }

  if (formdata.password !== formdata.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("logininfo")) || [];

  const userExists = users.some(
    (user) => user.email === formdata.email
  );

  if (userExists) {
    alert("User already exists");
    return;
  }

  users.push({
    name: formdata.name,
    email: formdata.email,
    password: formdata.password,
  });

  localStorage.setItem("logininfo", JSON.stringify(users));

  alert("Signup successful");
  setLogin(true);
  return;
}


  // ===== LOGIN =====
  if (!formdata.email || !formdata.password) {
    alert("All fields required")
    return
  }

  const saveddata = JSON.parse(localStorage.getItem("logininfo"))

  if (!saveddata) {
    alert("No user found. Please sign up.")
    return
  }

if (!formdata.email || !formdata.password) {
  alert("All fields required");
  return;
}

const users = JSON.parse(localStorage.getItem("logininfo")) || [];

if (users.length === 0) {
  alert("No user found. Please sign up.");
  return;
}

const loggedInUser = users.find(
  (user) =>
    user.email === formdata.email &&
    user.password === formdata.password
);

if (loggedInUser) {
  alert("Login successful");

  // optional: store logged-in user
  localStorage.setItem("users", JSON.stringify(loggedInUser));

  navigate("/");
} else {
  alert("Invalid email or password");
}

}


  return (
    <div className="min-h-screen mt-5 flex items-center justify-center">
      <div className="flex">

        <div className="relative bg-black text-white p-10">
          <p className="text-sm font-semibold mb-6">COMPANY LOGO</p>
          <h1 className="text-4xl font-bold mb-4">Welcome to...</h1>
          <p className="opacity-50 w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-black mb-2">
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

            {!login && (
              <div>
                <label className="text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
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
    </div>
  )
}

export default Login
