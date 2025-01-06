import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
} from "react-router-dom";

// Parent Layout Component
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* The Outlet component renders the nested route content */}
      <Outlet />
    </div>
  );
}

// Child Route Components
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent route with nested child routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home route */}
          <Route path="about" element={<About />} /> {/* About route */}
          <Route path="dashboard" element={<Dashboard />} />{" "}
          {/* Dashboard route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
