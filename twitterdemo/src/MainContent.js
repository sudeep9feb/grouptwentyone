import { Box } from '@mui/material'
import React from 'react'
import ComposeTweet from './ComposeTweet'
import Post from './Post'

function MainContent() {
    return (
        <Box
            flex={4}
        >
            <ComposeTweet />
            <Post />
            <Post />
            <Post />
            <Post />

        </Box>)
}

export default MainContent