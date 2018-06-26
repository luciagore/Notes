function Note(text) {
    this.text = text;
};

Note.prototype.showText = function () {
  return this.text;
};



// console.log(Note("My favourite language is Javascript"));
