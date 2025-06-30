import {createRoot} from "react-dom/client"
import Header from "./Header"
import { languages } from "./languages"
import Language from "./language"
import Index from "./Index"


const root = createRoot(document.getElementById("root"))
root.render(
      <Index />
)