var React = require('react')
var GreeterMessage = require('./GreeterMessage')
var GreeterForm = require('./GreeterForm');


var Greeter = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'you',
			message: 'I work hard and fast'
		}
	},

	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message
		}
	},

	handleNewData: function(updates) {
		this.setState(updates)
	},
	render : function () {
		var name = this.state.name
		var message = this.state.message 
		// onSubmit expects a function to be passed to it 
		// react ref attribute to save a refference to an attribute
		return (
			<div>
				<GreeterMessage name={name} message={message} />
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
			)
	}
})


module.exports = Greeter