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
    "html, body, #root": {
      height: '100%',
      position: 'relative',
      background: theme.color.grey,
      color: theme.color.black
    },
    '#form': {
      overflow: 'hidden'
    },
    body: {
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    },
    code: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
    }
  },
  app: {
    position: "absolute",
    width: "100%",
    top: "25%",
    bottom: "75%",
  },
  logo: {
    height: '25px',
    margin: '1.5em auto',
    display: 'block'
  },
  container: {
    margin: '0 auto',
    display: 'block',
    width: '400px'
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
    /*'& label.Mui-focused': {
      color: theme.color.green,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.color.black,
      },
      '&:hover fieldset': {
        borderColor: theme.color.green,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.color.green,
      },
    }*/
  },
  loginform: {
    display: 'inline-block',
    width: '100%',
    'text-align': 'center'
  },
  link: {
    fontSize: '13px'
  },
  paper: {
    padding: '3em 2em'
  }
}

export default style