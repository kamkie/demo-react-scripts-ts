import * as React from 'react';
import * as styles from './App.css';
import Hello from './containers/Hello';
import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Hello name2="ts" enthusiasmLevel={10} />
                    <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
