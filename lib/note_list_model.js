(function(exports){
  function NoteList() {
    this.notes = []
  }
    exports.NoteList = NoteList;
  })(this);

NoteList.prototype.addNote = function (string) {
  var note = new Note(string)
  this.notes.push(note);
};

NoteList.prototype.viewNotes = function () {
  return this.notes;
};
