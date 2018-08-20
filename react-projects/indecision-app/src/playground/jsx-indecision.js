
// JSX - Javascript XML
// render the template
// if statements
// ternary operators
//logical and operator
// only render the subtitle (and p tag) -if subtitle exist -logical and operator
// render new p tag - if options.length > 0 'here are your options' 'no options'



////////////////////////////////////////////////////////////////////// display options

// start  style for button decison

const btnDecision ={
    marginRight: '10px'
};
const inputField = {
    marginRight:'10px'
};

////////////////////////////// end style



const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
// we declare an "e" object inside of the arrow function
const onFormSubmit = (e) =>{

    // when called it s gonna stop that full page to refresh its gonna allow to handle the event
    // the function must be referenced  not to be called

    e.preventDefault();

    // e.target is gonna point to the  element that event started on
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(option);
        renderForm();

    }

};

//challenge
// create 'remove all' button above list
// on click -> wipe  the array -> rerender

const onRemoveAll = () =>{
    app.options =[];
    renderForm();
};
const onMakeDecision =()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options [randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const renderForm = () =>{
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p> {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <button disabled={app.options.length === 0} className="btn btn-warning" onClick={onMakeDecision} style={btnDecision}>What should I do</button>
            <button className="btn btn-info" onClick={onRemoveAll}>Remove all</button>
            <ol>
                {app.options.map(function (option) {
                    // setup key prop
                    return <li key={option}>{option}</li>
                })}
            </ol>
            {/*challenge*/}
            {/*map over app.options  getting back an array of list (set key and text)*/}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" style={inputField}/>
                <button className="btn btn-default">Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

};
renderForm();


//challenge
// create render function that renders the new  jsx
// call it right away
//  call it after options array added to


