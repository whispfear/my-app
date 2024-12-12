import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <h1>Hello, React!</h1>
        <p>This is a paragraph rendered by React.</p>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
