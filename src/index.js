import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    //Specific to JS not react
    constructor(props){
        super(props);

        this.state={lat: null};
    }
    //Need render method 
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            err => console.log(err)
        );
        return <div> Latitude:{this.state.lat} </div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);