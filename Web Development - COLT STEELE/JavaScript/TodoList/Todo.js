
let input = prompt("what would u like to do");

let todos = [];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log("****************");

        for (let i = 0; i < todos.length; i++){
            console.log(`${i} : ${todos[i]}`);
        }

        console.log("****************");

    } else if (input === 'new') {

        const newTodo = prompt("ok, what is the new Todo? ");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)


    } else if (input === 'delete') {

        const index = prompt("ok, enter an index to delete");
        const deleted = todos.splice(index, 1);
        console.log(`ok, deleted ${deleted[0]}`);

        

    }

    input = prompt("what would u like to do");
    
    
}

console.log("Ok! quit the app");