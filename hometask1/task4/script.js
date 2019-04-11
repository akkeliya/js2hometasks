const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    ];

const renderGoodsItem = function (title ='Example of goods', price = 100) { 
    return '<div class="goods-item"><h3>'+title+'</h3><p>'+price+'</p></div>';
}
    

const renderGoodsList = function (list=[{title: 'Good', price: 150}])  {
    let goodsList = [];
    for (let i in list) {
        goodsList[i] = renderGoodsItem(list[i].title, list[i].price);
    };
    for (let i in goodsList) {
           document.querySelector('.goods-list').insertAdjacentHTML( "beforeend", goodsList[i]);
       }
    };
 
renderGoodsList(goods);        