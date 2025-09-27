import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LearningModule from './components/LearningModule.jsx';
import Resources from './components/Resources.jsx';
import Alerts from './components/Alerts.jsx';
import EvacuationPlans from './components/EvacuationPlans.jsx';
import Dashboared from "./components/Dashboared";
import Settings from './components/Settings.jsx';
import LandingPage from './components/LandingPage.jsx';
import AuthPage from './components/Loginpage.jsx';
import LearnMore from './components/Learnmore.jsx';
import Firstaid from './components/Firstaid.jsx';
import EmergencyContacts from './components/Emergencycontact.jsx';
import AboutWebsite from './components/AboutWebsite.jsx';
import store from "./components/Store/Index";
import { Provider } from "react-redux";
import Signup from "./components/Sineup.jsx"
import WeatherDisasterMap from './components/Disaster-moniter.jsx';
const router=createBrowserRouter([
  {path:'/',element:<LandingPage/>},
  {path:'/dashboared',element:<App/>,children:[
    {path:'/dashboared',element:<Dashboared/>},
   {path:'modules',element:<LearningModule/>},
    {path:'resources',element:<Resources/>},
    {path:'alerts',element:<Alerts/>},
    {path:'Quizzes',element:<Firstaid/>},
    {path:'EvacuationPlans',element:<EvacuationPlans/>},
    {path:'settings',element:<Settings/>},
    {path:'Contact',element:<EmergencyContacts/>},
    {path:'about',element:<AboutWebsite/>},
    {path:'moniter',element:<WeatherDisasterMap/>}
]},
  {path:'/login',element:<AuthPage/>},
  {path:'/signup',element:<Signup/>},
  {path:'/learnmore',element:<LearnMore/>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
