import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const [user, setUser] = useState({})
  const { login } = useParams()

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  const inputEl = useRef(null)

  console.log(inputEl)

  return (
    <div className="user">
      <div className="container">
        <div className="user-wrapper">
          <div className="user__image">
            <img src={user.avatar_url} alt={user.login} ref={inputEl} />
          </div>
          <div className="user__info">
            <h2>{user.name}</h2>
            <p>{user?.bio}</p>
          </div>
        </div>
      </div>
    </div>  // end of container
  )
}

export default User