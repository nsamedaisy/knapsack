const maxWeight = document.getElementById("max-weight");
const itemList = document.getElementById("items");
const addItem = document.getElementById("add");
const doneBtn = document.getElementById("done");
const setBtn = document.getElementById("set");
const bag = document.getElementById("knapsack");
const Display = document.getElementsByClassName("display");
const refillBtn = document.getElementById("refill");

const KnapsackItems = [
  { name: "Laptop", weight: 13, value: 90 },
  { name: "Phone", weight: 5, value: 70 },
  { name: "Laptop-Charger", weight: 8, value: 20 },
  { name: "Phone-Charger", weight: 3, value: 15 },
  { name: "Money", weight: 12, value: 100 },
  { name: "HeadSet", weight: 6, value: 13 },
  { name: "Lens", weight: 4, value: 24 },
  { name: "Jotter", weight: 2, value: 11 },
  { name: "Pens", weight: 1, value: 8 },
  { name: "Water-bottle", weight: 3, value: 13 },
  { name: "Tea-Cup", weight: 6, value: 14 },
  { name: "Launch-Box", weight: 5, value: 19 },
  { name: "Shoe", weight: 5, value: 30 },
  { name: "OutFit", weight: 7, value: 50 },
  { name: "BathingSet", weight: 12, value: 35 },
  { name: "MakeUp-Set", weight: 13, value: 10 },
  { name: "Torch", weight: 3, value: 17 },
  { name: "Scisors", weight: 2, value: 11 },
  { name: "Desktop", weight: 19, value: 40 },
  { name: "Chair", weight: 9, value: 9 },
];

let weights = ''
let selectObject


const knapsack = { capacity: 0, items: [], totalWeight: 0, totalValue: 0 };

setBtn.addEventListener('click', () => {
  maxWeight.disabled = true
  weights = maxWeight.value
  if (weights <= 0) {
    alert.style.background = 'white'
    alert.innerHTML = 'please input a weight'
  }
})

doneBtn.addEventListener('click', () => {
  for (let i = 0; i < KnapsackItems.length; i++) {
    if (itemList.value === KnapsackItems[i].name) {
  

      if (knapsack.totalWeight <= knapsack.capacity) {
        // Display.style.background = 'green'
        Display.innerHTML =
          'total weight:' +
          ' ' +
          knapsack.totalWeight +
          ' ' +
          'total value:' +
          ' ' +
          knapsack.totalValue +
          ' ' +
          'capacity:' +
          ' ' +
          knapsack.capacity +
          ' ' +
          ' Remaining space:' +
          ' ' +
          (knapsack.capacity - knapsack.weight)
      } else {
        Display.style.background = 'red'
        Display.innerHTML =
          'total weight:' +
          ' ' +
          knapsack.totalWeight +
          ' ' +
          'total value:' +
          ' ' +
          knapsack.totalValue +
          ' ' +
          'capacity:' +
          ' ' +
          knapsack.capacity +
          ' ' +
          ' Remaining space:' +
          ' ' +
          'max capacity exceeded'
      }
    }
  }
})

refillBtn.addEventListener('click', () => {
  window.location.reload()
})

addItem.addEventListener('click', () => {
  if (weights <= 0) {
    // alert.style.background = 'white'
    alert.innerHTML = 'please input a weight'
  } else {
    for (let i = 0; i < KnapsackItems.length; i++) {
      if (itemList.totalValue === KnapsackItems[i].name) {
        selectObject = KnapsackItems[i]
        knapsack.capacity = weights
        knapsack.totalWeight += selectObject.totalWeight
        knapsack.totalValue += selectObject.totalValue
        knapsack.items.push(selectObject)
        bag.style.border = '2px solid black'

        bag.innerHTML +=
            'Item:' +
            ' ' +
            selectObject.name +
            ' Weight:' +
            ' ' +
            selectObject.totalWeight +
            ' Value:' +
            ' ' +
            selectObject.totalValue +
            ' ' +
            '<br>' +
            ' ' +
            '<br>'
        if (knapsack.totalWeight >= knapsack.capacity) {
          bag.style.border = '2px solid red'
        }
      }
    }
  }
  itemList.remove(itemList.selectedIndex)
})