'use strict';

const STORE = [
    {name: 'apples', checked: false},
    {name: 'oranges', checked: false},
    {name: 'milk', checked: true},
    {name: 'bread', checked: false}
];

function generateShoppingItemsString(shoppingList){
    console.log("Generating shopping list element");

    return `
    <li>apples</li>
    <li>oranges</li>
    <li>milk</li>
    <li>bread</li>
    `;
}

function renderShoppingList(){
    console.log('renderShoppingList ran');
    const shoppingListItemsString= '<li>apples</li>';

    $('.js-shopping-list').html(shoppingListItemsString);
}

function addShoppingList(){
    console.log('addShoppingList ran');
}

function checkListItems(){
    console.log('checkListItem ran');
}

function deleteListItem(){
    console.log('deleteListItem ran');
}

function handleShoppingList(){
    renderShoppingList();
    addShoppingList();
    checkListItems();
    deleteListItem();
    
}
$(handleShoppingList);