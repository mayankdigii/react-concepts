### Base 

- create Router configuration and provide to whole project.
- Basically there are 2 elements 
    - path : '/',
    - element : Component/Page that will render
    - ErrorElement : This will run when the path is not available 

<!-- Normal Routes -->

<Router>
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
</Router>

<!-- Dynamic Routing -->

<Router>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
</Router>

<!-- Outlet -->

- the Outlet component is used to render child routes within a parent route. 
- Parent Route: A route that has one or more child routes.
- Child Route: Routes that are nested inside a parent route.
- Outlet: A component inside the parent route where the child routes will be rendered


## Why Use Outlet?

The Outlet is especially useful for creating layouts that have shared components (like navigation bars or sidebars) that need to stay constant across multiple pages, while different content is displayed in the same area based on the current route. It allows for a clean, reusable structure where nested routes are handled efficiently.