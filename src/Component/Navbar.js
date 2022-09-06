import React from 'react';
import {AppBar, Toolbar, styled, Box, InputBase, Tooltip, IconButton, Button, Typography} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = styled(AppBar)` 
    background: #fff;
    height: 4.5em;
    box-shadow:none;
    padding:0px 60px 0px 60px;
    position:relative;
    margin-left:60px;
    z-index: -1;
`
const Component = styled(Box)`
    margin: 16px 10px 17.5px 0px;
    color: #798294;
`
const SearchContainer = styled(Box)`
    display:flex;
    justify-content:space-between;
    background:#F6F8FA;
    border-radius: 10px;
    width:50em;
    padding:6px;
    border: 2px solid #798294;
    margin-left:50px;
 `
const SearchLogo = styled(Box)`
    color:#71572c;
    margin:5px 10px 0px 5px;
    font-size:unset;
`
const buttonStyle ={
    height:"30px",
    width:"40px",
    marginBottom:"6px",
    marginLeft:"20px",
    borderRadius:"12px",
    borderColor:"#71572c",
    color:"#71572c"
}
const Navbar = () => {
    const logoUrl = 'https://cdn.shopify.com/s/files/1/0566/3182/0333/files/LOGO-color.png?v=1649858964';
    return (
        <NavBar>
            <Toolbar style={{minHeight:55}} >
                <Component>
                    <img src={logoUrl} alt='Logo' style={{width:130}}/>
                </Component>
                <Component>
                    <Typography>
                      Select Location
                    </Typography>
                </Component>
                <SearchContainer>
                    <InputBase placeholder='Search for products'/>
                </SearchContainer>
                <Tooltip title="Notifications">
                    <IconButton style={{marginLeft:20, marginBottom:7}}>
                        <NotificationsIcon />
                    </IconButton>
                </Tooltip>
                <Button title="Login" variant="outlined" style={buttonStyle}>
                    Login
                </Button>
            </Toolbar>
        </NavBar>
    );
}

export default Navbar;
