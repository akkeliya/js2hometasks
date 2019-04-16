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
        this.goods = [
            { title : 'Shirt' , price : 150 },
            { title : 'Socks' , price : 50 },
            { title : 'Jacket' , price : 350 },
            { title : 'Shoes' , price : 250 },
        ];
    }
    render() {
        let listHtml = '' ;
        this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
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
list.fetchGoods();
list.render(); 
console.log(list.calculate());      