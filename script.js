const productList = document.querySelectorAll(".menu__meal");
const overlay = document.querySelector(".modal-window-overlay");
const cancelBtn = document.querySelector(".modal-window__close-btn");
const addBtn = document.querySelector(".modal-window__add-btn");
const modalWindowContainer = document.querySelector(".modal-window__container");
const modalWindowTable = document.querySelector(".modal-window-table-overlay");
const openTab = document.querySelector(".bill__button-open-bill");
const closedTab = document.querySelector(".bill__button-close-bill");
const tableOverlay = document.querySelector(".modal-window-table-overlay");
const closeTableBtn = document.querySelector(".modal-window-table .fa-times");
const addTableBtn = document.querySelector(".modal-window-table__btn");
const tableNameInput = document.querySelector(".modal-window-table__name");
let tableAr = [];

let btnClicked;
let productAr = [];

for (let i = 0; i < productList.length; i++) {
  productList[i].addEventListener("click", () => {
    overlay.classList.remove("hidden");
    createMenu(i);
  });
}

addTableBtn.addEventListener("click", createTable);
tableOverlay.addEventListener("click", closeModal2);
closeTableBtn.addEventListener("click", closeModal2);
document.addEventListener("keydown", closeModal2);
addTableBtn.addEventListener("click", closeModal2);

openTab.addEventListener("click", openTableModal);
closedTab.addEventListener("click", openTableModal);
cancelBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModal);
addBtn.addEventListener("click", addToBill);
addBtn.addEventListener("click", closeModal);

// addBtn.onclick = addToBill;
// addBtn.onclick = closeModal;

function createMenuItem(outerArIndex, innerArIndex) {
  const item = document.createElement("div");
  item.classList.add("modal-window__meal");
  const itemTxt = document.createElement("span");
  itemTxt.textContent = menuList[outerArIndex][innerArIndex].name;
  const price = document.createElement("p");
  price.classList.add("modal-window__meal-price");
  price.textContent = menuList[outerArIndex][innerArIndex].price + "zł";
  const output = document.createElement("output");
  output.classList.add("modal-window__quantity");
  const icons = document.createElement("div");
  icons.classList.add("modal-window__change-quantity");
  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-plus-square", "far");
  const minusIcon = document.createElement("i");
  minusIcon.classList.add("fa-minus-square", "far");

  plusIcon.addEventListener("click", () => {
    if (output.textContent === "") {
      output.textContent = "1";
    } else {
      output.textContent = parseInt(output.textContent) + 1;
    }
  });

  minusIcon.addEventListener("click", () => {
    if (output.textContent === "1") {
      output.textContent = "";
    } else if (output.textContent === "") {
    } else {
      output.textContent = parseInt(output.textContent) - 1;
    }
  });

  // item.addEventListener('click',()=>{
  //     item.classList.toggle('meal--active');
  // });

  item.appendChild(itemTxt);
  item.appendChild(price);
  item.appendChild(icons);

  icons.appendChild(minusIcon);
  icons.appendChild(output);
  icons.appendChild(plusIcon);
  return item;
}

function addToBill() {
  const products = document.querySelectorAll(".modal-window__meal");

  for (let i = 0; products.length > i; i++) {
    if (products[i].children[2].children[1].textContent === "") {
      continue;
    }
    const ar = [];

    ar.push(
      products[i].children[0].textContent,
      parseInt(products[i].children[1].textContent),
      parseInt(products[i].children[2].children[1].textContent)
    );
    console.log(products[i].children[0].textContent);
    console.log(products[i].children[1].textContent);
    console.log(products[i].children[2].children[1].textContent);

    //insertAdjacentHTML(pozycja, textHTML)
    //mozliwe pozycje - beforebegin, beforeend, afterbegin, afterend

    if (checkIsInBill(products[i].children[0].textContent)) {
      console.log("is in bill");
      const index = checkElement(products[i].children[0].textContent);
      const divs = document.getElementsByClassName("bill__list-product");
      divs[index].querySelector(".bill__product-quantity").textContent =
        parseInt(
          divs[index].querySelector(".bill__product-quantity").textContent
        ) + parseInt(products[i].children[2].children[1].textContent);
      console.log(
        divs[index].querySelector(".bill__product-quantity").textContent
      );
      const price = document.querySelector(".bill__product-price");
      price.textContent =
        parseInt(products[i].children[1].textContent) *
          parseInt(
            divs[index].querySelector(".bill__product-quantity").textContent
          ) +
        "zł";
      console.log("cena podstawowa to: " + products[i].children[1].textContent);

      // parsetInt(products[i].children[1].textContent);
    } else {
      document.querySelector(".bill__bill-list").insertAdjacentHTML(
        "afterbegin",
        `<div class="bill__list-product">
        <p class="bill__product-name">${products[i].children[0].textContent}</p>
        <i class="fas fa-plus"></i> <span class="bill__product-quantity">${
          products[i].children[2].children[1].textContent
        }</span>
        <i class="fas fa-minus"></i>
        <p class="bill__product-price">${
          parseInt(products[i].children[1].textContent) *
          parseInt(products[i].children[2].children[1].textContent)
        }zł</p>
        <i class="fas fa-times"></i>
      </div>`
      );

      document.querySelector(".fa-times").addEventListener("click", removeItem);
      document
        .querySelector(".fa-plus")
        .addEventListener(
          "click",
          manageQuantity.bind(document.querySelector(".fa-plus"), "+")
        );
      document
        .querySelector(".fa-minus")
        .addEventListener(
          "click",
          manageQuantity.bind(document.querySelector(".fa-minus"), "-")
        );
    }

    let index = indexInAr(products[i].children[0].textContent);
    if (index === -1) {
      productAr.push(ar);
    } else {
      addToAr(index, parseInt(products[i].children[2].children[1].textContent));
    }
  }

  calculatePrice();
}

