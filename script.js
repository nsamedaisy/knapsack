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

const select = document.getElementById("item-list");
const maxWeight = document.getElementById("max-weight");

const knapsack = { capacity: 0, items: [], weight: 0, value: 0 };


for (let i = 0; i < items.length; i++) {
  let option = document.createElement("OPTION"),
    text = document.createTextNode(items[i]);
  option.appendChild(text);
  option.setAttribute("value", items[i]);
  select.insertBefore(option, select.lastChild);
}

// const maxWeight = parseInt(
//   prompt("Enter the maximum weight of your knapsack:")
// );

// function selectItems() {
//   if (isNaN(maxWeight) || maxWeight <= 0) {
//     alert("Invalid Maximum Weight");
//   } else {
//     for (let i = 0; i < items.length; i++) {
//       const selected = select.options[i].selected;
//       if (selected) {
//         if (knapsack.weight + parseInt(items[i].weight) <= maxWeight) {
//           knapsack.items.push(items[i].name);
//           knapsack.weight += parseInt(items[i].weight);
//           knapsack.value += parseInt(items[i].value);
//         } else {
//           alert(`Cannot add ${items[i].name} exceeds maximum weight`);
//         }
//       }
//     }
//     const knapsackDiv = document.createElement("div");
//     knapsackDiv.style.backgroundColor = "green";
//     knapsackDiv.innerHTML =
//       <div>
//         <p> Capacity: ${maxWeight}</p>
//         <p>Items: ${knapsack.items.join(",")}</p>
//         <p>Weight: ${knapsack.weight}</p>
//       </div>
//     ;
//     document.body.appendChild(knapsackDiv);
//   }
// }
