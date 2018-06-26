(function(exports){
  function NoteList() {
    this.notes = []
  }
    exports.NoteList = NoteList;
  })(this);

NoteList.prototype.addNote = function (note) {
  this.notes.push(note);
};

NoteList.prototype.viewNotes = function () {
  return this.notes;
};
