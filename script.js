const items = [
  { name: "Laptop", weight: "13", value: "23" },
  { name: "Phone", weight: "5", value: "20" },
  { name: "Laptop-Charger", weight: "8", value: "15" },
  { name: "Phone-Charger", weight: "3", value: "10" },
  { name: "Money", weight: "12", value: "25" },
  { name: "HeadSet", weight: "6", value: "13" },
  { name: "Lens", weight: "4", value: "24" },
  { name: "Jotter", weight: "2", value: "8" },
  { name: "Pens", weight: "1", value: "8" },
  { name: "Water-bottle", weight: "3", value: "19" },
  { name: "Tea-Cup", weight: "6", value: "14" },
  { name: "Launch-Box", weight: "5", value: "19.5" },
  { name: "Shoe", weight: "5", value: "10" },
  { name: "OutFit", weight: "7", value: "13" },
  { name: "BathingSet", weight: "12", value: "21" },
  { name: "MakeUp-Set", weight: "13", value: "4" },
  { name: "Torch", weight: "3", value: "17" },
  { name: "Scisors", weight: "2", value: "11" },
  { name: "Desktop", weight: "19", value: "10" },
  { name: "Chair", weight: "9", value: "3" },
];

const itemList = document.getElementById("itemList");
const maxWeightInput = document.getElementById("maxWeight");
const addItemButton = document.getElementById("addItem");
const doneButton = document.getElementById("done");
const status = document.getElementById("status");

const knapsack = { capacity: 0, items: [], totalWeight: 0, totalValue: 0 };

for (let i = 0; i < items.length; i++) {
  let option = document.createElement("option");
  option.text = items[i].name + ", value: " + items[i].value;
  option.value = i;
  itemList.add(option);
}

addItemButton.addEventListener("click", function () {
  let maxWeight = maxWeightInput.value;
  if (!maxWeight) {
    alert("Please enter maximum weight");
    return;
  }
  let selectedIndex = itemList.value;
  if (selectedIndex !== "") {
    let selectedItem = items[selectedIndex];
    while (
      parseFloat(selectedItem.weight) <= maxWeight - knapsack.totalWeight &&
      selectedIndex !== ""
    ) {
      knapsack.items.push(selectedItem);
      knapsack.items.push(selectedItem.name);
      knapsack.totalWeight += parseFloat(selectedItem.weight);
      knapsack.totalValue += selectedItem.value;

      let itemElement = document.createElement("li");
      itemElement.innertext = selectedItem.name;

      document.getElementById("itemList").appendChild(itemElement);
      document.getElementById("totalWeight").innerText = knapsack.totalWeight;
      document.getAnimations("totalValue").innerText = knapsack.totalValue;

      status.innerHTML =
        "Status: Bag currently contains " +
        knapsack.items.length +
        " items, with a total weight of " +
        knapsack.totalWeight +
        " and a total value of " +
        knapsack.totalValue;
      selectedItem = items[selectedIndex];
    }
    if (knapsack.totalWeight === parseFloat(maxWeight)) {
      status.innerHTML = "Status: Bag is full";
      status.style.backgroundColor = "red";
    }
  } else {
    alert("Item is too heavy to add to the bag");
  }
}),
  doneButton.addEventListener("click", function () {
    let maxWeight = maxWeightInput.value;
    if (!maxWeight) {
      alert("Please enter the maximum weight");
      return;
    }
    status.innerHTML =
      "Status: Bag contains " +
      knapsack.items.length +
      " items, with a total weight of " +
      knapsack.totalWeight +
      " and a total value of " +
      knapsack.totalValue;
    if (knapsack.totalWeight === maxWeight) {
      status.innerHTML = "Status: Bag is full";
      status.style.backgroundColor = "red";
    } else if (knapsack.totalWeight > maxWeight) {
      status.innerHTML = "Status: Bag is over capacity";
      status.style.backgroundColor = "red";
    }
  });
