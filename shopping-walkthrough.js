'use strict';

const STORE = [
    {name: 'apples', checked: false},
    {name: 'oranges', checked: false},
    {name: 'milk', checked: true},
    {name: 'bread', checked: false}
];

function renderShoppingList(){
    console.log('renderShoppingList ran');
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