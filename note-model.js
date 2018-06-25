(function(exports) {
  function Note(text) {
    this.text = text;
    return this.text
  };

  exports.Note = Note;
})(this);

console.log(Note("My favourite language is Javascript"));
