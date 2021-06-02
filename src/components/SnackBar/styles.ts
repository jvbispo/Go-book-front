import { Snackbar } from '@material-ui/core';
import styled from 'styled-components';


export const SnackBar = styled(Snackbar)`
    position: fixed;
    top: -700px;
    width: 300px;
    .MuiSnackbar-root {
        left: auto;
        right: auto;
        width: 300px;
    }

    >div {
        width: 300px;
    }

    .close {
        padding: theme.spacing(0.5);
    }
`;


