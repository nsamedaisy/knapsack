const maxWeight = document.getElementById("max-weight");
const itemList = document.getElementById("items");
const alert = document.getElementsByClassName("alert");
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

let weights = "";
let selectObject;

const knapsack = { capacity: 0, items: [], weight: 0, value: 0 };

setBtn.addEventListener("click", () => {
  weights = maxWeight.value;
  if (weights <= 0) {
    alert[0].style.color = "red";
    alert[0].style.textAlign = "center";
    alert[0].style.fontSize = "24px";
    alert[0].innerHTML = "You have to input the weight of your knapsack";
    maxWeight.focus();
  } else {
    maxWeight.disabled = true;
    alert[0].innerHTML = "";
  }
});

doneBtn.addEventListener("click", () => {
  for (let i = 0; i < KnapsackItems.length; i++) {
    if (itemList.value === KnapsackItems[i].name) {
      if (knapsack.weight <= knapsack.capacity) {
        Display[0].style.background = "green";
        Display[0].style.padding = "20px"
        Display[0].style.fontSize = "20px"
        Display[0].style.lineHeight = "1.5"
        Display[0].style.margin = "40px"
        Display[0].style.borderRadius = "5px"
        Display[0].style.color = "white"


        Display[0].innerHTML =
          "total weight:" +
          " " +
          knapsack.weight +
          " " +
          "<br>" +
          "total value:" +
          " " +
          knapsack.value +
          " " +
          "<br>" +
          "capacity:" +
          " " +
          knapsack.capacity +
          " " +
          "<br>" +
          " Remaining space:" +
          " " +
          (knapsack.capacity - knapsack.weight);
      } else {
        Display[0].style.background = "red";
        Display[0].style.padding = "20px"
        Display[0].style.fontSize = "20px"
        Display[0].style.lineHeight = "1.5"
        Display[0].style.margin = "40px"
        Display[0].style.borderRadius = "5px"
        Display[0].style.color = "white"

        Display[0].innerHTML =
          "total weight:" +
          " " + 
          knapsack.weight +
          " " + "<br>" +
          "total value:" +
          " " +
          knapsack.value +
          " " + "<br>" +
          "capacity:" +
          " " +
          knapsack.capacity +
          " " + "<br>" +
          " " +
          "You exceeded the bag's capacity refill and make sure you don't exceed this time";
      }
    }
  }
});

refillBtn.addEventListener("click", () => {
  window.location.reload();
});

addItem.addEventListener("click", () => {
  if (weights <= 0) {
    alert.innerHTML = "please input a weight";
  } else {
    const selectedItem = itemList.options[itemList.selectedIndex].value;
    for (let i = 0; i < KnapsackItems.length; i++) {
      if (selectedItem === KnapsackItems[i].name) {
        selectObject = KnapsackItems[i];
        knapsack.capacity = weights;
        knapsack.weight += selectObject.weight;
        knapsack.value += selectObject.value;
        knapsack.items.push(selectObject);
        bag.style.border = "2px solid green";
        bag.style.padding = "20px"

        bag.innerHTML +=
          "Item:" +
          " " +
          selectObject.name +
          " Weight:" +
          " " +
          selectObject.weight +
          " Value:" +
          " " +
          selectObject.value +
          " " +
          "<br>" +
          " " +
          "<br>";
        if (knapsack.weight >= knapsack.capacity) {
          bag.style.border = "2px solid red";
        }
      }
    }
    itemList.remove(itemList.selectedIndex);
  }
});
