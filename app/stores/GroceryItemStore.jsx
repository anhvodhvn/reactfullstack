var dispatcher = require('./../dispatcher');
var dataService = require('./../services/dataService');

function GroceryItemStore() {    
    var items =[];

    dataService.get('api/items').then(function(data){
        items = data;
        triggerListeners();
    }, function(error){
        console.log(error);
    })

    var listeners = [];

    function getItems() {
        return items;
    }
    
    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();

        dataService.post('api/items', item);
    }

    function deleteGroceryItem(item) {
        var index;
        items.filter(function (_item, _index) {
            if(item.name == _item.name)
                index = _index;
        })
        items.splice(index, 1);
        triggerListeners();

        dataService.del('api/items/' + item._id);
    }

    function setGroceryBoughtStatus(item, isBought) {
        var _item = items.filter(function (i) { return i.name == item.name})[0];
        _item.purchased = isBought || false;
        triggerListeners();

        dataService.patch('api/items/' +  item._id, item);
    }

    function onChange(listener) {
        listeners.push(listener);
    }
    
    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(items);
        })
    }

    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if(split[0] === 'grocery-item'){
            switch (split[1]){
                case 'add':
                    addGroceryItem(event.payload);
                    break;
                case 'delete':
                    deleteGroceryItem(event.payload);
                    break;
                case 'buy':
                    setGroceryBoughtStatus(event.payload, true);
                    break;
                case 'unbuy':
                    setGroceryBoughtStatus(event.payload, false);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }
}

module.exports = new GroceryItemStore();
