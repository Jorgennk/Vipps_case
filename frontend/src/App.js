//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [wikiq, setWikiq] = useState("")


  const fetchData = (wikiquery) => {
    setLoading(true)
    axios
    .get(`http://localhost:5000/api/${encodeURIComponent(wikiquery)}`)
    .then(res => {
      console.log(res.data)
      setContent(res.data.result)
      setLoading(false)
    })
  }


  useEffect(() => {
    fetchData(wikiq)
  }, [])

  return (
    <div className = "wrapper">
      <h1>Wikipedia queries</h1>
      <h2>Write the name of the article you want and see how many times it is mentioned in the text!</h2>

      <div className = "text-wrapper">
        <input className = "text-field" type="text" placeholder = "Write your query here" 
        value = {wikiq} onChange = {e => setWikiq(e.target.value)}/>
      </div>
      <div className = "button-wrapper">
        <button className = "button" onClick = {() => fetchData(wikiq)}>Go!</button>
      </div>
      <div className = "content-wrapper">
      {content === ""? <p>Your query will appear here</p>:
      loading?<p>Loading...</p>:
        <p>Number of times mentioned: {content}</p>
      }
      </div>
    </div>
  )
}

export default App;

/*
const App = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [qeuryFromButtonClick, setIdFromButtoClick] = useState(1)

  const handleClick = () => {
    setIdFromButtoClick(id)
  }

  useEffect(async () => {
    axios
    .get(`http://127.0.0.1:5000/${qeuryFromButtonClick}`)
    .then( res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [qeuryFromButtonClick])

  return (
    <div>
      <input type="text" placeholder = "Write your query here!" value = {id} onChange = {e => setId(e.target.value)}/>
      <button type = "button" onClick = {handleClick}> Fetch!</button>
      <div>{post.any}</div>
    </div>
  )
}

export default App;

*/

/*
const App = () => {
return (
  <div>
  </div>
)

}

export default App;
*/

