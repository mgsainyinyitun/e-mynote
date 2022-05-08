
function startup(){
    const dashPage = document.getElementById('dashboard-page');
    dashPage.classList.remove('hidden');
}

// Route To Dashboard
const routeDash = document.getElementById('r-dashboard');
routeDash.addEventListener('click',()=>{
    // Disable all other view
    // enable note view
    const notePage = document.getElementById('note-page');
    const dashPage = document.getElementById('dashboard-page');
    const todoPage = document.getElementById('todo-page');

    notePage.classList.add('hidden');
    dashPage.classList.remove('hidden');
    todoPage.classList.add('hidden');
    
});

// Route To Note Page
const routeNote = document.getElementById('r-note');
routeNote.addEventListener('click',()=>{
    // Disable all other view
    // enable note view
    const notePage = document.getElementById('note-page');
    const dashPage = document.getElementById('dashboard-page');
    const todoPage = document.getElementById('todo-page');

    notePage.classList.remove('hidden');
    dashPage.classList.add('hidden');
    todoPage.classList.add('hidden');
    
});

// Route To TO-DO Page
const routeTodo = document.getElementById('r-todo');
routeTodo.addEventListener('click',()=>{
    // Disable all other view
    // enable note view
    const notePage = document.getElementById('note-page');
    const dashPage = document.getElementById('dashboard-page');
    const todoPage = document.getElementById('todo-page');

    notePage.classList.add('hidden');
    dashPage.classList.add('hidden');
    todoPage.classList.remove('hidden');
    
});