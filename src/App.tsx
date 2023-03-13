import React from "react";
import "./App.css";
import { Application } from "./component/application/Application";
import { CounterTwo } from "./component/counter-two/CounterTwo";
import { Counter } from "./component/counter/Counter";
import { MuiMode } from "./component/mui/MuiMode";
import { Skills } from "./component/skills/Skills";
import { Users } from "./component/users/Users";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["HTML", "CSS", "JavaScript"]} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        {/* <CounterTwo count={1} /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
