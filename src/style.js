const theme = {
  color: {
    white: "white",
    black: "black", 
    grey: "#eaeaea",
    green: "green"
  }
};

const style = {
  '@global': {
    "html, body": {
      position: 'relative',
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    'html, body, #root': {
      height: '100%'
    },
    '#form': {
      overflow: 'hidden'
    },
    code: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
    }
  },
  app: {
    height: '100%',
    background: theme.color.black,
    '& .table': {
      display: 'table',
      height: '100%',
      width: '100%'
    },
    '& .container': {
      margin: '0 auto',
      display: 'table-row',
      height: '100%'
    },
    '& .content': {
      display: 'table-cell',
      'vertical-align': 'middle'
    },
    '& .logo': {
      height: '25px',
      margin: '1.5em auto',
      display: 'block'
    }
  },
  button: {
    margin: "1em 0",
    float: "right",
    fontWeight: "bold",
    background: "linear-gradient(to bottom,  #45484d 0%,#000000 100%)",
    color: theme.color.white,
    '&:hover': {
      color: theme.color.black,
      background: theme.color.grey
    }
  },
  field: {
    width: "100%",
    margin: "15px 0",
    color: theme.color.black
  },
  loginform: {
    display: 'inline-block',
    width: '100%',
    'text-align': 'center',
    "& section": {
      overflow: 'hidden'
    }
  },
  link: {
    marginTop: '1em',
    fontSize: '13px'
  },
  paper: {
    padding: '3em 2em',
    width: '400px',
    margin: '0 auto'
  }
}

export default style