const {default_questions}=require('../global.constants').default

const preProcesing=(value)=>{


    if(value<=0) return 1

    return Math.floor(value)

}

const formFields=[
    {
        type:'number',
        name:'totalQuestions',
        defaultValue:default_questions,
        required:true,
        label:'No of Questions',
        preProcesing,
        key:'1a'
    },
    {
        type:'number',
        name:'operandRange',
        defaultValue:20,
        required:true,
        label:'In range',
        preProcesing,
        key:'21a'
    },
    {
        type:'checkbox',
        name:'operators',
        required:true,
        label:'Practice',
        key:'1sw',
        options:[{
            value:'+',name:'Addition'
        },
        {
            value:'-',name:'Subtraction'
        },
        {
            value:'/', name:'Division'
        },
        {
            value:'x',name:'Multiplication'
        }
    ]
    },
]

export default formFields