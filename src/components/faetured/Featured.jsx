import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
      <div className="left">
        <h1>Find the right <i>freelance</i> service, right away</h1>
        <div className="search">
          <div className="searchInput">
            <img src="./img/search.png" alt="search pic" />
            <input type="text" placeholder= 'Search for any Services.....' />
          </div>
          <button>Search</button>
        </div>
        <div className="popular">
          <span>Popular:</span>
          <button>Web Design</button>
          <button>Wordpress</button>
          <button>Logo Design</button>
          <button>AI Services</button>
        </div>
      </div>
      <div className="right">
        <img src="./img/man.png" alt="my image" />
      </div>
      </div>
    </div>
  )
}

export default Featured