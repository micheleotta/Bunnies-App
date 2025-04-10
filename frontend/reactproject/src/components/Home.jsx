import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8800/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <Box sx={{ padding: 3, marginTop: 9 }}>
            <Typography variant="h4" gutterBottom>
                Coelhos
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 2 }}>
                {data.map((item) => (
                    <Card key={item.id} variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Espécie: {item.species}</Typography>
                            <Typography variant="body2">Idade: {item.age} anos</Typography>
                            <Typography variant="body2">Dono: {item.owner}</Typography>
                            <Typography variant="body2">Entrada: {item.entry_year}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ color: '#f17f9c', '&:hover': { backgroundColor: '#fff2f5' } }} onClick={() => props.clicked(item)}>Informações</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Home;
