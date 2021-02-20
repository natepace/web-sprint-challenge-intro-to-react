// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Character = props =>{
const {name, gender, height, eye,mass} = props
// console.log(info);
// let newInfo = [];

// for(let i = 0; i<info.length; i++){
//     const newId ={Id: i}
//     newInfo.unshift(newId);
//     return newInfo;
// }
// console.log(newInfo)
// const newInfo = info;

// newInfo.forEach((item, i)=>{
//     item.id=i+1;
// });
// console.log(newInfo)

  
    return (
        <div>
            <Styleydiv>
                <StyleTitle>
                    {name}
                    </StyleTitle>
                    
                    <Stylep>{name} is a {`${gender !== 'n/a' ? gender : "robot" }`} who is {height}cm tall, {`${gender !== 'female' ? "he" : "she"}`} has {eye} eyes and has a mass of {mass}kg.</Stylep>
                   </Styleydiv> 
                    {/* <button onClick={()=> action(info)}>See Details</button> */}
                
        </div>
    );
}

const StyleTitle = styled.h2`
font-family: 'Lalezar', cursive;
color: white;
font-size: 40px;
margin-bottom:0;
padding-top:20px;


`
const Stylep = styled.p`
color: white;
// font-size:10px;
font-family: 'Russo One', sans-serif;
font-size:20px;
margin-top:0;


`
const Styleydiv = styled.div`


`


export default Character;