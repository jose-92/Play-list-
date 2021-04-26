import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./header";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Switch></Switch>
      </Header>
    </BrowserRouter>
  );
}

export default App;
