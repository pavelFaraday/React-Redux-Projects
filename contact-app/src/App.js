import { ToastContainer, toast } from 'react-toastify';
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
}

export default App;

// It is Test
