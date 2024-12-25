import React, {useState} from 'react'
import SearchBar from "./SearchBar"
import HomePageInformation from "./HomePageInformation"


const Home = () => {
  const [searchTerm,setSearchTerm]=useState("")
 
  const handlerSearchTerm=(e)=>{
    setSearchTerm(e.target.value)
  }
  console.log("selected",searchTerm)
  return (
    <>
      <SearchBar handlerSearchTerm={handlerSearchTerm}searchTerm={searchTerm} />
      <HomePageInformation searchTerm={searchTerm}/>
    </>
  )
}

export default Home
