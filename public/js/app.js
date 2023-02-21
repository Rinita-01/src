const NOTES_KEY = 'notes';

function addLocalnotes(noteText){
    const notes = getLocalnotes();
    notes.push(noteText);
    setNotes(notes);
}
function removeLocalnotes(index){
    const notes = getLocalnotes();
    notes.splice(index , 1);
    setNotes(notes);
}
function setNotes(notes){
    localStorage.setItem(NOTES_KEY , JSON.stringify(notes));
}
function getLocalnotes(){
    const noteString = localStorage.getItem(NOTES_KEY);
    if (noteString){
        return JSON.parse(noteString);
    }else{
        return[];
    }
}
function refreshNote(){
    const notes = getLocalnotes()
    const notelistDOM = document.getElementById("notelist");
    notelistDOM.innerHTML=''
    notes.forEach(element => {
        if (element) {
            const noteDOM = document.createElement("div");
            noteDOM.classList.add('notes');
            noteDOM.innerHTML= element;
            notelistDOM.appendChild(noteDOM);
        }
    })
}
function opennoteEditor(){
    const noteEditorModalDOM = document.getElementById("noteEditorModal");
    noteEditorModalDOM.classList.remove('hide');
}
function closenoteEditor(){
    const noteEditorDOM = document.getElementById("noteEditor");
    noteEditorDOM.value='';
    const noteEditorModalDOM = document.getElementById("noteEditorModal");
    noteEditorModalDOM.classList.add('hide');
}
function saveNote(){
    const noteEditorDOM = document.getElementById("noteEditor");
    const noteValue = noteEditorDOM.value;
    const notelistDOM = document.getElementById("notelist");
    const noteDOM = document.createElement("div");
    noteDOM.classList.add('notes');
    if (noteValue) {
        addLocalnotes(noteValue);
        refreshNote();
    }
    closenoteEditor()
}
function oninputchange(){
    const noteEditorDOM = document.getElementById("noteEditor");
    const saveBtnDOM = document.getElementById('saveBtn');
    const noteValue = noteEditorDOM.value;
    if(noteValue){
        saveBtnDOM.removeAttribute('disabled');
    }else{
        saveBtnDOM.setAttribute('disabled');
    }

}
refreshNote();