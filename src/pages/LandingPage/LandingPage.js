import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LockIcon from '@material-ui/icons/Lock'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%'
    // height: '100%',
    // overflow: 'hidden'
  },
  hero: {
    height: '100%',
    // minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'nowrap'
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 600,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: 18
    }
  },
  content: {
    height: '100%',
    // paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit
    }
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    color: 'red',
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
    width: '100%',
    height: '40vw',
    maxHeight: 250
  },
  steps: {
    maxWidth: theme.spacing.unit * 130,
    margin: 'auto'
  },
  step: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  stepIcon: {
    marginBottom: theme.spacing.unit
  },
  markdownElement: {},
  cardsContent: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
      paddingTop: 15
    }

  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    margin: 15,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
      marginTop: 7
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

})

class LandingPage extends Component {


  isAuthorised = () => {
    try {
      const key = Object.keys(localStorage).find(e => e.match(/persist:root/))
      const data = JSON.parse(localStorage.getItem(key))
      const auth = JSON.parse(data.auth)

      return auth && auth.isAuthorised

    } catch (ex) {
      return false
    }
  }

  componentDidMount() {
    const { history } = this.props

    if (this.isAuthorised()) {
      history.push('/signin')
    }
  }


  render() {
    const { classes, history, theme } = this.props

    return (
      <div className={classes.main}>
        <Helmet>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
          <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
          <title>KWESTION ME</title>
        </Helmet>
        <AppBar position='static'>
          <Toolbar disableGutters>
            <div style={{ flex: 1 }} />

            <Tooltip id="tooltip-icon1" title="Sign in">
              <IconButton
                name='signin'
                aria-label='Open Github'
                color='inherit'
                onClick={() => { history.push('/signin') }}
                rel='noopener'
              >
                <LockIcon />
              </IconButton>
            </Tooltip>
            <Tooltip id="tooltip-icon2" title="GitHub repository">
              <IconButton
                name='github'
                aria-label='Open Github'
                color='inherit'
                href='https://github.com/josemoreno90/kwestion-me'
                target='_blank'
                rel='noopener'
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <div className={classes.root}>


          <div className={classes.hero}>
            <div className={classes.content}>
              <img
                src='/kwestion-me-logo.png'
                alt='Material-UI Logo'
                style={{ width: "30%", height: "auto" , display: "block", marginLeft: "auto", marginRight: "auto", padding: "40px"}}
              />
              <div className={classes.text}>
                <Typography
                  variant='display2'
                  align='center'
                  component='h1'
                  color='inherit'
                  gutterBottom
                  className={classes.title}
                >
                  {'KWESTION ME'}
                </Typography>
                <Typography
                  variant='headline'
                  component='h2'
                  color='inherit'
                  gutterBottom
                  className={classes.headline}
                >
                  {'A Simple Question App that compares your answers with those you call friends.'}
                </Typography>
                <Button
                  style={{ textAlign:"center"}}
                  onClick={() => { history.push('/signin') }}
                  className={classes.button}
                  variant='outlined'
                  color='primary'
                >
                  {'Get Started'}
                </Button>
              </div>

              <div className={classes.cardsContent} style={{ textAlign:"center"}}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h2">Kwestion-Me</Typography>
                    <br />
                    <Typography  >{`Life is about questions and getting to know each other.  Kwestion-Me does just that.`}</Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary"> Help us build and develop this.  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={{ textAlign:"center"}} size="small" onClick={() => {
                      var win = window.open('https://github.com/josemoreno90/kwestion-me', '_blank')
                      win.focus();
                    }} >Learn More</Button>
                  </CardActions>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h2">What is this?</Typography>
                    <Typography noWrap={false} color="textSecondary">
                      {`Add and be followed.  Get asked questions and see which friends you are most like. `}
                      <br />
                      {` This is a question app that compares your answers to the answers of your friends.  You will be amazed at what you find to have in common with those around you.  `}
                      <br />
                      { ` Help us develop this ;)`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={{ textAlign:"center"}} size="small" onClick={() => { history.push('/signin') }} >Get started</Button>
                  </CardActions>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h2">Usage</Typography>
                    <br />
                    <Typography  >{`You will be suprised at what you have in common with those in your life, and how different we can be than those closest to us.`}</Typography>
                    <br />
                  </CardContent>
                  <CardActions>
                    <Button style={{ textAlign:"center"}} size="small" onClick={() => {
                      var win = window.open('https://github.com/josemoreno90/kwestion-me', '_blank')
                      win.focus();
                    }} >Learn More</Button>
                  </CardActions>
                </Card>
                <Typography
                  variant='headline'
                  component='a'

                  href="https://weWillCode.com"
                  color='inherit'
                  gutterBottom
                  className={classes.headline}
                >
                  {'Learn to Code at We-Will-Code'}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(LandingPage))
