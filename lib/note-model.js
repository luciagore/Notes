(function(exports){
  function Note(text) {
    this.text = text;
  };
    exports.Note = Note;
  })(this);

Note.prototype.showText = function () {
  return this.text;
};
