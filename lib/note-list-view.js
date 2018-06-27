(function(exports){
  function NoteListView(notelist) {
    this.notelist = notelist;
    this.notelistarray = [];
  };
    exports.NoteListView = NoteListView;
  })(this);


NoteListView.prototype.iteratehtmlString = function () {
  var a = this.notelist
  var notesarray = this.notelistarray
  a.viewNotes().forEach(function(element) {
    notesarray.push(`<li><div>` + element + `</div></li>`);
  });
};

NoteListView.prototype.returnhtmlString = function () {
  // We want to iterate this.notelist
  this.iteratehtmlString();
  return `<ul>` + this.notelistarray.join("") + `</ul>`
};
