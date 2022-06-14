import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  let url = `https://api.github.com/users?since=${page}&per_page=100`

  const navigate = useNavigate() 
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  const gateHandler = (login) => {
    navigate(`/user/${login}`)
  }
  
  return (
    <div className="home">
      <div className="container">
        <input type="search" placeholder="Search" />
        <ul className="users-wrapper">
        {
          loading ? <div>Loading...</div> :
          users.map(user => (
            <li key={user.id} onClick={() => gateHandler(user.login)} >
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