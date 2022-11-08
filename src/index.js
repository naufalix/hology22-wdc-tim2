import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//CSS
import './assets/scss/custom.scss';

//PAGES
import Compose from './pages/Compose';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';

const router = createBrowserRouter([
  {path: "/compose",element: <Compose/>,},
  {path: "/login",element: <Login/>,},
  {path: "/logout",element: <Logout/>,},
  {path: "/",element: <Home/>,},
]);

//RENDER
ReactDOM.render(
  // <React.StrictMode>
  //   <div className="container-iphone">
  //     <Router>
  //       <Switch>
  //         <Route path="/compose">
  //           <Compose/>
  //         </Route>
  //         <Route path="/login">
  //           <Login/>
  //         </Route>
  //         <Route path="/logout">
  //           <Logout/>
  //         </Route>
  //         <Route path="/">
  //           <Home/>
  //         </Route>
  //       </Switch>  
  //     </Router>
  //   </div>
  // </React.StrictMode>,
  
  <React.StrictMode>
    <div className="container-iphone">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
