import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => (
    <div>
        <h1>Hello, React!</h1>
        <p>blah blah</p>
    </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;