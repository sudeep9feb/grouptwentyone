import { Box, Button, TextareaAutosize } from '@mui/material'
import React from 'react'

function ComposeTweet() {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            alignItems="end"
            sx={{ padding: "5px", margin: "10px" }}
            gap={1}
        >
            <TextareaAutosize
                minRows={7}
                placeholder="What's happening?"
                style={{ width: "100%", minWidth: "300px", borderRadius: "10px" }}
            />
            <Button variant='contained'
                sx={{ maxWidth: "160px", borderRadius: "24px" }}                                >
                Tweet
            </Button>
        </Box>
    )
}

export default ComposeTweet