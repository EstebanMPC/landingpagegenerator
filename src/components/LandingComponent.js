import React, { Component } from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

class Generator extends Component {
    render () {
        return (
            <React.Fragment >
                <FormGroup className="generatorform" item xs={4}>
                    <TextField
                        id="outlined-read-only-input"
                        label="Proposal Video Link"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <FormControlLabel control={<Switch />} label="Header One" />
                    <FormControlLabel control={<Switch />} label="Header Two" />
                    <FormControlLabel control={<Switch />} label="First Work Sample" />
                    <FormControlLabel control={<Switch />} label="Second Work Sample" />
                    <FormControlLabel control={<Switch />} label="Contact Me" />
                    <FormControlLabel control={<Switch />} label="Footer" />
                    <Button variant="outlined">Create Landing Page</Button>
                </FormGroup>
            </React.Fragment>
            
        )
    };
};

export default Generator; 