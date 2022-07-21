import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
const NumberField=({fieldData,updateValue})=>{


    const handleChange=(event)=> {

        let value=event.target.value

        if (fieldData.preProcesing) 
            value=fieldData.preProcesing(value)
        
        updateValue(fieldData.name,value)
    
    }

    return <Box m={2} sx={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
    <Typography component="span" sx={{fontSize:'1rem',color:'rgba(0, 0, 0, 0.6)'}} >{fieldData.label}</Typography>
    <TextField type='number' value={fieldData.value}   variant ='outlined' name={fieldData.name} 
        onChange={handleChange} />
    </Box>
}

export default NumberField