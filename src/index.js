import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    //Specific to JS not react
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            long: null,
            errorMessage: ''
        };
    } 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                });
                this.setState({
                    long: position.coords.longitude
                })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
}
//Need render method
render(){
    if (this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
        return <div>Latitude:{this.state.lat}</div>
    }

    return <div>Loading!</div>
}
}
ReactDOM.render(<App/>,document.querySelector('#root'));