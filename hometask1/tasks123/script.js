const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    ];

const renderGoodsItem = (title='Example of goods', price = 100) => 
     `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
    

const renderGoodsList = (list=[{title: 'Good', price: 150}]) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
       for (let i in goodsList) {
           document.querySelector('.goods-list').insertAdjacentHTML( "beforeend", goodsList[i]);
       }
    };
 
renderGoodsList(goods);
console.log (renderGoodsItem());
        