(function(exports){
  function SingleNoteView(note){
    this.note = note
  }

  SingleNoteView.prototype.returnStringHtml = function () {
    return '<div>' + this.note.showText() +'</div>'
  };

exports.SingleNoteView = SingleNoteView;
})(this);
