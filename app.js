(function() { 
  // Scoping function to avoid creating globals
  const input = document.getElementById("input");
  

  // function that is saving the innerHTML of the div
  document.getElementById('input').addEventListener('blur', () => {
    localStorage["currentNotes"] = input.value;
  });
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  document.getElementById('save-notes').addEventListener('click', () => {
    if (input.value) {
      // Modifying
      const note = {
        id: Math.floor(Math.random() * 1000000),
        note: input.value, 
      };
      notes.push(note);

      let lis='';
      notes.forEach(note => {
        return lis += '<li class="notes-item">' + note.note + '</li>'
      });
      document.getElementById("notes").innerHTML = lis;

      // Saving
      localStorage.setItem("notes", JSON.stringify(notes));
      // input.innerHTML = localStorage["input-placeholder"];
      input.value = '';
      input.focus();
    }
  
  });

})();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
          .register('./sw.js');
}