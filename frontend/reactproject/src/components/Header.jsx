import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import HomeIcon from "@mui/icons-material/Home";

const style = {
    backgroundColor: '#fe93ae',
    mb: 3,
    width: '100%'
};

export default function Header() {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" elevation={0} sx={style}>

            <Toolbar sx={{ minHeight: 100 }}>
                <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        style={{
                            height: 64,
                            marginRight: 12,
                            marginLeft: 12
                        }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 1}}>
                        <Typography variant="h4"> Bunn¡es</Typography>
                        <Typography variant="subtitle2"> Michele Cristina Otta </Typography>
                    </Box>
                </Box>

                <Tooltip title="Listar Coelhos">
                    <IconButton color="inherit" onClick={() => navigate("/")}>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Editar Coelhos">
                    <IconButton color="inherit" onClick={() => navigate("/bunnies")}>
                        <CrueltyFreeIcon fontSize="large" />
                    </IconButton>
                </Tooltip>

            </Toolbar>
        </AppBar >
    );
}
