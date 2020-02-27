import React, { useState } from "react"
import ./styles/app.css

export default props => {
  const [name, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [website, setWebsite] = useState("")

  return (
    <div>
      <h1>Profile Form - All fields required</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Jane" value={name} />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="blah@why.com"
          value={email}
        />
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="myusername"
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} />
        <label htmlFor="confirmpassword">Confirm password</label>
        <input type="password" id="password" value={confirmpassword} />
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          placeholder="Please enter a valid URL"
          value={website}
        />
      </form>
      <button className="submit">Submit</button>
    </div>
  )
}
