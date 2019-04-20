/*function makeGETRequest (url, callback) {
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
}*/

function makeGETRequest (url) {
    return new Promise ((resolve) => {
    var xhr;
    if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
    }
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 ) {
    resolve(xhr.responseText);
    }
    }
    xhr.open( 'GET' , url, true );
    xhr.send();
});
}
    
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
        constructor (title, price) {
            this.title = title;
            this.price = price;
         }
        render() {
            return `<div class="goods-item"><h3> ${this.title} </h3><p> ${this.price} </p> <button class="add-button" type="button">Добавить в корзину</button></div>`;
        }
}

class GoodsList {
     constructor () {
        this.goods = [];
    }
    fetchGoods() {
        return new Promise ((resolve) => {
        makeGETRequest( `${API_URL}/catalogData.json`)
        .then( (goods) => {
        this.goods = JSON.parse(goods);
        resolve ();
        })
        /*this.goods = [
            { product_name : 'Shirt' , price : 150 },
            { product_name : 'Socks' , price : 50 },
            { product_name : 'Jacket' , price : 350 },
            { product_name : 'Shoes' , price : 250 },
        ];cb();*/
       
        })
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
    addToBasket (){

    }
}

class GoodsBasket {
    constructor () {
        this.goods = [];
    }
    fetchGoods() {
        return new Promise ((resolve) => {
        makeGETRequest( `${API_URL}/getBasket.json`)
        .then( (goods) => {
        //this.goods = JSON.parse(goods);
        this.goods = [{ product_name : 'Shirt' , price : 150 , number: 1},];
        resolve ();
        });
        })
        
    }
    render() {
        let listHtml = '' ;
        this.goods.forEach(good => {
        const basketItem = new BasketItem(good.product_name, good.price, good.number);
        listHtml += basketItem.render();
        });
        document.querySelector('.basket-list').innerHTML = listHtml;
    }
    getBasket () {
        this.getStyle(100);

        this.fetchGoods().then(() => {
            this.render();
            });
    }
    getStyle (a){
        document.getElementsByClassName('basket-list')[0].style.cssText=`position: fixed;\
        width: 85%;\
        height: 60%;\
        top: 50px;\
        left: 5%;\
        margin: 0 auto;\
        display: block;\
        opacity: ${a};\
        background-color: #4958da;\
        `;
    }
    deleteFromBasket () {
        
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
const basket = new GoodsBasket();
list.fetchGoods().then(() => {
list.render();
}); 
document.getElementsByClassName('cart-button')[0].addEventListener('click', () => basket.getBasket());
console.log(list.calculate());      