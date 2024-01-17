import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpForm from './Inscription/Inscription.jsx';
import Connexion from './Connexion/Connexion.jsx';
import Rejet from './Reset mdp/Rejet.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Hotels from './Pages/Hotels.jsx';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/connexion" />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin/hotels",
        element: <Hotels />,
      },
    ],
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <SignUpForm />,
  },
  {
    path: "/rejet",
    element: <Rejet />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
    </RouterProvider>
  </React.StrictMode>,
)
