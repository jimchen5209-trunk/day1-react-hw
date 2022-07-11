import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function ButtonAppBar() {
    const items = [
        ["第一頁", "/Page1"],
        ["第二頁", "/Page2"],
        ["第三頁", "/Page3"]
    ]
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" onClick={() => navigate('/')} style={{cursor:"pointer"}} sx={{ flexGrow: 1 }}>
                        小作業
                    </Typography>
                    {items.map(x => <Button color="inherit" onClick={() => navigate(x[1])}>{ x[0] }</Button>) }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
