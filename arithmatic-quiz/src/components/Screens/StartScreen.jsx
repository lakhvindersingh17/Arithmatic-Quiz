import {Paper,Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import content from "../../constants/content"
import actions from "../../constants/quizReducer.actions"
import CheckBox from "../Form/CheckBox"
import NumberField from "../Form/NumberField"
import formFields from '../../constants/formFields/quiz.formFields';
const {primaryColor}=require('../../constants/global.constants').default


const StartScreen=({reducer})=>{

    const [state,dispatch]=reducer

    const updateValue=(name,value)=>{
        dispatch({type:actions.setValue, payload:{ name:name,value:value }})
    }

    return <Paper >

        <Typography component={'h2'} sx={{fontSize:'2rem',color:primaryColor,textAlign:'center'}}>
            {content.arithmaticQuiz}
        </Typography>
       
       
        <Box >
        {
            formFields.map((field)=>{
                switch(field.type){
                    case 'number': return <NumberField key={field.key} fieldData={{...field,value:state[field.name]} } updateValue={updateValue} />
                    case 'checkbox':
                        return <CheckBox key={field.key} fieldData={{...field,value:state[field.name]} } updateValue={updateValue}/>
                
                }
            })
        }
        </Box> 
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Button onClick={()=>dispatch({type:actions.startQuiz})}>
                {content.startQuiz}
            </Button> 
        </Box>    
        </Paper>
}

export default StartScreen;