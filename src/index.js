import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import product from "./example";
import CreateCard from "./create-card";

const rootElement = document.getElementById("root");
ReactDOM.render(<CreateCard product={product} />, rootElement);
