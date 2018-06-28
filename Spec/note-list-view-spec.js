// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

(function(exports){

  function testNoteListView() {

    var noteList = new NoteList();
    noteList.addNote("Text");
    noteList.addNote("Text2");
    var noteListView = new NoteListView(noteList);
    results = noteListView.returnhtmlString();
    // results = noteListView.returnhtmlString();
    assert.isTrue(results == '<ul><li><div>Text</div></li><li><div>Text2</div></li></ul>')
  };
  testNoteListView();
  exports.testNoteListView = testNoteListView;
})(this);

(function(exports){

  function testNoteListViewSlice20() {
    var noteList = new NoteList();
    noteList.addNote("Text that is longer than 20 characters");
    var noteListView = new NoteListView(noteList);
    results = noteListView.returnhtmlString();
    // results.sliceat20();
    assert.isTrue(results == '<ul><li><div>Text that is longer </div></li></ul>')

  };
  testNoteListViewSlice20();
  exports.testNoteListViewSlice20 = testNoteListViewSlice20;
})(this);