//tworzy rachunek na podstawie tablicy productAr
function generateBill() {
  // if(productAr.length === 0){
  //   return;
  // }

  for (let i = 0; i < productAr.length; i++) {
    document.querySelector(".bill__bill-list").insertAdjacentHTML(
      "afterbegin",
      `<div class="bill__list-product">
    <p class="bill__product-name">${productAr[i][0]}</p>
    <i class="fas fa-plus"></i> 
    <span class="bill__product-quantity">${productAr[i][2]}</span>
    <i class="fas fa-minus"></i>
    <p class="bill__product-price">${productAr[i][1]}zł</p>
    <i class="fas fa-times"></i>
    </div>`
    );
  }

  for (let i = 0; i < productAr.length; i++) {
    document.querySelectorAll(".fa-times")[i].addEventListener(
      "click",
      removeItem
    );
    document.querySelectorAll(".fa-plus")[i].addEventListener(
      "click",
      manageQuantity.bind(document.querySelectorAll(".fa-plus")[i], "+")
    );
    document.querySelectorAll(".fa-minus")[i].addEventListener(
      "click",
      manageQuantity.bind(document.querySelector(".fa-minus")[i], "-")
    );
  }
}

function calculatePrice() {
  let sum = 0;
  for (let i = 0; productAr.length > i; i++) {
    sum += productAr[i][1] * productAr[i][2];
  }
  document.querySelector(".bill__price").textContent = sum + "zł";
}

function indexInAr(productName) {
  for (let i = 0; productAr.length > i; i++) {
    if (productAr[i][0] === productName) {
      return i;
    }
  }
  return -1;
}

function addToAr(index, quantity) {
  productAr[index][2] = productAr[index][2] + quantity;
}

function clearBill() {
  const xButtons = document.querySelectorAll(".bill__bill-list .fa-times");
  console.log(xButtons);
  for (let i = 0; i < xButtons.length; i++) {
    removeItem.call(xButtons[i]);
  }
}

function removeItem() {
  this.closest(".bill__list-product").remove();
  let itemName = this.parentElement.firstElementChild.textContent;

  productAr = productAr.filter(function (element) {
    if (element[0] !== itemName) {
      console.log(element[0]);
      return element;
    }
  });

  calculatePrice();
}

// manageQuantity('-');

function manageQuantity(sign) {
  console.log(this);
  let itemName = this.parentElement.firstElementChild.textContent;

  console.log(this);

  productAr.forEach(function (el) {
    if (el[0] === itemName) {
      if (sign === "+") {
        el[2] = ++el[2];
      } else {
        el[2] = --el[2];
        if (el[2] === 0) {
          removeItem.call(document.querySelector(".fa-times"));
          console.log(el, 'to jest ten produkt')
        }
      }
      console.log(el, el[2]);
    }
  });

  calculatePrice();
  updateInfo(this.parentElement, sign);
}

/**
 * aktualizuje cene i ilosc produktu w konkretnym rachunku
 * @param element - rodzic plusa/minusa, ktorego bedziemy aktualizowac
 * @param sign - "+"/"-", pokazuje czy kliknelismy + czy -
 * @return undefined
 *
 */
function updateInfo(element, sign) {
  const quantityEl = element.querySelector(".bill__product-quantity");
  const priceEl = element.querySelector(".bill__product-price");

  const price = parseInt(priceEl.textContent);
  const oldQuantity = parseInt(quantityEl.textContent);
  let newQuantity;
  const basePrice = price / oldQuantity;

  if (sign === "+") {
    newQuantity = oldQuantity + 1;
  } else {
    newQuantity = oldQuantity - 1;
  }

  quantityEl.textContent = newQuantity;
  priceEl.textContent = basePrice * newQuantity + "zł";
}

function checkElement(name) {
  const billList = document
    .querySelector(".bill__bill-list")
    .querySelectorAll(".bill__product-name");
  //    console.log( document.querySelector('.bill__bill-list').querySelectorAll('.bill__product-name'));
  for (let i = 0; billList.length > i; i++) {
    if (name === billList[i].textContent) {
      console.log(billList[i].textContent, i);
      return i;
    }
  }
}

function checkIsInBill(name) {
  for (const ar of productAr) {
    if (ar[0] === name) {
      return true;
    }
  }

  return false;
}

