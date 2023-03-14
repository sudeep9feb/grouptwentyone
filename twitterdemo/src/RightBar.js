import { Box } from '@mui/material'
import React from 'react'

function RightBar() {
    return (
        <Box
            flex={2}
            sx={{
                display: {
                    xs: "none", sm: "none", md: "flex"
                }
            }}
        >Right Side Bar
        </Box>)
}

export default RightBar