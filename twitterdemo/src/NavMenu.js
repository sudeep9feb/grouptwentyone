import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
function NavMenu() {
    return (
        <Box
            margin={"40px"}
            marginTop={"10px"}
            flex={1}
            sx={{ display: { xs: "none", sm: "flex" } }}
        >
            <Stack direction={'column'} spacing="3" position="fixed"
            >

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tweets" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tweets" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
                <Button
                    variant='contained'
                    sx={{ maxWidth: "160px", borderRadius: "24px" }}>
                    Tweet
                </Button>
            </Stack>

        </Box>
    )
}

export default NavMenu