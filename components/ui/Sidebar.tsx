
import { useContext } from 'react';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import { UIContext } from '../../context/ui';



const meuniItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

    return (
        <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">
                        Menú
                    </Typography>

                    <List>
                        {
                            meuniItems.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />


                                </ListItem>
                            )
                            )
                        }

                    </List>
                    <Divider />

                    <List>
                        {
                            meuniItems.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />


                                </ListItem>
                            )
                            )
                        }

                    </List>
                </Box>
            </Box>

        </Drawer>




    )
}
