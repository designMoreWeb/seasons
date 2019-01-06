import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    //Specific to JS not react
    constructor(props){
        super(props);

        this.state={lat: null,long:null};
    }
    //Need render method 
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
                this.setState({long: position.coords.longitude})
            },
            err => console.log(err)
        );
        return <div> Latitude:{this.state.lat}, Longtitude: {this.state.long}</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);