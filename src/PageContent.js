import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function PageContent(props) {
    const theme = useTheme();
    const styles = {
        backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
        width: '100vw',
        height: '100vh'
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}