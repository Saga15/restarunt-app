import React from 'react'
import { useState } from 'react'

const RestoSearch = () => {
  const [searchData, setSearchData] = useState(null);
  /* const search = (key)=>{

    console.log();
  } */
  return (
    <div>
      <h2>Resto Search</h2>
      <input type='text'/>
    </div>
  )
}

export default RestoSearch