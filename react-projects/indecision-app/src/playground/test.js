class Form extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.handleSubmit);
    }
    handleSubmit(event) {
        alert('A name was submitted');
        event.preventDefault();
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" name="name" type="text"/>
                    <label htmlFor="email"> Email address: </label>
                    <input type="email" className="form-control" name="email"/>
                    <label htmlFor="password"> Password </label>
                    <input type="password" className="form-control" name="password"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('app'));