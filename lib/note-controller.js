(function(exports) {
  function NoteController(notelist) {
    notelist.addNote("Lucy");
    this.view = new NoteListView(notelist);
  }

  NoteController.prototype.insertViewHtml = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.view.returnhtmlString();
  };

  exports.NoteController = NoteController;

})(this);
