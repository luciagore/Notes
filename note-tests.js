(function(exports) {
  function testNewNote() {
    var note = new Note();

    if (note.body !== 10) {
      throw new Error("Circle size is not 10");
    }
  };

  testNewNote();
})(this);
