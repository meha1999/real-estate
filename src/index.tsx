import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./assets/styles/main.scss";
import BuildingMap from "./pages/Map";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
