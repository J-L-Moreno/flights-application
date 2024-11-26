import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SearchView } from './pages/search/SearchView';
import { ResultsView } from './pages/results/ResultsView';
import { store } from './store/Store'
import { Provider } from 'react-redux'
import path from 'path';
import { DetailsView } from './pages/details/DetailsView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchView/>,
  },
  {
    path: "/flights",
    element: <ResultsView/>
  },
  {
    path: "/detail",
    element: <DetailsView/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();