function createMenu(index) {
  const container = document.querySelector(".modal-window__container");
  for (let i = 0; menuList[index].length > i; i++) {
    container.appendChild(createMenuItem(index, i));
  }
}

function createTable() {
  const tableName = document.querySelector("#table-name").value;
  let addArea;
  let elClass;
  let bill;

  if (btnClicked === openTab) {
    addArea = document.querySelector(".bill-open__body");
    elClass = "bill-open__table-number";
    bill = "open";
  } else {
    addArea = document.querySelector(".bill-closed__body");
    elClass = "bill-closed__table-number";
    bill = "closed";
  }
  console.log(addArea);

  if (!(tableName === "") && !tableExists(tableName)) {
    const tableProductAr = [];

    for (let i = 0; i < productAr.length; i++) {
      tableProductAr.push([productAr[i][0], productAr[i][1], productAr[i][2]]);
    }

    tableAr.push({
      tableName: tableName,
      bill: bill,
      products: tableProductAr,
    });
    addArea.insertAdjacentHTML(
      "beforeend",
      `
      <div class="${elClass}">
        <p>${tableName}</p>
        <i class="fas fa-times"></i>
      </div>
      `
    );

    let currentTable = document.querySelectorAll(`.${elClass}`);
    currentTable = currentTable[currentTable.length - 1];

    currentTable.addEventListener("click", findTableIndex.bind(currentTable));
    currentTable.addEventListener(
      "click",
      manageTable.bind(currentTable, elClass)
    );

    clearBill();
    const x = document.querySelectorAll(`.${elClass} .fa-times`);

    // x[x.length-1].addEventListener('click', findTableIndex);
    // x[x.length-1].addEventListener('click', deleteTable.bind(x[x.length-1], findTableIndex.bind(x[x.length-1]) ));
    x[x.length - 1].addEventListener(
      "click",
      deleteTable.bind(x[x.length - 1])
    );
  } else {
    alert("Stolik juz istnieje");
  }
}

// zaznacza/odznacza stolik
function manageTable(elClass, e) {
  // console.log(this.classList[0]);
  const isActive =
    this.classList.contains("bill-closed__table-number--active") ||
    this.classList.contains("bill-open__table-number--active");

  for (const table of document.querySelectorAll(
    ".bill-closed__table-number--active"
  )) {
    console.log(table);
    table.classList.remove("bill-closed__table-number--active");
  }
  for (const table of document.querySelectorAll(
    ".bill-open__table-number--active"
  )) {
    console.log(table);
    table.classList.remove("bill-open__table-number--active");
  }
  clearBill();

  if (!(e.target === e.currentTarget)) {
    return;
  }
  if (isActive) {
    return;
  }
  else {
    calculatePrice();
  }


  // this.classList.add(`${this.classList[0]}--active`);
  this.classList.add(elClass + "--active");

  generateBill();
}

function findTableIndex() {
  console.log(this, "haaaalo");

  for (let i = 0; i < tableAr.length; i++) {
    if (tableAr[i].tableName === this.firstElementChild.textContent) {
      console.log(this.firstElementChild.textContent);
      console.log(i);
      productAr = tableAr[i].products;
      break;
    }
  }
}

function deleteTable() {
  let i;
  for (i = 0; i < tableAr.length; i++) {
    if (tableAr[i].tableName === this.previousElementSibling.textContent) {
      console.log(this.previousElementSibling.textContent);
      console.log(i);
      break;
    }
  }

  console.log(i);
  tableAr[i] = undefined;
  tableAr = tableAr.filter((table) => {
    if (table === undefined) {
      return false;
    }
    return true;
  });
  console.log(this);
  console.log(this.parentElement);
  this.parentElement.remove();

  productAr.length = 0;
  clearBill();
}

function tableExists(tableName) {
  for (const table of tableAr) {
    if (table.tableName === tableName) {
      return true;
    }
  }
  return false;
}

function closeModal(e) {
  if (e.currentTarget === e.target || e.key === "Escape") {
    overlay.classList.add("hidden");
    modalWindowContainer.innerHTML = "";
  }
}

function closeModal2(e) {
  if (e.currentTarget === e.target || e.key === "Escape") {
    tableOverlay.classList.add("hidden");
  } else if (e.target === addTableBtn) {
    tableNameInput.value = "";
  }
}

function openTableModal() {
  btnClicked = this;
  modalWindowTable.classList.remove("hidden");
}

// let ar = [1,2,3,4,5,6,7,8,9];

// ar.forEach(function(el) {
//   console.log(el * 2);
// });

// console.log(
//   ar.filter(function(el) {
//   if(el === 5) return false;
//   else {
//     return true;
//   }
// }));

// const btn2 = document.querySelector('.click');
// btn2.addEventListener('click', jakasFunckja.bind(this, 1, 2));

// function jakasFunckja(a, b, event) {
//   console.log(a);
//   console.log(b);
//   console.log(event);
// }


//TODO:

//1.trzeba zrobic calculatePrice()
//przy tworzeniu stolika/przechodzeniu do innych stolikow
//2.zablokowac mozliwosc dodawania pustego, zamknietego rachunku