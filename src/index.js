module.exports = function towelSort (matrix) {
    let tmp = '',
        newArray = [],
    for(let i=0; i < matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++) {
            tmp = tmp + matrix[i][j];
        }
        newArray.push(tmp);
        tmp = ''
    }
  return newArray;
}
