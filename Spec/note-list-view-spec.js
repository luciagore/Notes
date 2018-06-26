// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

(function(exports){

  function testNoteListView() {

    var noteList = new NoteList();
    noteList.addNote("Text");
    var noteListView = new NoteListView(noteList);
    results = noteListView.htmlString();
    assert.isTrue(results == '<ul><li><div>Text</div></li></ul>')

  };
  testNoteListView();
  exports.testNoteListView = testNoteListView;
})(this);
