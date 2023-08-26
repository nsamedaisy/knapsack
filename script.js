window.onload = function () {
  const doneBtn = document.getElementById("done-btn");
  doneBtn.addEventListener("click", function () {
    const maxWeight = parseInt(document.getElementById("max-weight").value);
    if (!maxWeight) {
      alert("Please enter a maximum weight.");
      return;
    }
    const checkboxes = document.getElementsByName("item");
    const items = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        items.push(JSON.parse(checkboxes[i].value));
      }
    }
    if (items.length === 0) {
      alert("Please select at least one item.");
      return;
    }
    const knapsackState = knapsack(maxWeight, items);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML =` <p>Capacity: ${
      knapsackState.capacity
    }</p> <p>Weight: ${knapsackState.weight}</p><p>Value: ${
      knapsackState.value
    }</p><ul>
        ${knapsackState.items
          .map(
            (item) =>
              "<li>" +
              item.name +
              " (weight: " +
              item.weight +
              ", value: " +
              item.value +
              ")</li>"
          )
          .join("")}
      </ul>`;
    if (knapsackState.weight <= maxWeight) {
      resultDiv.style.backgroundColor = "green";
    } else {
      resultDiv.style.backgroundColor = "red";
    }
  });
};

function knapsack(maxWeight, items) {
  // initialize variables
  let capacity = maxWeight;
  let chosenItems = [];
  let totalWeight = 0;
  let totalValue = 0;
  // sort items by value-to-weight ratio
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);
  // loop through items and add them to knapsack if there is enough capacity
  for (let i = 0; i < items.length; i++) {
    if (totalWeight + items[i].weight <= capacity) {
      chosenItems.push(items[i]);
      totalWeight += items[i].weight;
      totalValue += items[i].value;
    }
  }
  // return object with knapsack state
  return {
    capacity: capacity,
    items: chosenItems,
    weight: totalWeight,
    value: totalValue,
  };
}