/* 
https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
https://visualgo.net/en/sorting
Time Complexity
    - Best: O(n) when array is already sorted
    - Average: O(n^2) quadratic
    - Worst: O(n^2) quadratic when the array is reverse sorted
Space: O(1) constant

For review, create a function that uses BubbleSort to sort an unsorted array in-place.
For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

function BubbleSort(array){
    var temp = undefined;
    var number_of_sorts = undefined;
    while (number_of_sorts != 0){
        number_of_sorts = 0
        for (var i = 1; i < array.length; i++){
            if (array[i] < array[i-1]){
                temp = array[i-1];
                array[i-1] = array[i];
                array[i] = temp;
                number_of_sorts += 1;
            }
        }
    }
    return array;
}
console.log(BubbleSort([34,33,8,24,32,13,44,52]))
console.log(BubbleSort([1,5,7,2,3,9,10]))







/*   
https://visualgo.net/en/sorting
Selection sort works by iterating through the list, finding the minimum value, 
and moving it to the beginning of the list. Then, ignoring the first position, 
which is now sorted, iterate through the list again to find the next minimum value and move 
it to index 1. This continues until all values are sorted.
Time Complexity
    - Best: O(n^2)
    - Average: O(n^2)
    - Worst: O(n^2)
Space: O(1) constant
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example, you run selection 
sort for 10 iterations only to display the first 10 sorted items
*/

function SelectionSort(array){
    var length = array.length;
    let selectedIdx = 0;
    let minIdx = 0;
    while (selectedIdx < length){
        for (let i = selectedIdx; i < length; i++){
            if (array[i] < array[minIdx]){
                minIdx = i;
            }
        }
        if (array[selectedIdx] !== array[minIdx]){
            [array[selectedIdx], array[minIdx]] = [array[minIdx], array[selectedIdx]];
        }
        selectedIdx += 1;
        minIdx = selectedIdx;
    }
    return array;
}
console.log(SelectionSort([34,33,8,24,32,13,44,52]))
console.log(SelectionSort([1,5,7,2,3,9,10]))