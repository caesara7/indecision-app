// 1 challenge
// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // we define the object
        this.state = {
            visibility: false

        }
    }
    handleToggleVisibility(){
        this.setState ((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });

    }
    render (){
        return (
            <div>
                <h3>Visibility toggle</h3>
                <button onClick={this.handleToggleVisibility} className="btn btn-info">{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>These are some details you can now see</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

























// let visibility = false;
//
// const toggleVisibility = () =>{
//     visibility =!visibility;
//     showText();
// };
//
//
// const showText = () =>{
//     const text = (
//         <div>
//             <h3>Visibility toggle</h3>
//             <button onClick={toggleVisibility} className="btn btn-danger">{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>These are some details you can now see</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(text, document.getElementById('app'));
//
// };
//
// showText();
//

