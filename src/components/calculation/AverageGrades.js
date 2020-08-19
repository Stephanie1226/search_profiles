function AverageGrades(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum = sum + parseInt(array[i]);
  }
  var avg = sum/array.length;
  return avg;
}

export default AverageGrades;