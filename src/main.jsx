import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvier } from "./contexts/auth.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(

    <AuthProvier>
        <StrictMode>
            <ToastContainer />
            <HashRouter>
                <App />
            </HashRouter>
        </StrictMode>
    </AuthProvier>
)
