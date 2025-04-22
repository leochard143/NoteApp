function saveNote() {
  const note = document.getElementById('noteInput').value;
  localStorage.setItem('myNote', note);
  alert('Note saved offline!');
}

function loadNote() {
  const saved = localStorage.getItem('myNote') || 'No note saved yet.';
  document.getElementById('savedNote').textContent = saved;
}