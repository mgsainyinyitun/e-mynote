
// Note dropdown
const btn = document.getElementById("note");
btn.addEventListener('click',()=>{
    const notes = document.getElementsByClassName('sub-note');
    for (let note of notes) {
        note.classList.toggle('hidden');
    } 
});


// toto dropdown
const todo = document.getElementById("todo");
todo.addEventListener('click',()=>{
    const subs = document.getElementsByClassName('sub-todo');
    for (let note of subs) {
        note.classList.toggle('hidden');
    } 
});
