(function(exports){
  function testNoteList() {
    var notelist = new NoteList();
    notelist.addNote('note')
    assert.isTrue(notelist.viewNotes()[0].showText() == "note")

  };
  testNoteList();
  exports.testNoteList = testNoteList;
})(this);
