(function(){
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

// TO BUY - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.itemName = "";
  toBuy.quantity = "";

    toBuy.addItems = function () {
     ShoppingListCheckOffService.addItems(toBuy.itemName, toBuy.quantity);
     toBuy.itemName = null; // clear input field
     toBuy.quantity = null; // clear input field
   };
   
   toBuy.items = ShoppingListCheckOffService.showItems();

   toBuy.boughtItems = function (index){
     ShoppingListCheckOffService.Bought(index);
   };

   toBuy.removeItems = function(index){
     ShoppingListCheckOffService.removeItems(index);
   };



}
//ALREADY Bought - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var already = this;

  already.bought = ShoppingListCheckOffService.showBought();

  already.removeBought = function(index){
    ShoppingListCheckOffService.removeBought(index);
  };

}

// ShoppingListCheckOffService - service
function ShoppingListCheckOffService(){
  var service = this;

  // To Buy Items
  var items =[];
  service.addItems = function(itemName, quantity){
    var item = {
        name: itemName,
        quantity: quantity
      };
    items.push(item);

  };
  service.showItems = function(){
    return items;
  };
  service.removeItems = function (index) {
    items.splice(index, 1);
  };

  // already Bought
  var bought= [];
  service.Bought = function(index){
    bought.push(items[index]);
    items.splice(index,1);
  };
  service.showBought = function(){
    return bought;
  };
  service.removeBought = function (index) {
    bought.splice(index, 1);
  };

}


})();
