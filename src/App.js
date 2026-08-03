import { BrowserRouter } from "react-router-dom";
import RouterPage from "./router/RouterPage";
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';

function App() {
  return (
    <BrowserRouter>
       <RouterPage/>
    </BrowserRouter>
  );
}

export default App;
