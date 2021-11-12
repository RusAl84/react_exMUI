// import React, { Component } from 'react';
import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import Button from '@mui/material/Button';

export default class About extends Component {

    render() {
        return(
            <div>
                <Box>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                </Box>

                <Button variant="contained">Contained</Button>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }
}