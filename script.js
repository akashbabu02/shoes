function changeimage() {
    document.getElementById("image").src = "veg (2).jpg"
}
function changeimage2() {
    document.getElementById("image").src = "onion-2404583_1280.jpg"
}
let iconcart = document.querySelector('.cart')
let showcart = document.querySelector(".cartTab")
let close = document.querySelector(".close")
let listproduct = document.querySelector('.Listproduct')

listproduct = []
iconcart.addEventListener('click', () => {
    showcart.classList.toggle('showcart');
})
close.addEventListener('click', () => {
    showcart.classList.toggle('showcart');

})

const addDataToHTML = () => {
    listproduct.innerHTML = '';
    if (listproduct.length > 0) {
        listproduct.forEach(products => {
            let newproduct = document.createElement('div');
            newproduct.classList.add('item');
            newproduct.innerHTML = `<img src="apples-805124_640.jpg">
        <h2> Apple</h2>
        <h3>Rs:100</h3>
        <button>Add to cart</button> `;
            listproductHTML.appendchild(newproduct);

        })

    }
}
const initApp = () => {
    fetch('products.json')
        .then(Response => 'Response.json')
        .then(data => {
            listproduct = data;
            console.log(listproduct)
            addDataToHTML();
        })
}
initApp();





