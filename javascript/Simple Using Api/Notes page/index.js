const btnEL = document.getElementById("btn");
const appEL = document.getElementById("app");

getnotes().forEach((note) => {
  const noteEL = createNoteEl(note.id, note.content);
  appEL.insertBefore(noteEL, btnEL);
});

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });
  return element;
}
function updateNote(id, content) {
  const notes = getnotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}
function deleteNote(id, element) {
  const notes = getnotes().filter((note) => note.id != id);
  saveNote(notes);
  appEL.removeChild(element);
}

function addnote() {
  const notes = getnotes();
  const noteobj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEL = createNoteEl(noteobj.id, noteobj.content);
  appEL.insertBefore(noteEL, btnEL);

  notes.push(noteobj);

  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getnotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}
btnEL.addEventListener("click", addnote);
