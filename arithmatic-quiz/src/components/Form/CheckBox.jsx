import {Box,FormGroup,FormControl,FormLabel,FormControlLabel,Checkbox} from '@mui/material'
const CheckBox=({fieldData,updateValue})=>{

    const handleChange=event=>{
        
        const selectedOptions=event.target.checked ? [...fieldData?.value,event?.target?.value]
        :fieldData?.value?.filter(value=>value!==event.target.value)

        
        if (fieldData.required && selectedOptions.length==0) 
            selectedOptions=fieldData.value
        
        updateValue(fieldData.name,selectedOptions
            )    
    }


    return (
        <Box>
            <FormControl sx={{ m:2 }} component="fieldset" variant="standard">
             <FormLabel component="legend">{fieldData.label}</FormLabel>
            <FormGroup sx={{display:'flex',flexDirection:'row',}}>
                {fieldData.options.map(option=>
            <FormControlLabel
            key={option.value} 
                control={
                <Checkbox checked={fieldData.value.indexOf(option.value)>-1?true:false} value={option.value} onChange={handleChange} />
                }
                label={option.name}
            />)
        }
            </FormGroup>
            </FormControl>
        </Box>)
}

export default CheckBox