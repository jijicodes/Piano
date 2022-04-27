import "./App.css";
import { Grommet, grommet } from "grommet";
import { Display } from "../src/components/Display/Display";
import { acme } from "./acme-theme";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, acme);
function App() {
  return (
    <Grommet className="grommet" full theme={theme} background="#39AD9C">
      <Display />
    </Grommet>
  );
}

export default App;
