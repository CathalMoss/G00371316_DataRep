import React from 'react';

export class Men extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>{new Date().toLocaleDateString()}</h2>
                <h2>{new Date().toLocaleTimeString()}</h2>
                <h1>This is the mens clothes</h1>
            </div>
        );
    }
}