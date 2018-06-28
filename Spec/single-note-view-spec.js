// Code uses the constructor and prototype pattern to define a single note view object that can be instantiated.
// The single note view constructor takes a note model as a parameter.
// The single note view has a method that, when called, returns a string of HTML that represents the note model. For example: <div>Favourite drink: seltzer</div>.

(function(exports) {
  function testReturnStringHtml() {
    var note = new Note('hello');
    var singleNoteView = new SingleNoteView(note);
    //exercise
    var a = singleNoteView.returnStringHtml();
    //verify
    assert.isTrue(a == '<div>hello</div>')
  }
testReturnStringHtml();
exports.testReturnStringHtml = testReturnStringHtml;
})(this);
