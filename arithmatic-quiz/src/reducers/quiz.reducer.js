import  actions from '../constants/quizReducer.actions'
import { generateQuestion } from '../utils/quiz.helper'

const {operators}=require('../constants/global.constants').default

const addQuestion=(questions,range,operators)=>{

    if (!range || operators.length==0) return {}
  
    return {
        questions:[...questions,generateQuestion(range,operators)],currentQuestionIndex:questions.length
    }

}

export const initialState={
        quizState:'initial',
        totalQuestions:10,
        operandRange:20,
        operators:[operators.add,operators.sub,operators.div,operators.mul],
        questions:[],
        currentQuestionIndex:-1,
        answer:'',
        score:0,
        time:1,
        intializedFromStorage:false
}


export default function quizReducer(state,action){

    switch(action.type){

        case actions.startQuiz: {
            
            return{...state,quizState:'progress',...addQuestion(state.questions,state.operandRange,state.operators)}
        }
        case actions.setValue: {
            
            if (action.payload && action.payload.name)
                
                return {...state, [action.payload.name]:action?.payload?.value}
        }

        case actions.nextQuestion:{

            if (Number(state.answer)?.toFixed(2)==state.questions[state.currentQuestionIndex].correctAnswer) 
                state.score+=1
            state.questions[state.currentQuestionIndex].answer=state.answer
        
            return {...state,time:1,...(state.currentQuestionIndex+1==state.totalQuestions ?{quizState:'submitted'}: addQuestion(state.questions,state.operandRange,state.operators)),answer:'', }
            
        }

        case actions.intializedFromStorage: return {...initialState,...action.payload.state,intializedFromStorage:false}

        case actions.resetQuiz: return initialState


    }

}