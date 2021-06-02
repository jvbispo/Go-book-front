import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import {SnackBar} from './styles';

interface IProps {
    handleClose: () => void;
    message?: string;
    open: boolean;
    severity: 'success' | 'error';
}



const SnackbarComponent: React.FC<IProps> = ({handleClose, message = '', open = false, severity}) => {

  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <SnackBar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className='close'
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
    </SnackBar>
  );
}

export default SnackbarComponent;
