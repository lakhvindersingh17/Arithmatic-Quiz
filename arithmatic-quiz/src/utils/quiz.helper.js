import globals from '../constants/global.constants'
export const calculate=(leftOperand,rightOperand,operator)=>{

    switch(operator){
        case globals.operators.add: return leftOperand+rightOperand
        case globals.operators.sub: return leftOperand-rightOperand
        case globals.operators.mul: return leftOperand*rightOperand
        case globals.operators.div: return Number(leftOperand/rightOperand).toFixed(2)
        default:
            return 0
    }
}

export const checkAnswer=(answer,correctAnswer)=>{

    if (answer=='' || answer==undefined) return false

    if (correctAnswer==0  && answer==0) return true

    return Number(answer)?.toFixed(2)==Number(correctAnswer)?.toFixed(2)

}

export const generateQuestion=(range,operators)=>{


    const[leftOperand,rightOperand]=[Math.floor(Math.random()*range),Math.floor(Math.random()*range)]
    const operator=operators[Math.floor(Math.random()*operators.length)|| 0]
    
    const correctAnswer=calculate(leftOperand,rightOperand,operator)

    return{
        operands:[leftOperand,rightOperand],
        correctAnswer,
        operator
    }

}