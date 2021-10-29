import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

class CartWidget extends Component {
    
    render() { 
        return <IconButton
              size="large"
              color="inherit"
            >
              <ShoppingCartRoundedIcon />
            </IconButton>
    }
}
 
export default CartWidget;