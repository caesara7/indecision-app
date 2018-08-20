// 1.challenge
// setup options prop for Options component
// render the length of the array

// 2. challenge
// render new p tag for each option (set text, set key )



// 3. challenge
// add remove all button at Options component
// setup handleRemoveAll -> alert some message
// setup onClick to fire the method


// 4. challenge
// setup the form with text input and submit button
// wire up onSubmit
// handleAddOption ->  fetch the value typed -> if value, then alert

///////////////////////////////////////////////////////////// start method BIND - first version


// const obj = {
//     name: 'Ana',
//     getName (){
//         return this.name;
//     }
// };
//
// // console.log(obj.getName());
//  const getName = obj.getName.bind(obj);
//  console.log(getName());

/////////////////////////////////////////////////////////// end method binding





class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        //    define the default state
        this.state = {
            options: []
        };
    }

    // 'handleDeleteOptions' method for delete 'options' from array

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                {/* we have some passed  into the header*/}
                {/*we have passed in a single prop called title who's value is the string 'test value'*/}
                {/*how do we get access? Inside of our components, we know we have access to this.
                 is a reference to the current instance of this component and react gives us access to a props on a object and this.props*/}

                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
// stateless functional component

const Header = (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

class Action extends React.Component {
    render() {
        return (
            <div>
                {/* we don't want to call the function 'handlePick', we just want to reference it, so we don't add the paranthesis afterwards */}

                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}> What should I do?
                </button>
            </div>
        );
    }
}


// stateless functional component


const Options = (props) =>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {/*{this.props.options.map((option) => <p key={option}>{option}</p>)}*/}

            {props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    )
};
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {/*{this.props.options.map((option) => <p key={option}>{option}</p>)}*/}
//
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        // trim() method removes white spaces from a string

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = () => {
//     return (
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));