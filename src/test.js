import React from 'react';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      input: '',
      messages: []
    }
	}
  // add handleChange() and submitMessage() methods here
	handleChange = (e) => {
    console.log('yo');
  	this.setState({
    	input: e.target.value + 'rr'
    })
  }

  submitMessage = () => {
  	alert('f');
  }
  render() {
    return (
    	<div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
				<input
          value={this.state.input}
          onChange={this.handleChange}
          />

        <button


          onClick={this.submitMessage}
          >

         	Click!
        </button>
        <ul>

        </ul>
        { /* change code above this line */ }
    	</div>
    );
  }
};
