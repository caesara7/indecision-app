// 1 challenge
// create 3 methods : handleAddOne, handleMinusOne, handleReset
// use console log to print the method name
// wire up onClick & bind  in the constructor


// 2. chalellenge
// call  'this setState ' decrement the count  by 1


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // we define all the pieces of the state we want to track

        this.state = {
            // setup the default state object

            count: 0
        };

    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () =>{
//     count ++;
//     renderCounterApp();
// };
// const minusOne = () =>{
//     count --;
//     renderCounterApp();
// };
// const reset = () =>{
//     count = 0;
//     renderCounterApp();
// };
//
//
//
// // challenge
// // make a button '-1' setup minusOne function and register - log "minusOne"
// // make reset button "reset" -setup reset function  -log "reset"
//
//
//
// const appRoot = document.getElementById('app');
// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button className="btn btn-default" onClick={addOne}>+1</button>
//             <button className="btn btn-default" onClick={minusOne}>-1</button>
//             <button className="btn btn-default" onClick={reset}>reset</button>
//
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
//
// };
// console.log(renderCounterApp());
