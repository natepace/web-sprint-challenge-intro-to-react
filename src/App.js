import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';
import styled from 'styled-components';
import './index.css';
// import Details from './components/Details';


function App() {
  const [starWarsData, setStarWarsData] = useState([]);
  // const [currentFriendId, setCurrentFriendId] = useState('1')
  // const openDetails = id => {
  //   setCurrentFriendId(id)
  // }

  // const closeDetails = () => {
  //   setCurrentFriendId(null)
  // }
  // useEffect(() => {
  //   axios
  //     .get('https://swapi.dev/api/people/')
  //     .then((res) => {
  //       setStarWarsData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err, "you suck");
  //     })


  // }, []);
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res)=>{
      setStarWarsData(res.data)
    })
    .catch()
  },[])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // console.log(starWarsData.results);
  return (
    <Stylediv className="App">
      <StyleBig className="Header">STAR WARS CHARACTERS</StyleBig>
      {/* what i thought would work, where i got stuck for a while <Character className="Characters" charact={starWarsData.name} /> */}
      {starWarsData.map(function (element, ixd) {
          return <Character
           name={element.name}
           gender = {element.gender}
          //  species = {element.species.name}
          height = {element.height}
          eye = {element.eye_color}
          mass ={element.mass}
           key ={ixd}

           />;
        })}
        
    </Stylediv>
  );
}
// Character({ 'starWarsData': element })
const Stylediv = styled.div`

`
const StyleBig = styled.h1`
font-family: 'Monoton', cursive;
text-shadow: none;
font-size: 60px;
color: #FFE81F;
`

export default App;
