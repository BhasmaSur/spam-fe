import React from 'react'
import {useNavigate,Link} from "react-router-dom"

function Home() {
   

  return (
    <div>
        <Link to="/question">Questions</Link>
    </div>
  )
}

export default Home