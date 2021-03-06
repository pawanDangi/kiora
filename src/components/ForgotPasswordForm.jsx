import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core/';

import { background, primary, text, secondary } from '../utils/colors';

const styles = theme => ({
  root: {
    textAlign: 'center',
    '& div': {
      background: background.paper,
    },
  },
  page: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
    marginTop: 50,
    borderRadius: 10,
    padding: '0 !important',
    display: 'inline-block',
  },
  heading: {
    color: secondary.main,
    background: primary.dark,
    borderRadius: '10px 10px 0px 0px',
    padding: '20px 0',
  },
  sugg: {
    padding: '22px 0px',
    fontWeight: '500',
    fontSize: '16px',
  },
  info: {
    padding: '22px 0px',
    fontSize: '16px',
    color: text.disabled,
  },
  form: {
    padding: '10px 0px',
    display: 'grid',
    width: '100%',
  },
  textField: {
    margin: '10px',
  },
  forgot: {
    margin: '10px',
    lineHeight: '35px',
    color: primary.dark,
    background: secondary.main,
    '&:hover': {
      background: secondary.dark,
    },
  },
});

class ForgotPasswordForm extends Component {
  state = {
    email: 'abc',
  };

  render() {
    const { classes, forgot } = this.props;
    const { email } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Forgot Password ?
          </Typography>
          <Typography variant="h3" component="p" className={classes.sugg}>
            Please enter your <b>email address</b> registered with your
            ExpressPlay Ads account.
          </Typography>
          <Typography variant="h3" component="p" className={classes.info}>
            We will send you a link on your registered email address to reset
            your password.
          </Typography>
          <form className={classes.form} autoComplete="off">
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              autoFocus
              value={email}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.forgot}
              onClick={() => forgot(email)}
            >
              Send
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

ForgotPasswordForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  forgot: PropTypes.func.isRequired,
};

export default withStyles(styles)(ForgotPasswordForm);
