// declare the user object


const user = {
    name: 'mike',
    age: 26,
    location: 'bucharest',
    job: 'developer'
};
function getLocation(location){
    if(location){
        return <p>location: {location}</p>;
    }
    // else{
    //     return undefined;
    // }

}
const appRoot = document.getElementById('app');


console.log(getLocation());
const info = (
    <div>
        <h3>Personal informations</h3>
        <h1>{user.name ? user.name: 'Anonymous'}</h1>
        {user.age && user.age>= 18 && <p>age: {user.age}</p>}
        {getLocation(user.location)}
        <p>job: {user.job}</p>
    </div>
);
console.log('info');

ReactDOM.render(info, appRoot);
