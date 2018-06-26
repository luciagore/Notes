(function(exports){
  function testNoteList() {
    var notelist = new NoteList();
    notelist.addNote("note")
    assert.isIncluded("note", notelist.viewNotes())

  };
  testNoteList();
  exports.testNoteList = testNoteList;
})(this);
