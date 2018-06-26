(function(exports){
  function NoteListView(NoteList) {
    this.notelist = NoteList;
  }
    exports.NoteListView = NoteListView;
  })(this);

NoteListView.prototype.htmlString = function (notelist) {
  return  `<ul><li><div>${this.notelist.viewNotes()}</div></li></ul>`;
};
