import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: 20,
        marginRight: 70
    }
})
const NavBar = () => {
    const classes = useStyle();
  return (
      <AppBar className={classes.header} position="static">
          <Toolbar> 
              <Typography>   
  <header>
    <nav>
      
        
          {/*<Link className={classes.tabs} to="/">CrudApplication</Link>*/}
        
        
          <Link className={classes.tabs} to="/">AllStudents</Link>
        
        
          <Link className={classes.tabs} to="add">AddStudent</Link>
        
      
    </nav>
  </header>
  </Typography>    


          </Toolbar>
      </AppBar>
  )
    
  }

export default NavBar;