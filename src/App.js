// import logo from './logo.svg';
import Alert from 'react-bootstrap/Alert';


function App() {
  return (
    [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => (
      <Alert className="m-5" key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
    ))
  );
}

export default App;
