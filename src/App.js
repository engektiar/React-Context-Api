import "./App.css";
import { UseProvider } from "./components/contextFile/CreatContex";
import Home from "./components/Homepage/Home";

function App() {
  return (
    <div>
      <UseProvider>
        <Home />
      </UseProvider>
    </div>
  );
}

export default App;
