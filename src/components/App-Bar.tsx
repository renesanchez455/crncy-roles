import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#002828', height: '90px' }}>
                <Toolbar sx={{ height: '90px' }}>
                    <CurrencyExchangeIcon sx={{ color: '#ecd925', mr: 1.5 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CRNCY ROLES
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}