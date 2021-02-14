
exports.min = function min (array) {
 if (validateArray(array)) {
    array.sort(function(a, b) {
        return a - b;
      });
        return array[0];}
    else
        return 0;
}

exports.max = function max (array) {
  if (validateArray(array)) {
    array.sort(function(a, b) { return a - b;});
        return array[array.length-1];
    }
    else
        return 0;
}

exports.avg = function avg (array) {
      if (validateArray(array)) {
    let sum = 0;
    array.forEach(element => { sum += element;});
        return sum / array.length; }
    else
        return 0;
}


function validateArray(array){
if (array.lenght != 0 || array != false){
    return true;
}
else
    return false;
}
