(function(exports){
  function testNoteList() {
    var notelist = new NoteList();
    var note = new Note("hello my name is Lucy");
    notelist.addNote(note)
    assert.isTrue(notelist.viewNotes() == [note])

  };
  testNoteList();
  exports.testNoteList = testNoteList;
})(this);
