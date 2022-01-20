import React from 'react'
import figGreen from '../img/figGreen.svg'
import startDown from '../img/startDown.svg'
import { 
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material/'



const OpportunityConditions = ({ kind, items }) => {
    return (
        <Card sx={{
            width: 566,
            minWidth: 300,
            padding: '1rem',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTop: `6px solid ${kind === 'experience' ? '#42E9AF' : '#FFCA41'}`,
            margin: '5%',
            marginTop: 0
        }}
            elevation={3}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color='textSecondary' gutterBottom>
                    We would like to talk to you if you
                </Typography>
            </CardContent>
            <List>
                {items.map((experienceJob) => (
                    <ListItem key={experienceJob[0]} >
                        <ListItemIcon>
                            {kind === 'experience' ? <img src={figGreen} alt='figGreen'/> : <img src={startDown} alt='startDown'/>}
                        </ListItemIcon>
                        <div>
                            <ListItemText  primary={experienceJob}/>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

export default OpportunityConditions
