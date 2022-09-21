import logo from './logo.svg';
import './App.scss';
import MyComponents from './example/myComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello
                </p>
                <MyComponents></MyComponents>
            </header>
        </div>
    );
}

export default App;
