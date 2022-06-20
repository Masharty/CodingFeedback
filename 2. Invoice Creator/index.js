
const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
const resetBtn = document.querySelector(".send-btn");

const possibleServices = [
  { id: "wash-car", type: "Wash Car", cost: 10 },
  { id: "pull-weeds", type: "Pull Weeds", cost: 30 },
  { id: "mow-lawn", type: "Mow Lawn", cost: 20 },
];

let servicesRequested = [];

let invoiceList = document.getElementById("invoice-items");
let totalCostEl = document.getElementById("calculated-amount");

/*********************************\
 *    ADD ITEM EVENT LISTENERS   *
\*********************************/

washCarBtn.addEventListener(
  "click",
  function () {
    servicesRequested.push("Wash Car");

    addToCart();
  }
  // { once: true } //This was my initial appraoch to ensure unique items are added.
  // However, this made it difficult to reset the list of items.
);

mowLawnBtn.addEventListener(
  "click",
  function () {
    servicesRequested.push("Mow Lawn");

    addToCart();
  }
  // { once: true }
);

pullWeedsBtn.addEventListener(
  "click",
  function () {
    servicesRequested.push("Pull Weeds");
    addToCart();
  }
  // { once: true }
);

/*********************************\
 *       ADD ITEMS TO CART       *
\*********************************/

let uniqueServicesRequested = [];

function addToCart() {
  let listItems = "";

  //This ensures that the items requested are unique: Not sure if this is the right approach.
  uniqueServicesRequested = [...new Set(servicesRequested)];

  uniqueServicesRequested.forEach((request) => {
    for (let service in possibleServices) {
      if (possibleServices[service].type == request) {
        listItems += `<div class="line-item">
        <div><p class="type">${possibleServices[service].type}</p>
        <p id="${possibleServices[service].id}" class="remove">Remove</p></div>
        <p class="cost">$${possibleServices[service].cost}</p>
        </div>`;
      }
    }
  });

  invoiceList.innerHTML = listItems;

  addCosts();
}

/*********************************\
 *           ADD COSTS           *
\*********************************/

function addCosts() {
 
  let totalCost = 0;

  uniqueServicesRequested.forEach((request) => {
    for (let service in possibleServices) {
      if (possibleServices[service].type == request) {
        totalCost += possibleServices[service].cost;
      }
    }
  });
  totalCostEl.textContent = "$" + totalCost;
}

/*********************************\
 *           RESET CART          *
\*********************************/

resetBtn.addEventListener("click", function () {
  invoiceList.innerHTML = null;
  totalCostEl.textContent = "$0";
  servicesRequested = [];
  //   location. reload() - I initially used this to refresh but it didn't feel right.
  // I tried to find reasons why refresh isn't optimal but couldn't find anything. If this can 
  // be explained that would be great. 
});

/*********************************\
 *       REMOVE CART ITEMS       *
\*********************************/

let removeWash = document.getElementById("wash-car");
let removeWeeds = document.getElementById("pull-weeds");
let removeLawn = document.getElementById("mow-lawn");

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "wash-car") {
    for (let request in servicesRequested) {
      if (servicesRequested[request] == "Wash Car") {
        servicesRequested = servicesRequested.filter(
          (service) => service !== "Wash Car"
        );
      }
    }

    addToCart();
  }
  
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "mow-lawn") {
    for (let request in servicesRequested) {
      if (servicesRequested[request] == "Mow Lawn") {
        servicesRequested = servicesRequested.filter(
          (service) => service !== "Mow Lawn"
        );
      }
    }

    addToCart();
  }

});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "pull-weeds") {
    for (let request in servicesRequested) {
      if (servicesRequested[request] == "Pull Weeds") {
        servicesRequested = servicesRequested.filter(
          (service) => service !== "Pull Weeds"
        );
      }
    }

    addToCart();
  }
});

