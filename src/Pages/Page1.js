import logo from '../Assets/logo.svg';
import { Box, Stack } from '@mui/material';
import Card from '../Components/Card'

export default function Page1() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
        >
            <Stack spacing={2} direction="row">
                {["一隻獨秀"].map(x => <Card key={x} title={x} imgSrc={logo} />) }
            </Stack>
        </Box>
    )
}