import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function BunnyItem() {
    const location = useLocation();
    const navigate = useNavigate();
    const bunny = location.state?.bunny;

    if (!bunny) {
        return (
            <Box sx={{ padding: 3, marginTop: 9, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Alert severity="error" sx={{ mb: 2, maxWidth: 400, width: '100%' }}>
                    <AlertTitle>Ops!</AlertTitle>
                    Coelho não encontrado
                </Alert>

                <Button onClick={() => navigate(-1)}> Voltar </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 3, marginTop: 9 }}>
            <Typography variant="h4" gutterBottom> Detalhes do coelho </Typography>
            <Box sx={{ display: "grid", elevation: 1, gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 2 }}>
                <Card variant="outlined" sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Typography variant="h4" component="div"> {bunny.name} </Typography>
                            <CrueltyFreeIcon fontSize="large" />
                        </Box>
                        <Typography variant="body1"><strong>Espécie:</strong> {bunny.species}</Typography>
                        <Typography variant="body1"><strong>Idade:</strong> {bunny.age} anos</Typography>
                        <Typography variant="body1"><strong>Dono:</strong> {bunny.owner}</Typography>
                        <Typography variant="body1"><strong>Ano de entrada:</strong> {bunny.entry_year}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => navigate(-1)}>Voltar</Button>
                    </CardActions>


                </Card>
            </Box>
        </Box>
    );
}