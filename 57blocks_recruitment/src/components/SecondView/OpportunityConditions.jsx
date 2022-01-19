import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import figGreen from '../../images/figGreen.svg';
import startDown from '../../images/startDown.svg';


const OpportunityConditions = ({ kind, items  }) => {

    return (
 
            <Card sx={{
                minWidth: 300,
                padding: "1rem",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderTop: `6px solid ${kind === "experience" ? "#42E9AF" : "#FFCA41"}`,
                margin: "5%",
                marginTop: 0
            }}
                elevation={3}

            >
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="textSecondary" gutterBottom>
                        We would like to talk to you if you
                    </Typography>
                </CardContent>

                <List>
                    {items.map((experienceJob) => (
                        <ListItem >

                            <ListItemIcon>
                                {kind === "experience" ? <img src={figGreen} alt='figGreen' /> : <img src={startDown} alt='startDown' />}
                            </ListItemIcon>
                            <div style={{ }}>
                                <ListItemText  primary={experienceJob} />
                            </div>

                        </ListItem>

                    ))}

                </List>
            </Card>
    )

}

export default OpportunityConditions

