// function knapsack (capacity, n) {
//     // weight = w[n];
//     // value = v[n];
//     if (capacity == 0 || n == 0) {
//         return 0;  //base case
//     } else if (weight > capacity) {
//         return knapsack (capacity, n-1);   //if weight of the current item is > capacity we exclude the item 
//     } else {              //else if the item <= capacity we can either include or exclude
//         include = value + knapsack (capacity - weight, (n-1))
//         notInclude = knapsack (capacity, n-1)
//         return Math.max(include, notInclude)
//     }
// };

// const wt = [100, 15, 20, 25]
// const val = [20, 15, 10, 25]
// const capacity = [25]


const val = [60, 100, 120];
const wt = [10, 20, 30];
const capacity = 50;

function KnapSack(capacity, val, wt) {
    const arr = new Array(val.length + 1);
    for (let n = 0; n < arr.length; n++){
      arr[n] = new Array(capacity + 1).fill(0);
    }
    for (let n = 1; n <= val.length; n++) {
        for (let j = 0; j <= capacity; j++) {
            if (wt[n - 1] > j) {
              arr[n][j] = arr[n - 1][j];
            } else {
              arr[n][j] = Math.max(arr[n - 1][j], arr[n - 1][j - wt[n - 1]] + val[n - 1]);
            }
          }
        }
        return arr[val.length][capacity];
  }
    console.log(KnapSack(capacity, val, wt));