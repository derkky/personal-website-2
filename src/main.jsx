import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Root from './pages/Root.jsx'
import Contact from './pages/Contact.jsx'
import './globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThemeProvider from './components/ThemeProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
], {
  basename: import.meta.env.BASE_URL
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
