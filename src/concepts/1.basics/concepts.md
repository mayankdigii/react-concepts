### NPM 
- NPM (Node Package Manager) is a package manager for JavaScript and is the default package manager for Node.js

- Package Management:-
    - install , manage 3rd party libraries 
    - handles dependencies between packages and ensures right versions are used.

- commands
    - npm install <package-name>
    - npm install <package-name>@<version>
    - npm list 
    - npm update // all packages
    - npm update <package-name>
    - npm uninstall <package-name>
    - npm run <script-name>

- dependencies vs devDependencies
    - only needed for development and not production means when the build runs , those dependencies wont matter

- custom scripts 
    - add code acc. to your project and needs 

### Package.json

- Basic MetaData 
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A description of my project",
  "author": "Your Name",
  "license": "MIT"
}

- Scripts
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

- Dependencies
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "axios": "^0.21.1"
  }
}

### Node_Modules 

- node_modules is a folder where all the dependencies of your Node.js or React project are stored.
- It contains both direct dependencies (like react or express) and their transitive dependencies (dependencies of those packages).

- Should not be committed to version control (e.g., Git) because it can be regenerated using npm install.
- Stores package files like JavaScript code for libraries you need in your project.

- `To remove and reinstall dependencies, simply delete node_modules and run npm install again.`

### File Structure 
my-project/
├── node_modules/        # Installed dependencies (auto-generated, not committed to Git)
├── public/              # Static files (e.g., index.html, images, etc.)
├── src/                 # Source code for your application (components, app logic, etc.)
│   ├── index.js         # Main entry point (ReactDOM.render or Node server)
│   └── App.js           # Main component (React) or logic (Node)
├── .gitignore           # Git ignore file to exclude files/folders (like node_modules)
├── package.json         # Project metadata, dependencies, and scripts
├── package-lock.json    # Lock file for dependencies (exact versions)
├── README.md            # Project documentation (optional)
└── .env                 # Environment variables (optional)

### React LifeCycle


- Mounting (Component creation)

useEffect(() => {
  console.log('Component mounted');
}, []);

- Updating (State or Props change)

useEffect(() => {
  console.log('Component updated due to prop or state change');
}, [someProp, someState]);

- Unmounting (Component removal)

useEffect(() => {
  // Side effect logic

  return () => {
    console.log('Component will unmount');
  };
}, []);

