import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import AuthProvider from "./Contexts/AuthProvider";
import Offer from "./Components/Offer/Offer";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyBookins from "./Components/MyBookings/MyBookins";
import ManageAllBookings from "./Components/ManageAllBookings/ManageAllBookings";
import AddNewService from "./Components/AddNewService/AddNewService";
import Footer from "./Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="appOverflow">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/offer/:id">
              <Offer></Offer>
            </PrivateRoute>
            <PrivateRoute exact path="/myBookings">
              <MyBookins></MyBookins>
            </PrivateRoute>
            <PrivateRoute exact path="/manageBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <AddNewService></AddNewService>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
