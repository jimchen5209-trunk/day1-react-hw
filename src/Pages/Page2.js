import logo from '../Assets/logo.svg';
import { Box, Stack } from '@mui/material';
import Card from '../Components/Card'

export default function Page2() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
        >
            <Stack spacing={2} direction="row">
                {["雙人", "成行"].map(x => <Card key={x} title={x} imgSrc={logo} />) }
            </Stack>
        </Box>
    )
}