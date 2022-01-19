import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const WhatWillYouDo = () => {

    return (
        
            <Card sx={{ minWidth: "85%", padding: "1rem", marginBottom: "5%", marginTop:"5%"}} m={3} elevation={3}>
                <CardContent >
                    <Typography sx={{ fontSize: 20 }} color="textSecondary" gutterBottom>
                        What will you do?
                    </Typography>
                </CardContent>
                <div style={{display:"flex", justifyContent:"center", alignContent:"baseline", alignItems:"center",width:"50%"}}>
                    <div style={{width:5, height:5, backgroundColor:"#3cdff5", borderRadius:"50%", textAlign:"start"}}/>
                    <Typography  style={{marginBottom:0, marginLeft:'3px'}}  gutterBottom>
                         Develop and maintain all server-side network components.
                    </Typography>
                </div>
              
            </Card>
           
    );
}

export default WhatWillYouDo