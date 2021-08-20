import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000)
  }

  //setstate를 호출할 때마다 react는 새로운 state와 함께 render 호출

  render(){

    const{ isLoading } = this.state;

    return(
      <div>
        {isLoading? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
