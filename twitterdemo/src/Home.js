import { Box, Stack } from '@mui/material'
import React from 'react'
import MainContent from './MainContent'
import NavMenu from './NavMenu'
import RightBar from './RightBar'

function Home() {
    return (
        <Box>
            <Stack direction={"row"} spacing={2}>
                <NavMenu />
                <MainContent />
                <RightBar />
            </Stack>
        </Box>
    )
}

export default Home