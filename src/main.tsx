import  ReactDom from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import './index.scss';
  const rootElement=document.getElementById("root")!;
  const root =ReactDom.createRoot(rootElement);
    root.render(    
      <StrictMode>
        <App/>
      </StrictMode>  
  );
