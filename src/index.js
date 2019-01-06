import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    //Specific to JS not react
    constructor(){

    }
    //Need render method 
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
        return <div> Latitude: </div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);