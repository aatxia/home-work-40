import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Under Control</h1>
      </header>
      
      <main className="grid">
        <ControlledForm />
        <UncontrolledForm />
        <UserList />
      </main>
    </div>
  );
}

export default App;