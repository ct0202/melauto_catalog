import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home.jsx"
import Catalog from "./pages/Catalog/Catalog.jsx"

import './App.css'

function App() {
  return (
      <Router>
          <Routes>

              <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="catalog" element={<Catalog />} />
                  
                  {/*<Route path="contact" element={<Contact />} />*/}
              </Route>

              {/*<Route path="/auth" element={<AuthLayout />}>*/}
              {/*    <Route path="login" element={<Login />} />*/}
              {/*</Route>*/}

              {/*<Route*/}
              {/*    path="/dashboard"*/}
              {/*    element={*/}
              {/*        <ProtectedRoute>*/}
              {/*            <Dashboard />*/}
              {/*        </ProtectedRoute>*/}
              {/*    }*/}
              {/*/>*/}

              {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
      </Router>
  )
}

export default App
