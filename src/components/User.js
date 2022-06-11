import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const [user, setUser] = useState({})
  const {login} = useParams()
  console.log(login)

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <div className="user">
      <div className="container">

      </div>  
    </div>
  )
}

export default User