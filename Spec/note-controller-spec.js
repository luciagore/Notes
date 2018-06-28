(function(exports) {
  function testNoteController() {
    function NotelistDouble() {};
    NotelistDouble.prototype = {
      addNote: function() {}
    }
    var notelistdouble = new NotelistDouble;
    var notecontroller = new NoteController(notelistdouble);
    notecontroller.view.returnhtmlString = function () {
      return "<ul><li><div>Test</div></li></ul>";
    }
    notecontroller.insertViewHtml();
    assert.isTrue(app.innerHTML === "<ul><li><div>Test</div></li></ul>")
  }
  testNoteController();
})(this);
