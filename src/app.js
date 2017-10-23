console.log("app js is running");

//Because userName is a javascript expression, it can call methods and concat strings dynamically
let app = {
    title: 'React To-Do List',
    subtitle: 'This is a paragraph test',
    options: []
};

//event e object
const onFormSubmit = (e) => {
    //stop full page refresh
    e.preventDefault();

    //target point to the element that the event started on (the form)
    //option is the name below in the html
    const option = e.target.elements.option.value

    if(option){
        app.options.push(option);
        //wipe the input
        e.target.elements.option.value = '';
        renderLength();
    }
};

//This template is the beginning of having a template that references variables
//instead of referencing static text 
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <h2>{app.subtitle}</h2>}
//         {app.options.length ? 'Current Options: ' : 'No Options'}
//         <p>{app.options.length}</p>
//         <ol>
//             <li>{app.options[0]}</li>
//             <li>{app.options[1]}</li>
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
// );
 const removeAll = () =>{
    app.options=[];
    renderLength();
 } 

const appRoot = document.getElementById('app');
//Renders the application using two parameters (JSX youd like to render, DOM element)
//DOM element can be found in the index html with the same id
//ReactDOM.render(template, appRoot)

const renderLength = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            {app.options.length ? 'Current Options: ' : 'No Options'}
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    //maps each element of an array to a list item
                    //key is mapped to the string itself, find a better way to generate unique keys
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

renderLength();