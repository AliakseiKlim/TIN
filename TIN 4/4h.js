function greatest_and_lowest(arr)
{
	for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    var result = [arr [arr.length - 2], arr [1]];
    return result;
}
//example of usage

var arr = [1,2,3,55,56,3,4,41,22,10];

console.log(greatest_and_lowest(arr));