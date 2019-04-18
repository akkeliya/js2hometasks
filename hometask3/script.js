function makeGETRequest (url, callback) {
    var xhr;
    if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
    }
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 ) {
    callback(xhr.responseText);
    }
    }
    xhr.open( 'GET' , url, true );
    xhr.send();
}
    
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
        constructor (title, price) {
            this.title = title;
            this.price = price;
        }
        render() {
            return `<div class="goods-item"><h3> ${this.title} </h3><p> ${this.price} </p></div>`;
        }
}

class GoodsList {
     constructor () {
        this.goods = [];
    }
    fetchGoods() {
        //makeGETRequest( `${API_URL}/catalogData.json` , (goods) => {
        //this.goods = JSON.parse(goods);
        //})
        this.goods = [
            { product_name : 'Shirt' , price : 150 },
            { product_name : 'Socks' , price : 50 },
            { product_name : 'Jacket' , price : 350 },
            { product_name : 'Shoes' , price : 250 },
        ];
    }
    render() {
        let listHtml = '' ;
        this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price);
        listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    calculate() {
        let allCost = 0;
        this.goods.forEach(good => allCost += good.price);
        return allCost;
    }
}

class GoodsBasket {
    constructor () {
        this.goods = [];
    }
    render() {
        let listHtml = '' ;
        this.goods.forEach(good => {
        const basketItem = new BasketItem(good.title, good.price, good.number);
        listHtml += basketItem.render();
        });
        document.querySelector('.basket-list').innerHTML = listHtml;
    }
}

class BasketItem {
    constructor (title, price, number) {
        this.title = title;
        this.price = price;
        this.number = number;
    }
    render() {
        return `<div class="basket-item"><h3> ${this.title} </h3><p> ${this.price} </p><p> ${this.number} </p></div>`;
    }
}

const list = new GoodsList();
list.fetchGoods(() => {
list.render();
}); // this doesn't work
/*list.fetchGoods();
list.render(); */ // this works
console.log(list.calculate());      