// Finding the missing value in a non-sorted squential array.
// The first function finds the range of the suggested array (min-max) and then checks to see if the original array contains this value.
// The arr.includes() method iterates through the array, and containing that within a for-loop iterating through each value means the time complexity is O(2(n^2));
// The space complexity of the first solution needs 4 variables at a time, the original array, the min and max values, and the variable used to iterate.

// The second function finds the range of the array (min-max) and adds each value to a hash-table object.
// Once all of the values are added to the hash-table, the for-loop loops through the range, checking if the value is contained in the hash-table.
// Due to the nature of hash-tables, the .hasOwnProperty does not iterate through the object, but instead just finds if the value exists.
// The time complexity of this function is O(2n), since you are looping through the numbers twice, once to add them to the hash table, and then iterating through the range and checking the hash-table.

let arr = [8, 10, 14, 13, 12, 6, 7, 11];
let arr2 = [154, 153, 150, 155, 149, 148, 151];

const findMissing = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        };
    };
    for (let j = min; j <= max; j++) {
        if (!arr.includes(j)) {
            return j;
        }
    }
};

const findMissing2 = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let legend = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        };
        legend[arr[i]] = 1;
    };
    for (let j = min; j <= max; j++) {
        if (!legend.hasOwnProperty(j)) {
            return j;
        }
    }
};

console.log(findMissing(arr));
console.log(findMissing(arr2));
console.log(findMissing2(arr));
console.log(findMissing2(arr2));









// Reversing a singly-linked list
// start with empty array to add values
// arr[0] assigned to first value in list
// progress through the list adding each value to the array
// once end of list is reached, assign last value as the new head of the list
// loop through array, starting from back, and add each value to the list

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class SLList {
    constructor() {
        this.head = null;
    }

    addToBack(value) {
        if (this.head === null) {
            this.head = new SLNode(value);
            return this;
        }

        let runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new SLNode(value);
        return this;
    };

    print() {
        if (this.head === null) {
            console.log("This list is empty");
            return this;
        };
        let toPrint = "";
        let runner = this.head;
        while (runner != null) {
            toPrint += `${runner.value} -> `;
            runner = runner.next;
        };
        console.log(toPrint);
        return this;
    };

    reverse() {
        if (this.head === null) {
            console.log("list is empty");
            return this;
        }
        else if (this.head.next === null) {
            return this;
        }
        else {
            let values = [];
            values.push(this.head.value);
            let runner = this.head.next;
            while (runner.next !== null) {
                values.push(runner.value);
                runner = runner.next;
            };
            this.head = runner;
            runner = this.head;
            for (let i = values.length - 1; i >= 0; i--) {
                runner.next = new SLNode(values[i]);
                runner = runner.next;
            };
        };
        return this;
    };
}

let myList = new SLList();
myList.head = new SLNode(1);
myList.addToBack(2).addToBack(3).addToBack(4).addToBack(5).addToBack(6).addToBack(7).addToBack(8);
myList.print();
myList.reverse();
myList.print();
myList.reverse();
myList.print();