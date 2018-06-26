(function(exports) {
function testNewNote() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.showText() == "My favourite language is Javascript");
};
testNewNote();
exports.testNewNote = testNewNote;
})(this);
