var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  isIncluded: function(note, notelist) {
    if(!notelist.includes(note)){
      throw new Error("Assertion failed: " + x + " is not truthy");
    }
  }
};
