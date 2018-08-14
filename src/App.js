import React, { Component } from 'react';
import TypingTest from "./TypingTest";
import './App.scss';

class App extends Component {

    render() {
        return (
            <div className="section words">
                <h1>Speed typing test</h1>

                <TypingTest />
            </div>
        );
    }
}

export default App;
