import "./App.css";
import { UseProvider } from "./components/contextFile/CreatContex";
import Home from "./components/Homepage/Home";

function App() {
  return (
    <UseProvider>
      <Home />
    </UseProvider>
  );
}

export default App;
