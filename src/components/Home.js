import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(49)

  let url = `https://api.github.com/users?since=${page}&per_page=${perPage}`

  const navigate = useNavigate() 
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [perPage, page])

  const gateHandler = (login) => {
    navigate(`/user/${login}`)
  }

  const handlePageChange = (page) => {
    setPage(page-1)
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
        <button className="load-more" onClick={() => setPerPage(perPage + 49)}>Load more</button>
        <div className="pagination-wrapper">
          <div class="pagination">
            <button href="#">&laquo;</button>
            <button href="#" className="active" onClick={(e)=> {handlePageChange(e.target.value)}}>1</button>
            <button href="#"  onClick={(e)=> {handlePageChange(e.target.value)}}>2</button>
            <button href="#" onClick={(e)=> {handlePageChange(e.target.value)}}>3</button>
            <button href="#" onClick={(e)=> {handlePageChange(e.target.value)}}>4</button>
            <button href="#" onClick={(e)=> {handlePageChange(e.target.value)}}>5</button>
            <button href="#" onClick={(e)=> {handlePageChange(e.target.value)}}>6</button>
            <button href="#" onClick={(e)=> {handlePageChange(e.target.value)}}>&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home