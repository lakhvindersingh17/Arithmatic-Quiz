import { useEffect, useReducer } from "react"
import quizReducer,{initialState} from "../../reducers/quiz.reducer"
import StartScreen from "../Screens/StartScreen"
import QuizScreen from '../Screens/QuizScreen'
import ResultScreen from "../Screens/ResultScreen"
import actions from '../../constants/quizReducer.actions'
import { Box, Paper } from "@mui/material"

const Quiz=({id,setScore})=>{

    const [state,dispatch]=useReducer(quizReducer,initialState)
    const {quizState,score}=state
    
    useEffect(()=>{
        if(window.localStorage.getItem(id)){

            try{
                dispatch({type:actions.intializedFromStorage,payload:{state:JSON.parse(window.localStorage.getItem(id))}})
            }
            catch(e){
                console.error(e)
            }
            
        }
    },[])

    useEffect(()=>{
        
        setScore(scoreArray=>{
       let scores=scoreArray.filter(quiz=>quiz.key!==id)
            
        return ([...scores,{key:id,score}])
    })},[score])

    useEffect(()=>{

        window.localStorage.setItem(id,JSON.stringify(state))


    },[state])
        


    const rendersection=()=>{
        switch(quizState){
            case 'progress':
                return <QuizScreen  reducer={[state,dispatch]} />
            case 'submitted':
                return <ResultScreen reducer={[state,dispatch]}/>   
            default:
                  return  <StartScreen reducer={[state,dispatch]}/>    

        }
    }


    return<Box m={2} sx={{ width:'100%',flex:1, minWidth:'300px'} }> 
            {rendersection()}
    
     </Box> 
}

export default Quiz