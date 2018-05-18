
interface Todo {
    title: string;
    text: string;
}


function showTodo(todo: Todo){
    console.log(todo);
}


let mytodo = {title: 'RPA',text: 'In Finance'};

showTodo(mytodo);