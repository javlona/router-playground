import React, {useState, useEffect} from 'react'


function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  
  return (
    <div className="home">
      <div className="container">
        <ul className="users-wrapper">
        {
          loading ? <div>Loading...</div> :
          users.map(user => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <p>{user.login}</p>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default Home