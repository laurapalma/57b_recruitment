import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OfferButtons from '../components/SecondView/UserButtons';
import axios from 'axios';



const JobOfferList = () => {

    const [jobCard, setJob] = useState([])

    const conection = () => {
        axios.get("https://stormy-river-28303.herokuapp.com/api/v1/jobs")
            .then(
                (result) => {
                    console.log('data', result.data);
                    setJob(result.data)
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    useEffect(() => {
        conection()
    }, [])

    return (

        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: 'repeat(3,1fr)',
                gridGap: "1.3vh",
                marginTop: "5%",
                height: "auto",
            }}

        >
            {jobCard.map((job) => (
                <Card key={job.id} sx={{
                    maxWidth: 300,
                    borderRadius: 5,
                    padding: "1rem",
                    margin: 4,
                    marginTop: 0,
                }}
                    elevation={3}
                >
                    <CardContent>
                        {/* <hr style={{borderTop: `6px solid "#42E9AF"`}}/> */}
                        <Box sx={{ fontSize: 20, position: 'relative', display: 'inline-block', '&::before': { content: `""`, position: 'absolute', bottom: '12px', width: 'calc(100% + 10px)', height: '8px', left: '-5px', opacity: '0.5', backgroundColor: '#42E9AF' } }} >
                            <Typography sx={{ fontSize: 20, position: 'relative', fontWeight: 'bold' }} color="primary" gutterBottom>
                                {job.name}
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'justify', marginY: 4 }} color="textSecondary" gutterBottom>
                            {job.summary}
                        </Typography>
                        <Link to="/jobOpportunity" style={{ display: "flex", justifyContent: "flex-end", color: '#00D3EF' }}> View more </Link>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "3rem", marginX: 5 }}>
                            <OfferButtons textContent="Apply" />
                            <OfferButtons textContent="Refer" />
                        </div>
                    </CardContent>

                </Card>
            ))}

        </Container>

    )

}

export default JobOfferList