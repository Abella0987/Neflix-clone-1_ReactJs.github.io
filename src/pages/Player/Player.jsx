import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof: ""
  });

    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTBhMjMyOTQ1ZmU0MWVjYzFkYWViZjY0YjFiNDdhYSIsIm5iZiI6MTc1NTcyNzg0MS4xNzYsInN1YiI6IjY4YTY0N2UxNWExMGFkODA2ZTY5NzQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m9Np9eTHiH4KivRbbtMM_GV_QXhtXr17PhBF6ay9mZk'
    }
  };

  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])




  return (
    <div className='player'>
      <i class="fa-solid fa-arrow-left" onClick={()=>{navigate(-2)}}></i>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
