import { useState } from 'react'
import Quiz from '../components/Quiz'
import Container from '@mui/material/Container';
import Header from '../components/Header';

// import styles from '../styles/Home.module.css'
const {no_of_quizes}= require('../constants/global.constants').default
export default function Home() {
  
  const [totalScore,setScore]=useState([])
  
  return (
   <div>
     <Header totalScore={totalScore.reduce((prevScore,quiz)=>prevScore+quiz.score,0) }/>

     <Container  sx={{
       display:'flex',
       flexWrap:'wrap',
       margin:'auto',
       justifyContent:'space-between'
     }}>
     {[...Array(no_of_quizes)].map((val,index)=><Quiz id={`quiz_${index}`}  setScore={setScore} key={index}/>)}
      </Container>

  
      
    </div>
  )
}
