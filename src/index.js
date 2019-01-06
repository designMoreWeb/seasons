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
    //Need render method 
    render() {
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
        return <div > Latitude: {
                this.state.lat
            }, Longtitude: {
                this.state.long
            }
            <br />
            Error:{this.state.errorMessage}
            </div>
    }
}

ReactDOM.render( <
    App / > , document.querySelector('#root')
);