import { FC, useState, Fragment, SyntheticEvent } from 'react';
// import { Button, Snackbar, IconButton } from '@mui/material';
// import { Close as CloseIcon } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SimpleSnackbarProps } from './types';

const SimpleSnackbar: FC<SimpleSnackbarProps> = ({ message, buttonText, autoHideDuration }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>{buttonText || 'Open simple snackbar'}</Button>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration || 6000}
        onClose={handleClose}
        message={message || 'Note archived'}
        action={action}
      />
    </div>
  );
};

export default SimpleSnackbar;
