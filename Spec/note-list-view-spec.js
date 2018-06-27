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

// (function(exports){
//
//   function testMultipleNoteListView() {
//
//     var notelist = new NoteList();
//     notelist.addNote("Text");
//     notelist.addNote("Text1");
//     var multipleNoteListView = new NoteListView(notelist);
//     results = multipleNoteListView.htmlString();
//     console.log(results)
//     assert.isTrue(results == '<ul><li><div>Text</div></li><li><div>Text1</div></li></ul>')
//
//   };
//   testMultipleNoteListView();
//   exports.testMultipleNoteListView = testMultipleNoteListView;
// })(this);
