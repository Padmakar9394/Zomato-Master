import { Route, Redirect } from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//Component
import Temp from "./Components/temp";
import Pages from "./Page/Home";


function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery" />
    </Route>
    <HomeLayoutHOC path="/:type" exact component={Pages}/>
    <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp}/>
    </>
  )
};

export default App;
