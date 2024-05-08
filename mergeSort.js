const fs = require('fs');

fs.readFile('inversions\\test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const dac = data.split('\n').map(Number);
    const res = mergeSort(dac);
    console.log(inversions);
    
    
});
var inversions = 0;
function mergeSort(arr){
    // recursivly splits the txt file and returns 0 when gets to last recursion
    // that every left and right length equal to 1
    if(arr.length <= 1) return arr;

    // mid == file mid index
    // left, right == half of file
    var mid = Math.floor(arr.length/ 2);
    // let mid = 1;
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
   
  
    return sort(left, right);
    


    function sort(left, right){
        var tarr = [];
        // temp array and itraters
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length){
            // while there is more values that dident itartate trough

            if(left[i] <= right[j]){
                tarr.push(left[i]);
                i++;
            
            } else{
                // if right element smaller than left ad a inversions
                if(left.length < 1){
                    inversions += 1;
                }else{
                    inversions += left.length - i;
                }
                
                tarr.push(right[j]);
                j++;
            
            }
        }
        // push the value left
        while(i < left.length){
            tarr.push(left[i]);
            i++;
        }
        while(j < right.length){
            tarr.push(right[j]);
            j++;
        }
    
        return tarr;

    }
}
// test
// const arr = [5, 2, 7, 1, 8, 4, 6, 3, 9, 10];
// console.log(mergeSort(arr), inversions);


