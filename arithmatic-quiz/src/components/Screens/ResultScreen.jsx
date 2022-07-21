import { Paper, Typography,Box,Button } from "@mui/material"
import content from "../../constants/content"

import quizReducerActions from "../../constants/quizReducer.actions"
import { checkAnswer } from "../../utils/quiz.helper"
const {primaryColor}=require('../../constants/global.constants').default


const ResultScreen=({reducer})=>{

    const [state,dispatch]=reducer
    const {questions,score}=state

    return (
        <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >

        <Box>
               <Typography 
                component={'h3'} 
                sx={{ textAlign:'center',
                fontSize:'2rem',
                color: primaryColor
                }}
               >
                   {`${content.yourScore} ${score}`}
               </Typography>
            </Box>

            <Box>
               <Typography component={'h2'} sx={
                   {
                       textAlign:'center',
                       fontSize:'1.8rem',
                       color: primaryColor
                   }
               }>
                   {content.result}
               </Typography>
            </Box>


            {questions.map((question,index)=>{

                const [leftOperand,rightOprand]=question?.operands

              return  <Box key={index} sx={{display:'flex',width:'100%',padding:'',color:(!checkAnswer(question.answer,question.correctAnswer)?'red':'green')}}>
                    
                    <Typography m={2} component={'strong'} >
                    {`${index+1}. Question:`} <strong>{`${leftOperand} ${question.operator} ${rightOprand}`}</strong>
                    </Typography>

                    <Typography m={2}component={'span'}>
                        {`Correct Answer : ${question.correctAnswer}`}
                    </Typography>

                    <Typography m={2} component={'span'}>
                        {`Your Answer : ${question.answer}`}
                    </Typography>

                </Box>
            })}

           
           <Box m={3}>
           <Button onClick={(()=>dispatch({type:quizReducerActions.resetQuiz}))}>
               {content.restartQuiz}
           </Button>
           </Box>



        </Paper>
    )

}

export default ResultScreen