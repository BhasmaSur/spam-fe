import './App.css';
import AllRoutes from './routes';
import Test from './views/test/Test';
import { makeStyles } from '@spammetwice/common';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor:"#904",
      h1:{
        fontSize:"20px"
      }
    }
  },
}));

function App() {


  const classes = useStyles();
  console.log("classes",classes)
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
