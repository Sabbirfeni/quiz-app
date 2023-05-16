import './App.css';
import router from '../../Routes/Routes';
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from '../../context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}

export default App;