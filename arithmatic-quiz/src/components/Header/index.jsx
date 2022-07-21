import { Typography,Box } from "@mui/material"
import content from "../../constants/content"
const {primaryColor} =require('../../constants/global.constants').default

const Header=({totalScore})=>{

    return(
    <Box mb={2} sx={{display:'flex',justifyContent:'space-between',bgcolor:primaryColor,color:'white',padding:'1% 2%'}} >

        <Typography variant="h1" sx={{fontSize:'2rem',fontWeight:'bolder'}}>
            {content.websitename}
        </Typography>

        <Typography variant="h2" sx={{fontSize:'1.8rem', fontWeight:'bolder'}}>
            {`${content.totalScore} ${totalScore}`}
        </Typography>
    </Box>

    )
}

export default Header