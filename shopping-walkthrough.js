'use strict';

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

function generateItemElement(item, itemIndex, template) {
  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
    <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
      </button>
    </div>
  </li>`; 
}

function generateShoppingItemsString(shoppingList){
  console.log("Generating shopping list element");

  const items = shoppingList.map((item, index) => generateItemElement(item,index));
  return items.join("");
}

function renderShoppingList(){
  console.log('renderShoppingList ran');
  const shoppingListItemsString= generateShoppingItemsString(STORE);

  $('.js-shopping-list').html(shoppingListItemsString);
}

function addItemToShoppingList(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.push({name: itemName, checked: false});
}

function handleNewItemSubmit(){
  $('#js-shopping-list-form').submit(function (event){
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    console.log(newItemName);
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}


function handleItemCheckClicked(){
  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
      console.log('`handleItemCheckClicked` ran');
  });
}

function handleDeleteItemClicked(){
  console.log('deleteListItem ran');
}

function handleShoppingList(){
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();    
}

$(handleShoppingList);