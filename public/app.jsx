var GreeterMessage =  React.createClass({
	render: function() {
		var name = this.props.name
		var message = this.props.message

		return (
			<div>
				<h1> Hello {name} </h1>
				<p> {message} </p>
			</div>

		)
	}
})

var GreeterForm = React.createClass({
	onFormSubmit: function (event) {
		event.preventDefault()

		var updates = {}
		var name = this.refs.name.value
		var message = this.refs.message.value

		if (name.length > 0 ) {
			this.refs.name.value = ""
			updates.name = name
		}

		if (message.length > 0) {
			this.refs.message.value = ""
			updates.message = message
		}

		this.props.onNewData(updates)
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
		        <div>
		          <input type="text" ref="name" placeholder="Random name"/>
		        </div>
		        <div>
		          <textarea ref="message" placeholder="Tell this person something"></textarea>
		        </div>
		        <div>
		          <button>Submit</button>
		        </div>
			</form>
		)
	}
})

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

var firstName = "Rocket"

var firstmessage = undefined

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
