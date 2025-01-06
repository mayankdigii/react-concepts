### Controlled Component: 
In a controlled component, the form element’s value is controlled by React’s state. Every time the value changes, React updates the state, and the value of the input is re-rendered based on the state.

### Uncontrolled Component: 
In an uncontrolled component, the form element manages its own state, and React does not control the value. Instead, you use a ref to directly access the DOM element’s value when needed (in this case, on form submission).