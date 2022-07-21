import { Box, Button,Paper, Typography } from "@mui/material"
import { useEffect,useRef} from "react"
import content from "../../constants/content"
import actions from '../../constants/quizReducer.actions'
import NumberField from "../Form/NumberField"

const {alloted_time,primaryColor} =require('../../constants/global.constants').default



const QuizScreen=({reducer})=>{

    const timer = useRef()
    const [state,dispatch]=reducer
    const {totalQuestions,questions,currentQuestionIndex,answer,score,time}=state

    const [leftOperand,rightOperand]=questions[currentQuestionIndex].operands
    const operator=questions[currentQuestionIndex].operator

    const intializeTimer=(time=1)=>{
        if(timer.current) clearInterval(timer.current)

        let intervalTime=time
        timer.current=setInterval(()=>{

            intervalTime+=1
            if(intervalTime<=alloted_time) {
                dispatch({type:actions.setValue,payload:{name:'time',value:intervalTime}})
            }
            else
                handleNext()

        },1000)

    }
   
    const handleNext=()=>{
        dispatch({type:actions.nextQuestion})
        intializeTimer()

    }

    useEffect(()=>{
        intializeTimer(time)

        return ()=>{
            if(timer.current)
             clearInterval(timer.current)
        }
    },[])
   



    return(
    <Paper sx={{padding:'0.5%'}}>
        { <Box sx={{
            display:'flex',flexDirection:'column', alignItems:'center'
        }}>
            <Typography component={'h3'} sx={{textAlign:'center',fontSize:'2.5rem',color:primaryColor}}>
               {`Question ${currentQuestionIndex+1}`}
           </Typography>



           <Typography component={'h3'} sx={{textAlign:'center',fontSize:'2.5rem',color:primaryColor}}>
               {`${leftOperand} ${operator} ${rightOperand} =`}
           </Typography>

           <NumberField fieldData={{name:'answer',value:answer,defaultValue:0}} updateValue={(name,value)=>dispatch({type:actions.setValue,payload:{name:name,value:value}})} />

            </Box>}

            <Box m={2} sx={{display:'flex',justifyContent:'center'}}>
                {
                    currentQuestionIndex+1<totalQuestions ?
                <Button onClick={handleNext} >Next</Button>
                : <Button onClick={()=>{dispatch({type:actions.nextQuestion})}} >{content.submit}</Button>
                }
                <Button onClick={()=>dispatch({type:actions.resetQuiz})} >{content.reset}</Button>               
                </Box>

            <Box m={2} sx={{display:'flex',justifyContent:'space-around',marginBottom:'5%'}}>
                <Typography component={'span'}> Score : {score}  </Typography>
                <Typography component={'span'}>
                Time: {time} sec</Typography>
                </Box>    


    </Paper>
    )

}

export default QuizScreen;