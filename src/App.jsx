import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Calculator from "./components/Calculator"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import AddNewList from "./components/AddNewList"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Handle login logic
  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password) // Debugging log
    if (email === "test@nextpak.org" && password === "123456") {
      alert("Login successful")
      setIsAuthenticated(true) // Set authentication to true
      return true
    }
    alert("Invalid credentials")
    return false
  }

  // Handle logout logic
  const handleLogout = () => {
    setIsAuthenticated(false) // Set authentication to false on logout
  }

  return (
    <Router>
      <div className="min-h-screen bg-mint-50">
        {/* Always render Header */}
        <Header />

        {/* Routes for navigation */}
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" replace />}
          />
          <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Calculator />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

